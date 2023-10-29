from django.contrib.auth.models import User
from rest_framework import viewsets, generics, mixins
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Food, Order
from .serializer import FoodSerializer, OrderSerializer, UserSerializer

class MenuList(generics.ListAPIView):
   queryset = Food.objects.all()
   serializer_class = FoodSerializer
   permission_classes = [IsAuthenticated]

class OrdersList(generics.ListAPIView):
   queryset = Order.objects.all()
   serializer_class = OrderSerializer
   permission_classes = [IsAuthenticated]

class OrderCreate(generics.CreateAPIView):
   queryset = Order.objects.all()
   serializer_class = OrderSerializer
   permission_classes = [IsAuthenticated]
   
# Create your views here.
class FoodView(viewsets.ModelViewSet):
  queryset = Food.objects.all()
  serializer_class = FoodSerializer

  def perform_create(self, serializer):
    serializer.save(created_by=self.request.user)

class OrderView(viewsets.ModelViewSet):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer

  def perform_create(self, serializer):
    serializer.save(created_by=self.request.user)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer