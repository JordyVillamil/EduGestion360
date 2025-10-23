from rest_framework import serializers
from .models import Calificacion

class CalificacionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Calificacion
        #incluir todos los campos del modelo
        fields = '__all__'