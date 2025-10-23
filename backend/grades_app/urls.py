# grades_app/urls.py

from rest_framework.routers import DefaultRouter
from .views import CalificacionViewSet

# 1. Crear el router
router = DefaultRouter()

# 2. Registrar el ViewSet
router.register(r'calificaciones', CalificacionViewSet)

# 3. Asignar las URLs generadas a la variable de Django
urlpatterns = router.urls