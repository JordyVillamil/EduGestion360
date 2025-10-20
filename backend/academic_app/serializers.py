# academic_app/serializers.py

from rest_framework import serializers
from .models import Curso, Materia

# Serializador para el modelo Curso
class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        # Asegúrate de que estos campos coincidan con tu models.py
        fields = ['id', 'name', 'description', 'tutor']
        # Campo de solo lectura para evitar que se envíe en el POST/PUT
        read_only_fields = ['id'] 
        
# Serializador para el modelo Materia
class MateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materia
        # Nota: Los ManyToMany (courses, teachers) se listan, pero DRF los maneja
        # automáticamente con sus IDs en la entrada (POST/PUT).
        fields = ['id', 'name', 'description', 'courses', 'teachers']
        read_only_fields = ['id']