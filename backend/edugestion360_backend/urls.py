"""
URL configuration for edugestion360_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# edugestion360-fullstack/backend/edugestion360_backend/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings  # <--- ¡IMPORTA settings!
from django.conf.urls.static import static  # <--- ¡IMPORTA static!
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"
    ),  # Para obtener tokens (login)
    path(
        "api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"
    ),  # Para refrescar tokens
    path("api/", include("users_app.urls")),
    path("api/", include("documents_app.urls")),
    path("api/", include("academic_app.urls")),
    path("api/", include("grades_app.urls")),
    # Incluye todas las URLs de users_app bajo /api/
    # Aquí incluiremos las URLs de tus aplicaciones (ej. users_app)
    # path('api/', include('users_app.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
