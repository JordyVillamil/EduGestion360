# edugestion360-fullstack/backend/edugestion360_backend/settings/development.py
from .base import *
import os

# DEBUG está activado para desarrollo
DEBUG = os.environ.get("DJANGO_DEBUG", "False") == "True"

# Hosts permitidos para desarrollo
ALLOWED_HOSTS = os.environ.get("DJANGO_ALLOWED_HOSTS", "127.0.0.1,localhost").split(",")

# Configuración de la base de datos MySQL (usando variables de entorno de Docker Compose)
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": os.environ.get("DATABASE_NAME"),
        "USER": os.environ.get("DATABASE_USER"),
        "PASSWORD": os.environ.get("DATABASE_PASSWORD"),
        "HOST": os.environ.get("DATABASE_HOST"),
        "PORT": os.environ.get("DATABASE_PORT"),
        "OPTIONS": {
            "init_command": "SET default_storage_engine=INNODB",
        },
    }
}

# Clave secreta (¡nunca hardcodees en producción!)
SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY", "default-insecure-secret-key-for-dev")

# Configuración de CORS
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # Puerto del frontend (Vite)
    "http://127.0.0.1:5173",
    "http://localhost:5174",  # Puerto alternativo de Vite
    "http://127.0.0.1:5174",
]
CORS_ALLOW_CREDENTIALS = True

# INSTALLED_APPS adicionales para desarrollo
INSTALLED_APPS += [
    "corsheaders",  # Para manejar CORS
    "rest_framework",  # Para Django REST Framework
    "rest_framework_simplejwt",
    "users_app",
    "documents_app",
    "academic_app",
    "grades_app",  # Para JWT
    # Aquí irán tus apps personalizadas más adelante
    # 'users_app', # Ejemplo de una app de usuarios
]


# Configuración de JWT Simple
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.IsAuthenticated",),
}

from datetime import timedelta

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ROTATE_REFRESH_TOKENS": False,
    "BLACKLIST_AFTER_ROTATION": False,
    "UPDATE_LAST_LOGIN": False,
    "ALGORITHM": "HS256",
    "SIGNING_KEY": SECRET_KEY,
    "VERIFYING_KEY": "",
    "AUDIENCE": None,
    "ISSUER": None,
    "JWK_URL": None,
    "LEEWAY": 0,
    "AUTH_HEADER_TYPES": ("Bearer",),
    "AUTH_HEADER_NAME": "HTTP_AUTHORIZATION",
    "USER_ID_FIELD": "id",
    "USER_ID_CLAIM": "user_id",
    "USER_AUTHENTICATION_RULE": "rest_framework_simplejwt.authentication.default_user_authentication_rule",
    "AUTH_TOKEN_CLASSES": ("rest_framework_simplejwt.tokens.AccessToken",),
    "TOKEN_TYPE_CLAIM": "token_type",
    "TOKEN_USER_CLASS": "rest_framework_simplejwt.models.TokenUser",
    "JTI_CLAIM": "jti",
    "SLIDING_TOKEN_LIFETIME": timedelta(minutes=5),
    "SLIDING_TOKEN_REFRESH_LIFETIME": timedelta(days=1),
}

AUTH_USER_MODEL = "users_app.User"
MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
