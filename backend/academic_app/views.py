from django.shortcuts import render

# Create your views here.
# edugestion360-fullstack/backend/academic_app/views.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from users_app.permissions import IsDirectivo # Permiso reutilizado
from .models import Curso, Materia
from .serializers import CursoSerializer, MateriaSerializer

# ViewSet para la gestión de Cursos (Solo Directivos tienen control total)
class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

    def get_permissions(self):
        # Cursos: CRUD solo para Directivos. Listar/Recuperar para Docentes y Directivos
        if self.action in ['list', 'retrieve']:
            self.permission_classes = [IsAuthenticated] # Cualquier autenticado puede ver
        elif self.action in ['create', 'update', 'partial_update', 'destroy']:
            self.permission_classes = [IsDirectivo] # Solo Directivos pueden modificar
        else:
            self.permission_classes = [IsAuthenticated]

        return [permission() for permission in self.permission_classes]

# ViewSet para la gestión de Materias (Solo Directivos tienen control total)
class MateriaViewSet(viewsets.ModelViewSet):
    queryset = Materia.objects.all()
    serializer_class = MateriaSerializer

    def get_permissions(self):
        # Materias: CRUD solo para Directivos. Listar/Recuperar para Docentes y Directivos
        if self.action in ['list', 'retrieve']:
            self.permission_classes = [IsAuthenticated]
        elif self.action in ['create', 'update', 'partial_update', 'destroy']:
            self.permission_classes = [IsDirectivo]
        else:
            self.permission_classes = [IsAuthenticated]

        return [permission() for permission in self.permission_classes]