# # grades_app/views.py

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Importa tus permisos personalizados
from users_app.permissions import IsDirectivo, IsDocente 

from .models import Calificacion
from .serializers import CalificacionSerializer 

class CalificacionViewSet(viewsets.ModelViewSet):
    queryset = Calificacion.objects.all()
    serializer_class = CalificacionSerializer
    
    def get_permissions(self):
        """
        Define permisos: 
        - Lectura (GET): Solo autenticado.
        - Escritura (POST, PUT, DELETE): Requiere ser Directivo O Docente.
        """
        # Operaciones de Escritura (POST, PUT, DELETE)
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            # Usamos el operador lógico OR (|)
            self.permission_classes = [IsDirectivo | IsDocente] 
        # Operaciones de Lectura (list, retrieve)
        else:
            self.permission_classes = [IsAuthenticated]

        # Retorna la lista de instancias de permisos
        return [permission() for permission in self.permission_classes]
    
    # grades_app/views.py - DENTRO de CalificacionViewSet

    # ... tu código de get_permissions()...

    def get_queryset(self):
        """
        Sobreescribe el queryset.
        Si el usuario es 'estudiante', solo ve sus propias calificaciones.
        Si es 'directivo' o 'docente', ve todas.
        """
        user = self.request.user
        
        # 1. Si el usuario está autenticado y tiene rol de estudiante
        if user.is_authenticated and user.role == 'estudiante':
            # Filtro: Devuelve solo las calificaciones donde el campo 'estudiante'
            # es igual al usuario que hace la petición.
            return Calificacion.objects.filter(estudiante=user)
        
        # 2. Si es directivo o docente (o si el usuario no tiene rol, pero está autenticado), 
        # devuelve todas las calificaciones para propósitos de administración.
        return Calificacion.objects.all()
    
    def perform_create(self, serializer):
        """
        Sobreescribe la creación para asignar automáticamente 
        el usuario autenticado (Docente/Directivo) al campo 'docente'.
        """
        # Esta línea inyecta el usuario actual de la solicitud (self.request.user) 
        # en el campo 'docente' antes de guardar.
        serializer.save(docente=self.request.user)