# Generated by Django 3.1.7 on 2021-04-11 23:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('comment', models.TextField()),
                ('date', models.DateField()),
            ],
        ),
    ]
