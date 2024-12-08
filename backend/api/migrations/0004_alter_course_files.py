# Generated by Django 4.2.16 on 2024-12-08 10:25

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_course_files_course_instructor_delete_lesson"),
    ]

    operations = [
        migrations.AlterField(
            model_name="course",
            name="files",
            field=models.FileField(
                blank=True, null=True, upload_to=api.models.course_file_upload_to
            ),
        ),
    ]