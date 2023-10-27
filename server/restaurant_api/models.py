from django.db import models

# Create your models here.
class Food(models.Model):
  dish = models.CharField(max_length=50)
  description = models.CharField(max_length=300)
  price = models.IntegerField()

  def __str__(self):
    return self.dish

class Order(models.Model):
  cart = models.ManyToManyField(Food)

  def __str__(self) -> str:
    return self.items.__sizeof__