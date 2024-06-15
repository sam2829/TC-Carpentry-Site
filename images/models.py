from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError  # Import ValidationError
from PIL import Image


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
    image = models.ImageField(upload_to='images/', blank=False)
    description = models.TextField(max_length=50, blank=False)
    work_type = models.CharField(max_length=15, choices=WORK_TYPE_CHOICES, blank=False)
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
            raise ValidationError('At least one of main page or portfolio page must be selected.')
        
        

        # # Check image dimensions and size
        print(f"Attempting to clean image: {self.image.name}")
        img = Image.open(self.image)
        print(f"Image dimensions: {img.width}x{img.height}, size: {self.image.size}")
        if img.width > 4096 or img.height > 4096:
            raise ValidationError('Image dimensions cannot exceed 4096px.')
        if self.image.size > 2 * 1024 * 1024:
            raise ValidationError('Image size cannot exceed 2MB.')
        print("Validation passed successfully.")


    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)