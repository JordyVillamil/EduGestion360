# users_app/serializers.py

from rest_framework import serializers
from .models import User 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# Serializador para el registro (Tu código original - Está bien)
class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True) 
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role'] 
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = self.Meta.model(**validated_data)
        if password is not None:
            user.set_password(password)
        user.save()
        return user

# --- INICIO DE LA CORRECCIÓN ---

# Serializador de Login (¡SIMPLIFICADO!)
# Ahora espera 'username' y 'password' por defecto.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    # ¡HEMOS BORRADO EL MÉTODO 'validate' Y LOS CAMPOS 'email'/'username' DEL META!
    # Ahora usará el 'username' por defecto.

    @classmethod
    def get_token(cls, user):
        # (Este es tu código original, que añade el rol al token)
        # Es perfecto y React lo necesita.
        token = super().get_token(user)

        token['username'] = user.username
        token['email'] = user.email
        token['role'] = user.role # <--- ¡Esto es lo que necesita React!

        return token

# --- FIN DE LA CORRECCIÓN ---

# Serializador de detalles de usuario (Tu código original - Está bien)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role']