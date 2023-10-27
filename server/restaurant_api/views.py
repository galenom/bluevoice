from django.contrib.auth.models import User
from rest_framework import viewsets, generics
from .models import Food, Order
from .serializer import FoodSerializer, OrderSerializer, UserSerializer

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