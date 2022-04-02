
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from doctordashboard.models import Room
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from doctordashboard.serializers import RoomSerializer
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.contrib import messages
from django.core.files.storage import default_storage
from rest_framework.permissions import IsAdminUser




@api_view(['GET'])
def getRooms(request):
    rooms = Room.objects.all()
    room_serializer = RoomSerializer(rooms, many=True)
    return Response(room_serializer.data)


@api_view(['GET'])
def getRoom(request, pk):
    rooms = Room.objects.get(_id=pk)
    serializer = RoomSerializer(rooms, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def postRoom(request):
    # permission_classes = [IsAdminUser]
    room = JSONParser().parse(request)
    room_serializer = RoomSerializer(data=room)
    if room_serializer.is_valid():
        room_serializer.save()
        return Response("Added Successfully!!", safe=False)
    return Response("Failed to Add.", safe=False)

@api_view(['PUT'])
def putRoom(request, pk):
    # permission_classes = [IsAdminUser]
    room = JSONParser().parse(request)
    room_data = App.objects.get(_id=pk)
    room_serializer = RoomSerializer(room_data, data=room)
    if room_serializer.is_valid():
        room_serializer.save()
        return Response("Updated Successfully!!", safe=False)
    return Response("Failed to Update.", safe=False)
   
@api_view(['DELETE'])
def deleteRoom(request, pk):
    # permission_classes = [IsAdminUser]
    room = Room.objects.get(_id=pk)
    Room.delete()
    return Response('"Deleted Succeffully!!", safe=False') 
