from rest_framework import serializers
from .models import Images


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Images
        field = [
            'id', 'description', 'work_type',
            'created_app', 'main_page', 'portfolio_page'
        ]