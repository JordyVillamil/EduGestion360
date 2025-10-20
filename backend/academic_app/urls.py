# edugestion360-fullstack/backend/academic_app/urls.py
from rest_framework.routers import DefaultRouter
from .views import CursoViewSet, MateriaViewSet # Asegúrate que estos ViewSets estén importados


# 1. Crear el Router
router = DefaultRouter()

# 2. Registrar los ViewSets
router.register(r'cursos', CursoViewSet)  # Esto crea las rutas CRUD para /cursos/
router.register(r'materias', MateriaViewSet)

# 3. Exportar las URLs generadas por el router
urlpatterns = router.urls