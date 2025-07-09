# edugestion360-fullstack/backend/users_app/serializers.py
from rest_framework import serializers
from .models import User # Importa tu modelo de usuario personalizado
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# Serializador para el registro de nuevos usuarios
class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True) # Campo de escritura única para la contraseña

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role'] # Campos que se esperan para el registro

    def create(self, validated_data):
        # Crea el usuario y hashea la contraseña
        password = validated_data.pop('password', None)
        user = self.Meta.model(**validated_data)
        if password is not None:
            user.set_password(password) # Hashea la contraseña
        user.save()
        return user

# Serializador para el inicio de sesión JWT (extiende el de simplejwt)
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Añade campos personalizados al payload del token
        token['username'] = user.username
        token['email'] = user.email
        token['role'] = user.role # <--- ¡IMPORTANTE: AÑADE EL ROL AL TOKEN!

        return token

# Serializador para obtener detalles del usuario actual
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role'] # Campos que se devolverán