from .models import Notification

def create_notification(event, name=None):
    if event == "unknown":
        Notification.objects.create(
            title="Unknown Face Detected",
            message="Unknown person detected by camera.",
            type="danger"
        )

    elif event == "recognized":
        Notification.objects.create(
            title="Face Recognized",
            message=f"{name} recognized successfully.",
            type="success"
        )
