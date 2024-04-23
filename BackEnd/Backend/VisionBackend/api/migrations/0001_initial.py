# Generated by Django 4.2 on 2024-04-18 21:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AIModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('f1_score', models.DecimalField(decimal_places=2, default=0.0, max_digits=5)),
                ('accuracy', models.DecimalField(decimal_places=2, default=0.0, max_digits=5)),
                ('confusion_matrix', models.ImageField(null=True, upload_to='images/')),
                ('train_validation_acc', models.ImageField(null=True, upload_to='images/')),
                ('train_validation_loss', models.ImageField(null=True, upload_to='images/')),
                ('model_file', models.FileField(upload_to='models/')),
                ('dataset', models.CharField(default='', max_length=100)),
            ],
        ),
    ]
