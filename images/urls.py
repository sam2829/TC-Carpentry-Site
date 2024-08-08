from django.urls import path
from images import views

urlpatterns = [
    path('', views.ImageList.as_view(), name='image-list'),
]
