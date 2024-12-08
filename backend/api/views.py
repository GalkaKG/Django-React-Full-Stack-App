from rest_framework import viewsets
from .models import Category, Course
from .serializers import CategorySerializer, CourseSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly  # Optional: add permission checks if needed
from rest_framework.views import APIView
from rest_framework.response import Response

from django.http import HttpResponse, Http404
from django.shortcuts import get_object_or_404

from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.db.models import F


def download_course(request, course_id):
    course = get_object_or_404(Course, id=course_id)

    if not course.files:
        raise Http404("Course file not available.")

    # Increment the download count
    course.download_count += 1
    course.save()

    # Serve the course file
    response = HttpResponse(course.files, content_type='application/octet-stream')
    response['Content-Disposition'] = f'attachment; filename={course.files.name}'
    return response



class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]  # You can adjust permissions here




class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]  # Adjust permissions as needed

    def get_queryset(self):
        """
        Optionally restricts the returned courses based on the `sort_by` query parameter.
        """
        queryset = Course.objects.all()

        sort_by = self.request.GET.get('sort_by', 'created_at')  # Default to sorting by creation date
        if sort_by == 'downloads':
            queryset = queryset.order_by('-download_count')  # Order by download count (descending)
        else:
            queryset = queryset.order_by('-created_at')  # Order by created_at (newest first)

        return queryset

    def perform_create(self, serializer):
        """Override to associate the logged-in user as the instructor."""
        serializer.save(instructor=self.request.user)


# class CourseViewSet(viewsets.ModelViewSet):
#     queryset = Course.objects.all()
#     serializer_class = CourseSerializer
#     permission_classes = [IsAuthenticatedOrReadOnly]  # Adjust permissions as needed

#     def perform_create(self, serializer):
#         """Override to associate the logged-in user as the instructor."""
#         serializer.save(instructor=self.request.user)


# class FeaturedCourses(APIView):
#     def get(self, request):
#         sort_by = request.GET.get('sort_by', 'created_at')  # Default to sorting by creation date
#         if sort_by == 'downloads':
#             courses = Course.objects.all().order_by('-download_count')  # Order by download count, descending
#         else:
#             courses = Course.objects.all().order_by('-created_at')  # Order by created_at (newest first)

#         serializer = CourseSerializer(courses, many=True)
#         return Response(serializer.data)
