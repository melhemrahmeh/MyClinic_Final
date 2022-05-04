# Generated by Django 4.0.4 on 2022-04-29 19:09

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('doctordashboard', '0005_employee_alter_appointment_date_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='pendingBalance',
            field=models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='patient',
            name='totalBalance',
            field=models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10, null=True),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateField(default=datetime.datetime(2022, 4, 29, 19, 9, 56, 804166, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='time',
            field=models.TimeField(default=datetime.datetime(2022, 4, 29, 19, 9, 56, 804166, tzinfo=utc)),
        ),
        migrations.DeleteModel(
            name='PaymentJournal',
        ),
    ]