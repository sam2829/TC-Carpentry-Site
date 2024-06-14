from django.db import models
from django.contrib.auth.models import User


class Images(models.Model):

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
