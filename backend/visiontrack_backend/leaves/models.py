from djongo import models

LEAVE_STATUS = (
    ('PENDING', 'Pending'),
    ('APPROVED', 'Approved'),
    ('REJECTED', 'Rejected'),
)

LEAVE_TYPES = (
    ('MEDICAL', 'Medical'),
    ('PERSONAL', 'Personal'),
    ('TRAINING', 'Training/Seminar'),
)

class LeaveRequest(models.Model):
    user_id = models.CharField(max_length=100)   # student / teacher ID
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=20)       # student / teacher

    leave_type = models.CharField(max_length=20, choices=LEAVE_TYPES)
    from_date = models.DateField()
    to_date = models.DateField()
    reason = models.TextField()

    document = models.FileField(upload_to='leave_docs/', null=True, blank=True)

    status = models.CharField(
        max_length=20,
        choices=LEAVE_STATUS,
        default='PENDING'
    )

    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.leave_type}"
