from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import AppointmentForm, PatientForm, LoginForm, CreateUserForm
from .models import Appointment, Patient
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from . serializers import PatientSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response



from django.contrib import messages


# Create your views here.

def HomePage(request):
    return render(request, 'index.html')


def registerPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, 'Account was created for ' + user)

                return redirect('loginpage')

        context = {'form': form}
        return render(request, 'register.html', context)


def loginPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.info(request, 'Username OR password is incorrect')

        context = {}
        return render(request, 'login.html', context)


def logOut(request):
    logout(request)
    return redirect('loginpage')


@login_required(login_url='login')
def dentistDashboard(request):
    return render(request, 'dentistdashboard.html')


@login_required(login_url='login')
def addpatient(request):
    form = PatientForm()
    if request.method == 'POST':
        form = PatientForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form': form}
    return render(request, 'addpatient.html', context)


@login_required(login_url='login')
def patientlist(request):
    patients_list = Patient.objects.all()
    context = {
        'patients_list': patients_list,
    }
    return render(request, 'patientlist.html', context)


@login_required(login_url='login')
def addappointment(request):
    form = AppointmentForm()

    if request.method == 'POST':
        form = AppointmentForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form': form}

    return render(request, 'addappointment.html', context)

@api_view(['POST'])
def createpatient(request):
    serializer =  PatientSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)


@login_required(login_url='login')
def appointmentslist(request):
    appointmentslist = Appointment.objects.all()
    context = {
        'appointmentslist': appointmentslist,
    }
    # requet and response
    return render(request, 'appointmentslist.html', context)


@login_required(login_url='login')
def showform(request):
    form = FormContactForm(request.POST or None)
    if form.is_valid():
        form.save()

    context = {'form': form}

    return render(request, 'contactform.html', context)
