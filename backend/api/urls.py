from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, CourseViewSet, download_course

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'courses', CourseViewSet)

urlpatterns = [
    path('c/', include(router.urls)),  
    path('download/<int:course_id>/', download_course, name='download_course'),
]
