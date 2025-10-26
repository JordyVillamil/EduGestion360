# backend/grades_app/serializers.py

from rest_framework import serializers
from .models import Calificacion

# Importa los modelos que vamos a anidar
from academic_app.models import Materia
from users_app.models import User # Asumiendo que tu modelo se llama User

# --- Serializadores Anidados (para mostrar nombres en lugar de IDs) ---

class SimpleMateriaSerializer(serializers.ModelSerializer):
    """Un serializer simple para mostrar solo el nombre de la materia."""
    class Meta:
        model = Materia
        fields = ['name'] # Solo queremos el campo 'name'

class SimpleEstudianteSerializer(serializers.ModelSerializer):
    """Un serializer simple para mostrar el nombre del estudiante."""
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email'] # Muestra estos campos

# --- Serializador Principal de Calificación (Actualizado) ---

class CalificacionSerializer(serializers.ModelSerializer):
    
    # 1. Campos de LECTURA (GET) - Anidados
    # Reemplaza 'materia' (que era un ID) con el objeto anidado
    materia = SimpleMateriaSerializer(read_only=True)
    # Reemplaza 'estudiante' (que era un ID) con el objeto anidado
    estudiante = SimpleEstudianteSerializer(read_only=True)
    # 'docente' también podría anidarse, pero lo dejamos como ID por ahora

    # 2. Campos de ESCRITURA (POST) - IDs
    # Para crear/actualizar, SÍ necesitamos recibir los IDs.
    materia_id = serializers.PrimaryKeyRelatedField(
        queryset=Materia.objects.all(), source='materia', write_only=True
    )
    estudiante_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.filter(role='estudiante'), source='estudiante', write_only=True
    )

    class Meta:
        model = Calificacion
        fields = [
            'id', 'valor', 'fecha_registro', 'observaciones', 
            'materia',      # Objeto anidado para GET
            'estudiante',   # Objeto anidado para GET
            'docente',      # ID del docente
            'materia_id',   # ID para POST/PUT
            'estudiante_id' # ID para POST/PUT
        ]
        # Los objetos anidados son solo para leer
        read_only_fields = ['materia', 'estudiante']