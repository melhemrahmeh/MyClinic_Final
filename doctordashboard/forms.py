from django import forms
from django.forms import ModelForm
from .models import Patient , Appointment, Login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User




class PatientForm(ModelForm):
    class Meta:
        model = Patient
        fields = '__all__'


class AppointmentForm(ModelForm):
    
    class Meta:
        model = Appointment
        fields = '__all__'
        
# class FormContactForm(forms.ModelForm):
    
#     class Meta:
#         model = ContactForm
#         fields = '__all__'
        
class LoginForm(forms.ModelForm):
    
    class Meta:
        model =  Login
        fields = '__all__'
        
class CreateUserForm(UserCreationForm):
    
	class Meta:
		model = User
		fields = '__all__'

