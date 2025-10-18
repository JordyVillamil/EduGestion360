# edugestion360-fullstack/backend/documents_app/serializers.py
from rest_framework import serializers
from .models import Document

class DocumentSerializer(serializers.ModelSerializer):
    # Muestra el username del usuario que subió el documento
    uploaded_by_username = serializers.CharField(source='uploaded_by.username', read_only=True)

    # Opcional: URL completa del archivo (para descargar)
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = ['id', 'title', 'description', 'file', 'document_type', 'uploaded_by', 'uploaded_by_username', 'uploaded_at', 'file_url']
        read_only_fields = ['uploaded_by', 'uploaded_by_username', 'uploaded_at'] # Estos campos se asignan automáticamente

    def get_file_url(self, obj):
        # Construye la URL completa del archivo
        if obj.file:
            request = self.context.get('request')
            if request is not None:
                return request.build_absolute_uri(obj.file.url)
            return obj.file.url
        return None