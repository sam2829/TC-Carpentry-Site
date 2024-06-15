from rest_framework import serializers
from .models import Images


class ImageSerializer(serializers.ModelSerializer):
    """
    images serializers
    """
    # Validation for if I add future API endpoints
    def validate_image(self, value):
        if value.size > 1024 * 1024 * 2:
            raise serializers.ValidationError(
                'Image size larger than 2MB!'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px'
            )
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Iamge height larger than 4096px'
            )
        return value

    class Meta:
        model = Images
        fields = [
            'id', 'description', 'work_type',
            'created_at', 'main_page', 'portfolio_page'
        ]