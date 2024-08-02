from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Images
from .serializers import ImageSerializer


class ImageList(APIView):
    """
    View class so that I can retrieve all images
    depending on page type
    """
    def get(self, request):
        main_page = request.query_params.get('main_page', None)
        portfolio_page = request.query_params.get('portfolio_page', None)

        # filtering images based on page type sent from front end
        if main_page is not None:
            images = Images.objects.filter(main_page=True)
        elif portfolio_page is not None:
            images = Images.objects.filter(portfolio_page=True)
        else:
            images = Images.objects.all()

        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)