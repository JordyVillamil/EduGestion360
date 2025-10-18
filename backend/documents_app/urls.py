# edugestion360-fullstack/backend/documents_app/urls.py
from rest_framework.routers import DefaultRouter
from .views import DocumentViewSet

router = DefaultRouter()
router.register(r'documents', DocumentViewSet) # Registra DocumentViewSet bajo el prefijo 'documents'

urlpatterns = router.urls # Incluye todas las URLs generadas por el router