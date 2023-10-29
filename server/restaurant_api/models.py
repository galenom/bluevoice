from django.db import models

# Create your models here.
class Food(models.Model):
  dish = models.CharField(max_length=50)
  description = models.CharField(max_length=300)
  price = models.FloatField()
  created_by = models.ForeignKey('auth.User', on_delete=models.CASCADE)

  def __str__(self):
    return self.dish

class Order(models.Model):
  cart = models.ManyToManyField(Food)
  created_by = models.ForeignKey('auth.User', on_delete=models.CASCADE, default=1, blank=True)
  created_on = models.DateTimeField(auto_now=True)

  def __str__(self) -> str:
    return self.items.__sizeof__