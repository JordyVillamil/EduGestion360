# grades_app/models.py

from django.db import models
from django.conf import settings
from academic_app.models import Materia 
# Nota: La Materia debe existir en tu base de datos para crear la Calificación

class Calificacion(models.Model):
    """Modelo que almacena la calificación de un estudiante en una materia específica."""
    
    # Relación: El estudiante que recibe la nota (solo rol 'estudiante')
    estudiante = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        limit_choices_to={'role': 'estudiante'},
        related_name='calificaciones_recibidas',
        verbose_name="Estudiante"
    )
    
    # Relación: La materia a la que pertenece la nota
    materia = models.ForeignKey(
        Materia,
        on_delete=models.CASCADE,
        related_name='calificaciones',
        verbose_name="Materia"
    )
    
    # Relación: El docente que asignó la nota (opcional)
    docente = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL, # Mantiene la nota si el docente es eliminado
        null=True,
        limit_choices_to={'role': 'docente'},
        related_name='calificaciones_asignadas',
        verbose_name="Docente que asignó"
    )

    # Valor de la nota 
    valor = models.DecimalField(
        max_digits=4, 
        decimal_places=2,
        verbose_name="Valor de la Calificación"
    )
    
    fecha_registro = models.DateField(auto_now_add=True)
    observaciones = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Nota de {self.estudiante.first_name} en {self.materia.name}: {self.valor}"

    class Meta:
        verbose_name = "Calificación"
        verbose_name_plural = "Calificaciones"