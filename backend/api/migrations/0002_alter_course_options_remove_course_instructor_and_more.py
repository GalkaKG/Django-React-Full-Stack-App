# Generated by Django 4.2.16 on 2024-12-08 09:29

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="course", options={"ordering": ["created_at"]},
        ),
        migrations.RemoveField(model_name="course", name="instructor",),
        migrations.RemoveField(model_name="course", name="markdown_content",),
        migrations.AddField(
            model_name="course",
            name="content",
            field=models.TextField(
                default="", help_text="Write course content in Markdown format"
            ),
        ),
        migrations.AddField(
            model_name="course",
            name="is_published",
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name="course",
            name="created_at",
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name="course",
            name="description",
            field=models.TextField(
                help_text="Write course description in Markdown format"
            ),
        ),
    ]
