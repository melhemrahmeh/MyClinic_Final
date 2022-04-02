from django.contrib import admin

# Register your models here.

from .models import Patient, Appointment, Operation, Room 



# class UserAdmin(BaseUserAdmin):
#     add_fieldsets = (
#         (None, {
#             'fields': ('email', 'username', 'is_doctor', 'is_patient','is_nurse', 'is_secretery', 'password1', 'password2')
#         }),
#         ('Permissions', {
#             'fields': ('is_superuser', 'is_staff')
#         })
#     )
#     fieldsets = (
#         (None, {
#             'fields': ('email', 'username', 'is_doctor', 'is_patient','is_nurse', 'is_secretery', 'password')
#         }),
#         ('Permissions', {
#             'fields': ('is_superuser', 'is_staff')
#         })
#     )
#     list_display = ['email', 'username', 'is_doctor', 'is_patient','is_nurse', 'is_secretery']
#     search_fields = ('email', 'username')
#     ordering = ('email',)

admin.site.register(Patient)
# admin.site.register(Role)
admin.site.register(Appointment)
admin.site.register(Room)
# admin.site.register(User)
admin.site.register(Operation)
# admin.site.register(Visit)
# admin.site.register(Clinic)
# admin.site.register(VisitOperation)
# admin.site.register(JournalEntryType)
# admin.site.register(PaymentJournal)