# Generated by Django 4.0.4 on 2022-04-29 09:40

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('doctordashboard', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateField(default=datetime.datetime(2022, 4, 29, 9, 40, 25, 632092, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='time',
            field=models.TimeField(default=datetime.datetime(2022, 4, 29, 9, 40, 25, 632092, tzinfo=utc)),
        ),
    ]