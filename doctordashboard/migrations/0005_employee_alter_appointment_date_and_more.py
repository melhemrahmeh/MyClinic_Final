# Generated by Django 4.0.4 on 2022-04-29 14:34

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('doctordashboard', '0004_rename_nextvisit_visit_visitdate_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('firstName', models.CharField(blank=True, max_length=100, null=True)),
                ('lastName', models.CharField(blank=True, max_length=100, null=True)),
                ('PhoneNumber', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('gender', models.CharField(choices=[('MALE', 'Male'), ('FEMALE', 'Female'), ('OTHER', 'Other')], default='OTHER', max_length=20)),
                ('position', models.CharField(choices=[('Administartor', 'Administartor'), ('Dentist_Assistant', 'Dentist_Assistant'), ('Nurse', 'Nurse'), ('Secretary', 'Secretary')], max_length=100, null=True)),
                ('employment', models.CharField(choices=[('Full Time', 'Full_Time'), ('Part_Time', 'Part_Time'), ('Contract', 'Contract')], max_length=100, null=True)),
                ('E_firstName', models.CharField(blank=True, max_length=100, null=True)),
                ('E_lastName', models.CharField(blank=True, max_length=100, null=True)),
                ('E_contactNumber', models.CharField(blank=True, max_length=100, null=True)),
                ('salary', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10, null=True)),
                ('start_date', models.DateField(blank=True, null=True)),
                ('password', models.CharField(blank=True, max_length=100, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateField(default=datetime.datetime(2022, 4, 29, 14, 34, 16, 164361, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='time',
            field=models.TimeField(default=datetime.datetime(2022, 4, 29, 14, 34, 16, 164361, tzinfo=utc)),
        ),
    ]
