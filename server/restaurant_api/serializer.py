from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Food, Order

# If wee needed just a name
# class CartSerializer(serializers.ModelSerializer):
#    class Meta:
#       model = Food
#       fields = ['dish']

class FoodSerializer(serializers.ModelSerializer):
  created_by = serializers.ReadOnlyField(source='created_by.username')
  """modelserializer displays to you the relevant fields in the model,
  it also performs all the CRUD operations for you"""
  class Meta:
    model = Food
    fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
  created_by = serializers.ReadOnlyField(source='created_by.username')
  cart = FoodSerializer(read_only=True, many=True)
  """modelserializer displays to you the relevant fields in the model,
  it also performs all the CRUD operations for you"""
  class Meta:
    model = Order
    fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

