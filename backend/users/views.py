from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .models import CustomUser

class RegisterView(APIView):
    authentication_classes = []  # Disable authentication
    permission_classes = [AllowAny]  # Allow any user to register without permissions

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        # Ensure the username is unique
        if CustomUser.objects.filter(username=username).exists():
            return Response({"error": "Username already exists."}, status=status.HTTP_400_BAD_REQUEST)

        # Create the user
        user = CustomUser.objects.create_user(username=username, password=password, email=email)
        return Response({"message": "User created successfully!"}, status=status.HTTP_201_CREATED)
