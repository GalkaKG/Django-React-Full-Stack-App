from rest_framework import serializers
from .models import Category, Course

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description']

class CourseSerializer(serializers.ModelSerializer):
    category = CategorySerializer()  
    instructor = serializers.StringRelatedField()  
    files = serializers.FileField(required=False)

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'content', 'category', 'instructor', 'created_at', 'updated_at', 'is_published', 'files']

    def create(self, validated_data):
        category_data = validated_data.pop('category')
        category = Category.objects.get(id=category_data['id'])
        course = Course.objects.create(category=category, **validated_data)
        return course
