from doctordashboard.viewsset import PatientViewSet, AppointmentViewSet
from rest_framework import routers

router =  routers.DefaultRouter()
router.register('patient', PatientViewSet)
router.register('nurse', AppointmentViewSet)
# router.register('dentist', DentistViewSet)
# router.register('secretary', SecretaryViewSet)
# router.register('administrator', AdministartorViewSet)

