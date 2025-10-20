# edugestion360-fullstack/backend/academic_app/models.py
from django.db import models
from django.conf import settings

class Curso(models.Model):
    """Representa un grupo o grado académico (ej. 5to A, 8vo B, Grado 10)."""
    nombre = models.CharField(max_length=100, unique=True, verbose_name="Nombre del Curso")
    nivel = models.TextField(blank=True, null=True, verbose_name="nivel académico (ej. Primaria, Secundaria, Preparatoria)")
    
    # Relación opcional con Docente Tutor
    tutor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        limit_choices_to={'role': 'docente'}, # Solo se puede asignar un Docente como tutor
        related_name='tutored_courses',
        verbose_name="Docente Tutor"
    )

    def __str__(self):
        return self.name

class Materia(models.Model):
    """Representa una asignatura académica (ej. Matemáticas, Historia, Programación)."""
    name = models.CharField(max_length=100, unique=True, verbose_name="Nombre de la Materia")
    description = models.TextField(blank=True, null=True, verbose_name="Descripción")
    
    # Relación ManyToMany: Una materia se imparte en varios cursos
    courses = models.ManyToManyField(Curso, related_name='subjects', verbose_name="Cursos donde se imparte")

    # Relación ManyToMany: Una materia puede ser impartida por varios Docentes
    teachers = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        limit_choices_to={'role': 'docente'}, # Solo se pueden asignar Docentes
        related_name='teaching_subjects',
        verbose_name="Docentes que la imparten"
    )

    def __str__(self):
        return self.name