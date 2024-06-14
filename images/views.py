from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Images
from .serializers import ImageSerializer


class ImageList(APIView):
    def get(self, request):
        images = Images.objects.all()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)
