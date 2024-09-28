from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError  # Import ValidationError
from PIL import Image
from django.core.files.images import get_image_dimensions
import os


def validate_image(file):
    # Ensure the file is an image
    valid_extensions = ['jpg', 'jpeg', 'png', 'gif']
    extension = file.name.split('.')[-1].lower()
    if extension not in valid_extensions:
        raise ValidationError(
            f"Unsupported file extension. Allowed extensions are "
            f"{valid_extensions}"
        )

        # Optionally, check the image dimensions
    try:
        # Check the file size (10MB maximum)
        filesize = file.size
        max_filesize = 10 * 1024 * 1024  # 10MB in bytes
        if filesize > max_filesize:
            raise ValidationError(
                "The maximum file size that can be uploaded is 10MB."
            )
        width, height = get_image_dimensions(file)
        max_dimension = 4096
        if width > max_dimension or height > max_dimension:
            raise ValidationError(
                f"Image dimensions are too large. Maximum width and height"
                f" allowed is {max_dimension}px."
            )
    except AttributeError:
        raise ValidationError("Invalid image file.")


class Images(models.Model):
    """
    Class for the images model
    """

    # List of work type options
    ROOF = 'Roof'
    KITCHEN = 'Kitchen'
    DOORS = 'Doors'
    FLOORS = 'Floors'
    SKIRTINGS = 'Skirtings'
    OTHER = 'Other'

    WORK_TYPE_CHOICES = [
        (ROOF, 'Roof'),
        (KITCHEN, 'Kitchen'),
        (DOORS, 'Doors'),
        (FLOORS, 'Floors'),
        (SKIRTINGS, 'Skirtings'),
        (OTHER, 'Other'),
    ]
    image = models.ImageField(
        upload_to='images/', blank=False, validators=[validate_image]
    )
    description = models.TextField(max_length=50, blank=False)
    work_type = models.CharField(
        max_length=15, choices=WORK_TYPE_CHOICES, blank=False
    )
    created_at = models.DateTimeField(auto_now_add=True)
    main_page = models.BooleanField(default=False)
    portfolio_page = models.BooleanField(default=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.description} for {self.work_type}'

    def clean(self):
        # Make sure that main page or portfolio page is selected
        if not (self.main_page or self.portfolio_page):
            raise ValidationError(
                'At least one of main page or portfolio page must be selected.'
            )
