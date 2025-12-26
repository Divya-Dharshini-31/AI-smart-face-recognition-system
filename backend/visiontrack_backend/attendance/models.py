from django.db import models
from django.contrib.auth.models import User


class Person(models.Model):
    ROLE_CHOICES = (
        ('student', 'student'),
        ('teacher', 'teacher'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return self.user.username


class Attendance(models.Model):
    STATUS_CHOICES = (
        ('present', 'Present'),
        ('absent', 'Absent'),
        ('late', 'Late'),
        ('leave', 'Leave'),
    )

    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    date = models.DateField()
    check_in = models.TimeField(null=True, blank=True)
    check_out = models.TimeField(null=True, blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    note = models.CharField(max_length=100, blank=True)

    marked_by_face = models.BooleanField(default=True)

    class Meta:
        unique_together = ('person', 'date')
        ordering = ['-date']

    def __str__(self):
        return f"{self.person.user.username} - {self.date} - {self.status}"
