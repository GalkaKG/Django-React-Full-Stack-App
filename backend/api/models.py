from django.db import models
from django.conf import settings  # Assuming you're using Django's built-in User model
from django.utils import timezone
from markdown import markdown
from django.utils.safestring import mark_safe


def course_file_upload_to(instance, filename):
    return f'course_files/{instance.instructor.id}/{instance.id}/{filename}'


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class Course(models.Model):
    CATEGORY_CHOICES = [
        ('Programming', 'Programming'),
        ('Design', 'Design'),
        ('Marketing', 'Marketing'),
        # Add more categories as needed
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField(help_text="Write course description in Markdown format")
    category = models.ForeignKey(Category, related_name="courses", on_delete=models.CASCADE)
    content = models.TextField(help_text="Write course content in Markdown format", null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)  

    instructor = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="courses", on_delete=models.CASCADE, null=True, blank=True)
    files = models.FileField(upload_to=course_file_upload_to, null=True, blank=True)

    download_count = models.PositiveIntegerField(default=0, editable=False)

    def __str__(self):
        return self.title

    def get_markdown_content(self):
        return mark_safe(markdown(self.content))  # Converts Markdown to HTML for rendering

    def get_markdown_description(self):
        return mark_safe(markdown(self.description))  # Converts Markdown description to HTML

    def save(self, *args, **kwargs):
        if self.files:
            print(f"File uploaded: {self.files.name}")
        super(Course, self).save(*args, **kwargs)


    class Meta:
        ordering = ['created_at']
