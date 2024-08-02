from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Images
from .serializers import ImageSerializer
from django.core.exceptions import ValidationError
from django.core.files.uploadedfile import SimpleUploadedFile


class ImageListTests(APITestCase):
    """
    class for testing the image views
    """
    def setUp(self):
        self.url = reverse('image-list')
        self.image1 = Images.objects.create(
            image='images/test1.jpg', 
            description='Test Image 1', 
            work_type='Roof', 
            main_page=True,
            portfolio_page=False
        )
        self.image2 = Images.objects.create(
            image='images/test2.jpg', 
            description='Test Image 2', 
            work_type='Kitchen', 
            portfolio_page=True
        )
    # test to get all images
    def test_get_all_images(self):
        response = self.client.get(self.url)
        images = Images.objects.all()
        serializer = ImageSerializer(images, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(len(response.data), 2)

    # test to get main page images
    def test_get_main_page_images(self):
        response = self.client.get(self.url, {'main_page': 'true'})
        images = Images.objects.filter(main_page=True)
        serializer = ImageSerializer(images, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['description'], 'Test Image 1')
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(len(response.data), 1)

    # test to get images from portfolio page
    def test_get_portfolio_page_images(self):
        response = self.client.get(self.url, {'portfolio_page': 'true'})
        images = Images.objects.filter(portfolio_page=True)
        serializer = ImageSerializer(images, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['description'], 'Test Image 2')
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(len(response.data), 1)


class ImagesModelTests(APITestCase):
    """
    Class to test images model validations
    """

    # test to check main page or portfolio page must be selected
    def test_image_model_validation_no_page_selected(self):
        image = Images(
            image=SimpleUploadedFile("test.jpg", b"file_content", content_type="image/jpeg"),
            description='Test Image',
            work_type='Roof',
            main_page=False,
            portfolio_page=False
        )
        with self.assertRaises(ValidationError) as cm:
            image.clean()
        self.assertIn('At least one of main page or portfolio page must be selected.', cm.exception.messages)

    # test for invalid extension on image
    def test_image_model_invalid_extension(self):
        image = Images(
            image=SimpleUploadedFile("test.txt", b"file_content", content_type="text/plain"),
            description='Test Image',
            work_type='Roof',
            main_page=True
        )
        with self.assertRaises(ValidationError) as cm:
            image.full_clean()  # This runs the model validation including field validators
        self.assertIn('Unsupported file extension. Allowed extensions are', str(cm.exception))

    # test for image file to large
    def test_image_model_large_file(self):
        large_file = SimpleUploadedFile("test.jpg", b"a" * (10 * 1024 * 1024 + 1), content_type="image/jpeg")  # Just over 10MB
        image = Images(
            image=large_file,
            description='Test Image',
            work_type='Roof',
            main_page=True
        )
        with self.assertRaises(ValidationError) as cm:
            image.full_clean()
        self.assertIn('The maximum file size that can be uploaded is 10MB.', str(cm.exception))
