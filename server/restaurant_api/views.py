from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Food, Order
from .serializer import FoodSerializer, OrderSerializer

# Create your views here.
class FoodView(viewsets.ModelViewSet):
  queryset = Food.objects.all()
  serializer_class = FoodSerializer

class OrderView(viewsets.ModelViewSet):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
