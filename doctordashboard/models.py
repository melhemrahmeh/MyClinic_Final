from django.db import models
import datetime
from django.contrib.auth.models import AbstractUser



# How to make Keys in specific key

# class Clinic(models.Model):
   
#     clinicName = models.CharField(max_length=100, blank=True, null=True)
#     _id = models.AutoField(primary_key=True, editable=False, null=False)


# #select 
class Role(models.Model):
    
    ADMINISTRATOR =  'Administartor'
    DENTIST_ASSISTANT =  'Dentist_Assistant'
    NURSE =  'Nurse'
    SECRETARY = 'Secretary'

    role_choices =  [
        (ADMINISTRATOR, 'Administartor'),
        (DENTIST_ASSISTANT, 'Dentist_Assistant'),
        (NURSE, 'Nurse'),
        (SECRETARY, 'Secretary'),
    ]
    
    title =  models.CharField(max_length = 100 , choices=role_choices, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return self.title
    
    


class User(AbstractUser):
    # clinic = models.ForeignKey(Clinic, on_delete = models.CASCADE)
    # is_doctor =  ...
    # is_patient = ...
    # is_secretery = ...
    # is_nurse =  ...
    # is_administrator = ...
    
    role =  models.ForeignKey(Role, on_delete = models.CASCADE, null=True)
    first_name = models.CharField(max_length = 50, null=True)
    last_name = models.CharField(max_length = 50,null=True)
    MALE =  'M'
    FEMALE =  'F'
    OTHER =  'O'
    gender_choices =  [
        (MALE, 'Male'),
        (FEMALE, 'Female'),
        (OTHER, 'Other'),
    ]
    gender =  models.CharField(max_length= 2, choices= gender_choices, default= OTHER, null=True)
    email =  models.EmailField(null=True)
    phone_number =  models.CharField(max_length=8, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    def __str__(self):
        return self.email
    
    


class Room(models.Model):
    # room number m7al title
    # clinic =  models.ForeignKey(Clinic, on_delete = models.CASCADE)
    room_name = models.CharField(max_length = 100, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    def __str__(self):
        return self.room_name
    
    


class Operation(models.Model):
    ROOTCANAL = 'RC'
    TOOTHEXTRACTIONS = 'TE'
    PULPOTOMY = 'PU'
    BRIDGE = 'BR'
    SURGERIESTYPES = [
        (ROOTCANAL, 'Root Canal'),
        (TOOTHEXTRACTIONS, 'Tooth Extraction'),
        (PULPOTOMY, 'Pulpotomy'),
        (BRIDGE, 'Bridge'),
    ]
    # serach the clinc by operations it's provide
    # and more for surgerytypes we might add a check list on the dentist sign up  the list of operations he/ she does
    # clinic =  models.ManyToManyField(Clinic)
    title = models.CharField(max_length=2, blank= True,  choices= SURGERIESTYPES, null = True)
    cost =  models.DecimalField(max_digits=10, decimal_places=2, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    def __str__(self):
        return self.title
    
    




class Patient(models.Model):
    firstName = models.CharField(max_length=100, blank=True, null=True)
    lastName = models.CharField(max_length=100, blank=True, null=True)
    PhoneNumber = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    birthDate = models.DateField(blank=True, null=True)
    address =  models.CharField(max_length = 50)
    #if yes fill 
    
    gender_choices =  [
        
        ("MALE", "Male"),
        ("FEMALE", "Female"),
        ("OTHER", "Other"),
    ]
    gender =  models.CharField(max_length= 20, choices= gender_choices, default= "OTHER")
    medicattions = models.BooleanField(default=False, null=  True)
    med_text =  models.TextField(blank =  True, null =  True)
    allergies = models.BooleanField(default=False, null= True)
    allergies_text =  models.TextField(blank =  True, null=True)
    #Emergency
    E_firstName = models.CharField(max_length=100, blank=True, null=True)
    E_lastName = models.CharField(max_length=100, blank=True, null=True) 
    # E_Relationship = models.CharField(max_length = 150, default='father')
    E_contactNumber = models.CharField(max_length=100, blank=True, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return self.email
    
    
    

class Appointment(models.Model):
    
    #Think more about the relations
    #give each operation an estimated time both the dentist and patient know the time and benefit it
    patient =  models.OneToOneField(Patient, on_delete = models.CASCADE, null=True)
    createdby =  models.ForeignKey(User, on_delete = models.CASCADE, related_name='+', null = True)
    room = models.OneToOneField(Room, on_delete = models.CASCADE, default="Operation", null = True)
    doctor = models.OneToOneField(User, on_delete =  models.CASCADE, default="Moh", null = True)
    date = models.DateField(auto_now=False, null=True)
    time =  models.TimeField(auto_now=False, null=True)
    # duration =  models.DurationField()
    operation = models.OneToOneField(Operation, on_delete= models.CASCADE, default="Tooth Extraction", null=True)
    # reason =  models.CharField(max_length=100, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return str(self.patient)
    
    

    

# class Visit(models.Model):
#     patient = models.OneToOneField(Patient, on_delete = models.CASCADE)
#     room = models.OneToOneField(Room, on_delete = models.CASCADE)
#     doctor = models.OneToOneField(User, on_delete =  models.CASCADE)
#     datetime = models.DateTimeField(blank=True, default=datetime.date.today, null=False)
#     cost =  models.DecimalField(max_digits=10, decimal_places=2, default=0)
#     comments = models.CharField(max_length=500)
    
# class VisitOperation(models.Model):
#     visit = models.OneToOneField(Visit, on_delete=models.CASCADE)
#     operation = models.ForeignKey(Operation,  on_delete=models.CASCADE)
#     cost = models.DecimalField( max_digits=10, decimal_places=2, default= 0)


# class JournalEntryType(models.Model):
#     title =  models.CharField(max_length=100)
    

# # paymentjournal link it to the visit
# class PaymentJournal(models.Model):
#     patient =  models.OneToOneField(Patient, on_delete=models.CASCADE)
#     journalentrytype =  models.OneToOneField(JournalEntryType, on_delete =  models.CASCADE)
#     clinic =  models.OneToOneField(Clinic, on_delete=models.CASCADE)
#     user = models.OneToOneField(User, on_delete = models.PROTECT)
#     amount =  models.DecimalField(max_digits=10, decimal_places=2, default= 0)
#     reason =  models.CharField(max_length=100)
  
# class Login(models.Model):
#     username =  models.CharField(max_length = 100)
#     password =  models.CharField(max_length = 50)
    
# class CreateUserForm(models.Model):
#     username =  models.CharField(max_length= 100)
#     email =  models.EmailField()
#     password1 =  models.CharField(max_length = 50)
#     password2 = models.CharField(max_length = 50)
    