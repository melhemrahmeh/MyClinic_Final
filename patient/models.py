from django.db import models

   

class Appointment(models.Model):
   
    date = models.DateField(auto_now=False, null=True)
    time =  models.TimeField(auto_now=False, null=True)
    operation = models.OneToOneField(Operation, on_delete= models.CASCADE, default="Tooth Extraction", null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return str(self._id)
