from django.contrib import admin
from .models import Images

class ImagesAdmin(admin.ModelAdmin):
    """
    Class for images in the admin page
    """
    list_display = ('description', 'work_type', 'created_at', 'main_page', 'portfolio_page')
    search_fields = ('description', 'work_type')
    list_filter = ('work_type', 'main_page', 'portfolio_page')

    def save_model(self, request, obj, form, change):
        # Validate the image before saving
        obj.clean()
        super().save_model(request, obj, form, change)

# Register the Images model with the ImagesAdmin configuration
admin.site.register(Images, ImagesAdmin)