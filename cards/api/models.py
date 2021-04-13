from django.db import models

my_choices = (
    ('one', 'backlog'),
    ('two', 'waiting'),
    ('three', 'inProgres'),
    ('four', 'done')
)
# Create your models here.
class Task(models.Model):
    title = models.TextField()
    status = models.TextField(choices=my_choices, default='one')
    date = models.DateField()

def __str__(self):
    return self.title
