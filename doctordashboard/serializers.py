# from rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import RefreshToken

from doctordashboard.models import Patient, Appointment, Operation, Room, AfterVisitSummary, User

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
        
        
    # def create(self, validated_data):
    #     return Patient.objects.create(validated_data)
    
    
class AfterVisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = AfterVisitSummary
        fields = '__all__'
        
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'is_worker', 'is_patient')

class RegisterSerializer(serializers.ModelSerializer):
    is_patient = serializers.BooleanField()
    is_worker = serializers.BooleanField()
   


    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'is_worker', 'is_patient')

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'is_patient': self.validated_data.get('is_worker', ''),
            'is_worker': self.validated_data.get('is_patient','')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.is_worker = self.cleaned_data.get('is_worker')
        user.is_patient = self.cleaned_data.get('is_patient')
       

        user.save()
        adapter.save_user(request, user, self)
        return user


# class UserSerializerWithToken(serializers.ModelSerializer):
#     user_type = serializers.SerializerMethodField()

#     class Meta:
#         model = Token
#         fields = ('key', 'user', 'user_type')

#     def get_user_type(self, obj):
#         serializer_data = UserSerializer(
#             obj.user
#         ).data
#         is_student = serializer_data.get('is_student')
#         is_teacher = serializer_data.get('is_teacher')
#         return {
#             'is_student': is_student,
#             'is_teacher': is_teacher
#         }
      
      

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id',  'email', 'username', 'password', 'is_worker', 'is_patient', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
        
        
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
        
        
        
        
# class VisitSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Visit
#         fields = '__all__'
        
# class PaymentJournalSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PaymentJournal
#         fields = '__all__'
        
# class VisitOperationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = VisitOperation
#         fields = '__all__'
        
# class RoleSerializer(serializers.ModelSerializer):
#     class Meta:
#         model =  Role
#         fields = '__all__'
        
class OperationSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Operation
        fields = '__all__'
        
        

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Room
        fields = '__all__'
        
