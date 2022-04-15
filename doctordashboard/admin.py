from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Patient, Appointment, Operation, Room, Visit, PaymentJournal, Clinic, JournalEntryType
from django.contrib.auth.models import Group



admin.site.register(Patient)
admin.site.register(Appointment)
admin.site.register(Room)
admin.site.register(Operation)
admin.site.register(Visit)
admin.site.register(Clinic)
admin.site.register(JournalEntryType)
admin.site.register(PaymentJournal)