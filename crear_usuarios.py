from users_app.models import User

# Crear estudiante
estudiante, created = User.objects.get_or_create(
    username="estudiante1",
    defaults={
        "email": "estudiante1@test.com",
        "first_name": "Juan",
        "last_name": "Pérez",
        "role": "estudiante",
    },
)
if created:
    estudiante.set_password("123456")
    estudiante.save()
    print("✓ Estudiante creado: estudiante1 / 123456")
else:
    print("✓ Estudiante ya existe: estudiante1")

# Crear docente
docente, created = User.objects.get_or_create(
    username="docente1",
    defaults={
        "email": "docente1@test.com",
        "first_name": "María",
        "last_name": "García",
        "role": "docente",
    },
)
if created:
    docente.set_password("123456")
    docente.save()
    print("✓ Docente creado: docente1 / 123456")
else:
    print("✓ Docente ya existe: docente1")

# Crear directivo
directivo, created = User.objects.get_or_create(
    username="directivo1",
    defaults={
        "email": "directivo1@test.com",
        "first_name": "Carlos",
        "last_name": "Rodríguez",
        "role": "directivo",
    },
)
if created:
    directivo.set_password("123456")
    directivo.save()
    print("✓ Directivo creado: directivo1 / 123456")
else:
    print("✓ Directivo ya existe: directivo1")

print("\n=== USUARIOS DE PRUEBA ===")
print("Estudiante: estudiante1 / 123456")
print("Docente: docente1 / 123456")
print("Directivo: directivo1 / 123456")
