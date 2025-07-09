# edugestion360-fullstack/backend/users_app/views.py
from rest_framework import generics, viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserRegisterSerializer, MyTokenObtainPairSerializer, UserSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .permissions import IsDirectivo # <--- ¡IMPORTA TU PERMISO PERSONALIZADO!
from .models import User # <--- ¡IMPORTA TU MODELO USER!


# Vista para el registro de nuevos usuarios
class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserRegisterSerializer
    permission_classes = [AllowAny] # Permite que cualquier usuario (no autenticado) se registre

# Vista para el inicio de sesión JWT (personalizada para usar MyTokenObtainPairSerializer)
class MyObtainTokenPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# Vista para obtener los detalles del usuario autenticado
class UserMeView(APIView):
    permission_classes = [IsAuthenticated] # Solo usuarios autenticados pueden acceder

    def get(self, request):
        serializer = UserSerializer(request.user) # Serializa el objeto de usuario actual
        return Response(serializer.data)
    
class UserManagementViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all() # Obtiene todos los usuarios
    serializer_class = UserSerializer # Usamos el serializador UserSerializer

    def get_permissions(self):
        # Personaliza los permisos según la acción (GET, POST, PUT, DELETE)
        if self.action in ['list', 'retrieve']:
            # Cualquier usuario autenticado puede ver la lista de usuarios o un usuario específico
            self.permission_classes = [IsAuthenticated]
        elif self.action in ['create', 'update', 'partial_update', 'destroy']:
            # Solo Directivos pueden crear, actualizar o eliminar usuarios
            # (aunque el registro de 'create' es manejado por UserRegisterView)
            self.permission_classes = [IsDirectivo]
        else:
            self.permission_classes = [IsAuthenticated] # Permiso por defecto si no coincide

        return [permission() for permission in self.permission_classes]

    # Para el método create en este ViewSet, usaríamos el UserRegisterSerializer
    # para que se maneje el hasheo de la contraseña.
    # Sin embargo, el endpoint de registro ya existe. Si quieres crear usuarios
    # (sin hashear contraseña o con más control) a través de este ViewSet,
    # deberías sobrescribir el método `create` o usar `UserRegisterSerializer` aquí.
    # Por simplicidad, asumiremos que el registro es para nuevos usuarios y este
    # ViewSet es para la gestión por directivos.
    # Si un Directivo necesita crear un usuario y asignarle un rol directamente,
    # UserRegisterSerializer sería más adecuado, o un serializador diferente.