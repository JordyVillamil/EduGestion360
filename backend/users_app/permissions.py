# edugestion360-fullstack/backend/users_app/permissions.py
from rest_framework import permissions

class IsDirectivo(permissions.BasePermission):
    """
    Permiso personalizado para permitir el acceso solo a usuarios con rol 'directivo'.
    """
    def has_permission(self, request, view):
        # Asume que el rol del usuario está disponible en request.user.role
        return request.user and request.user.is_authenticated and request.user.role == 'directivo'

    def has_object_permission(self, request, view, obj):
        # Para permisos a nivel de objeto (si un directivo puede editar SOLO ciertos objetos)
        # Por ahora, solo necesitamos permisos a nivel de vista.
        return True # O implementa lógica más granular si es necesario
    
class IsDocente(permissions.BasePermission):
    """
    Permiso personalizado para permitir el acceso solo a usuarios con rol 'docente'.
    """
    def has_permission(self, request, view):
        # Asume que el rol del usuario está disponible en request.user.role
        return request.user and request.user.is_authenticated and request.user.role == 'docente'

    def has_object_permission(self, request, view, obj):
        # Para permisos a nivel de objeto (si un docente puede editar SOLO ciertos objetos)
        # Por ahora, solo necesitamos permisos a nivel de vista.
        return True # O implementa lógica más granular si es necesario