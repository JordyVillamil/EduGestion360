# edugestion360-fullstack/backend/documents_app/views.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Document
from .serializers import DocumentSerializer
from users_app.permissions import IsDirectivo # Reutiliza tu permiso personalizado

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

    def get_permissions(self):
        """
        Define permisos basados en la acción:
        - list, retrieve: Cualquier usuario autenticado.
        - create: Solo docentes y directivos.
        - update, partial_update, destroy: Solo directivos.
        """
        if self.action in ['list', 'retrieve']:
            self.permission_classes = [IsAuthenticated]
        elif self.action == 'create':
            # Permite a docentes o directivos subir documentos
            self.permission_classes = [IsAuthenticated] # Se necesita verificar el rol en `perform_create` si es más estricto
        elif self.action in ['update', 'partial_update', 'destroy']:
            self.permission_classes = [IsDirectivo] # Solo directivos pueden editar/eliminar documentos
        else:
            self.permission_classes = [IsAuthenticated] # Permiso por defecto

        return [permission() for permission in self.permission_classes]

    def perform_create(self, serializer):
        # Asigna automáticamente el usuario que subió el documento
        # También puedes añadir lógica para verificar el rol del usuario aquí si `create` es más restrictivo
        if not self.request.user.is_authenticated:
            # Esto no debería pasar con IsAuthenticated, pero es un buen guard
            raise PermissionDenied("Authentication required to upload documents.")

        # Puedes añadir una verificación de rol aquí si el permiso 'create' en get_permissions
        # es simplemente IsAuthenticated.
        # Ej: if self.request.user.role not in ['docente', 'directivo']:
        #         raise PermissionDenied("Only teachers and directors can upload documents.")

        serializer.save(uploaded_by=self.request.user)

    # Para descargar un archivo, a menudo se crea una vista separada o se maneja directamente en el frontend.
    # Aquí, la URL del archivo ya está en el serializador, así que el frontend puede usarla.