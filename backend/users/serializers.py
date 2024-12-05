from .models import CustomUser

from rest_framework import serializers
from .models import CustomUser
from rest_framework.validators import UniqueValidator

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(validators=[UniqueValidator(queryset=CustomUser.objects.all())])
    # Add any other fields as necessary
    
    class Meta:
        model = CustomUser
        fields = ['email', 'password', 'first_name', 'last_name']  # Example fields
