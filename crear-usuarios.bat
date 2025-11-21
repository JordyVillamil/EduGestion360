@echo off
chcp 65001 >nul
echo ========================================
echo   👤 Crear Usuarios de Prueba
echo ========================================
echo.

echo Este script creará 3 usuarios de prueba:
echo   - estudiante1 / 123456 (Rol: Estudiante)
echo   - docente1    / 123456 (Rol: Docente)
echo   - directivo1  / 123456 (Rol: Directivo)
echo.
echo ¿Continuar? (S/N)
set /p confirm=
if /i not "%confirm%"=="S" exit /b

echo.
echo Creando usuarios...
echo.

docker-compose exec -T backend python manage.py shell << EOF
from django.contrib.auth import get_user_model
User = get_user_model()

# Eliminar usuarios si ya existen
User.objects.filter(username__in=['estudiante1', 'docente1', 'directivo1']).delete()

# Crear nuevos usuarios
User.objects.create_user(
    username='estudiante1',
    password='123456',
    email='estudiante@test.com',
    first_name='Juan',
    last_name='Pérez',
    role='estudiante'
)

User.objects.create_user(
    username='docente1',
    password='123456',
    email='docente@test.com',
    first_name='María',
    last_name='García',
    role='docente'
)

User.objects.create_user(
    username='directivo1',
    password='123456',
    email='directivo@test.com',
    first_name='Carlos',
    last_name='López',
    role='directivo'
)

print('\n✅ Usuarios creados exitosamente!')
print('\nCredenciales:')
print('  estudiante1 / 123456')
print('  docente1    / 123456')
print('  directivo1  / 123456')
EOF

echo.
echo ========================================
echo   ✅ Usuarios creados
echo ========================================
echo.
pause
