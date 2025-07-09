# edugestion360-fullstack/backend/users_app/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter # Importa DefaultRouter para crear un router de API REST
from .views import UserRegisterView, MyObtainTokenPairView, UserMeView, UserManagementViewSet
from rest_framework_simplejwt.views import TokenRefreshView # Importa TokenRefreshView directamente aquí

# Crea un router y registra tu ViewSet
router = DefaultRouter()
router.register(r'users', UserManagementViewSet) # Registra UserManagementViewSet bajo el prefijo 'users'


urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='register'),
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'), # Endpoint de login
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), # Endpoint para refrescar token
    path('me/', UserMeView.as_view(), name='user_me'), # Endpoint para obtener datos del usuario actual
    path('', include(router.urls)), # Incluye las URLs del router para el ViewSet de gestión de usuarios
]