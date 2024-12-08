from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

# Define a custom UserAdmin class to specify which fields to display in the admin panel
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'username', 'first_name', 'last_name', 'is_active', 'is_staff', 'date_joined')
    list_filter = ('is_active', 'is_staff', 'date_joined')
    search_fields = ('email', 'username')
    ordering = ('-date_joined',)
    readonly_fields = ('date_joined',)

    # Fields for the user creation and editing forms
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {'fields': ('email', 'username', 'password1', 'password2')}),
    )

# Register the custom user model with the admin panel
admin.site.register(CustomUser, CustomUserAdmin)
