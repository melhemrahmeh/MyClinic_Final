from django.apps import AppConfig


class DoctordashboardConfig(AppConfig):
    # default_auto_field = 'django.db.models.BigAutoField'
    name = 'doctordashboard'
    
    def ready(self):
        import doctordashboard.signals
