from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Patient, Appointment, Operation, Room, AfterVisitSummary, User
from django.contrib.auth.models import Group


class UserAdmin(BaseUserAdmin):
    add_fieldsets = (
        (None, {
            'fields': ('email', 'username', 'is_worker', 'is_patient', 'password1', 'password2')
        }),
        ('Permissions', {
            'fields': ('is_superuser', 'is_staff')
        })
    )
    fieldsets = (
        (None, {
            'fields': ('email', 'username', 'is_worker', 'is_patient', 'password')
        }),
        ('Permissions', {
            'fields': ('is_superuser', 'is_staff')
        })
    )
    list_display = ['email', 'username', 'is_worker', 'is_patient']
    search_fields = ('email', 'username')
    ordering = ('email',)

admin.site.register(Patient)
# admin.site.register(Role)
admin.site.register(Appointment)
admin.site.register(Room)
admin.site.register(User, UserAdmin)
admin.site.register(Operation)
admin.site.register(AfterVisitSummary)
# admin.site.register(Clinic)
# admin.site.register(VisitOperation)
# admin.site.register(JournalEntryType)
# admin.site.register(PaymentJournal)