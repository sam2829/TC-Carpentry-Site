from django.core.mail import EmailMessage
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import logging

logger = logging.getLogger(__name__)

class SendEmailView(APIView):
    """
    Class so user can send email
    """
    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        telephone = request.data.get('telephone')
        subject = request.data.get('subject')
        message = request.data.get('message')

        # Construct the email content
        email_message = f"Name: {name}\nEmail: {email}\nTelephone: {telephone}\n Subject: {subject}\n\n{message}"

        email = EmailMessage(
            subject=subject,
            body=email_message,
            to=['smscarisbrick1@gmail.com'],
        )

        try:
            email.send()
            return Response({'message': 'Email sent successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error(f"Failed to send email: {e}")
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)