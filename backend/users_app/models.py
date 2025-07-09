# edugestion360-fullstack/backend/users_app/models.py
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # Define las opciones de rol
    ROLE_CHOICES = (
        ('estudiante', 'Estudiante'),
        ('docente', 'Docente'),
        ('directivo', 'Directivo'),
        ('padre', 'Padre de Familia'),
    )
    # Añade el campo de rol
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='estudiante')

    # Asegúrate de que email sea único para evitar registros duplicados
    email = models.EmailField(unique=True, null=False, blank=False)

    # Si planeas usar el email para iniciar sesión,
    # debes asegurarte de que `USERNAME_FIELD` sea 'email' y `REQUIRED_FIELDS` no lo contenga.
    # Sin embargo, AbstractUser ya usa 'username' como USERNAME_FIELD.
    # Para usar email como campo de login, necesitarías personalizar aún más el User (CustomUserManager).
    # Por ahora, mantendremos 'username' como login, y email será un campo único adicional.
    # Si quieres login por email, necesitaríamos otro enfoque. Confirmamos esto más adelante.

    def __str__(self):
        return self.username # O self.email si lo usas como identificador principal