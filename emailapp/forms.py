from django import forms
from django.core.exceptions import ValidationError

def validate_phone_number(value):
    if not value.isdigit():
        raise ValidationError('The phone number must contain only digits.')
    if len(value) != 11:
        raise ValidationError('The phone number must be 11 digits long.')

class ContactForm(forms.Form):
    name = forms.CharField(max_length=30)
    email = forms.EmailField()
    telephone = forms.CharField(max_length=11, validators=[validate_phone_number])
    subject = forms.CharField(max_length=50)
    message = forms.CharField(widget=forms.Textarea, max_length=500,)