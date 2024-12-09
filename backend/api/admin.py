from django.contrib import admin
from .models import Category, Course
from django.utils.safestring import mark_safe
from markdown import markdown

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name', 'description')

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'instructor', 'created_at', 'updated_at', 'is_published')
    search_fields = ('title', 'description')
    list_filter = ('category', 'instructor', 'is_published')
    ordering = ['created_at']
    readonly_fields = ['download_count'] 
    
    # Display the formatted Markdown content for a preview
    def formatted_content(self, obj):
        """Render a preview of the course content in Markdown."""
        return mark_safe(markdown(obj.content[:100] + "..."))  # Preview first 100 characters
    
    formatted_content.short_description = "Content Preview"
    
    def formatted_description(self, obj):
        """Render a preview of the course description in Markdown."""
        return mark_safe(markdown(obj.description[:100] + "..."))  # Preview first 100 characters
    
    formatted_description.short_description = "Description Preview"

    # Add file upload link in the list display
    def file_link(self, obj):
        if obj.files:
            return mark_safe(f'<a href="{obj.files.url}" target="_blank">Download</a>')
        return "No file"
    
    file_link.short_description = "Course File"


    def file_link(self, obj):
        if obj.files:
            return mark_safe(f'<a href="{obj.files.url}" target="_blank">Download</a>')
        return "No file"

