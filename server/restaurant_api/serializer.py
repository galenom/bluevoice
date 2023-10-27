from rest_framework import serializers
from .models import Food, Order

class FoodSerializer(serializers.ModelSerializer):
  """modelserializer displays to you the relevant fields in the model,
  it also performs all the CRUD operations for you"""
  class Meta:
    model = Food
    fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
  """modelserializer displays to you the relevant fields in the model,
  it also performs all the CRUD operations for you"""
  class Meta:
    model = Order
    fields = '__all__'