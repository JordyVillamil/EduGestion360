# edugestion360-fullstack/backend/documents_app/models.py
from django.db import models
from django.conf import settings # Para acceder al modelo de usuario AUTH_USER_MODEL

class Document(models.Model):
    # Tipos de documento predefinidos
    DOCUMENT_TYPES = (
        ('justificativo', 'Justificativo'),
        ('permiso', 'Permiso'),
        ('formulario', 'Formulario'),
        ('informe', 'Informe'),
        ('plan_estudio', 'Plan de Estudio'),
        ('otro', 'Otro'),
    )

    title = models.CharField(max_length=255, verbose_name="Título")
    description = models.TextField(blank=True, null=True, verbose_name="Descripción")
    file = models.FileField(upload_to='documents/', verbose_name="Archivo") # Los archivos se subirán a media/documents/
    document_type = models.CharField(max_length=50, choices=DOCUMENT_TYPES, default='otro', verbose_name="Tipo de Documento")
    uploaded_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='uploaded_documents', verbose_name="Subido por")
    uploaded_at = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Subida")

    # Opcional: Para controlar a quién está dirigido el documento (ej. solo a Directivos)
    # target_role = models.CharField(max_length=20, choices=settings.AUTH_USER_MODEL.ROLE_CHOICES, blank=True, null=True)

    class Meta:
        verbose_name = "Documento"
        verbose_name_plural = "Documentos"
        ordering = ['-uploaded_at'] # Ordenar por fecha de subida descendente

    def __str__(self):
        return self.title