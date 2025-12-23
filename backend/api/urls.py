from django.urls import path
from . import views

urlpatterns = [

    path("tasks/", views.TaskListCreate.as_view(), name="task-list"),
    path("tasks/<int:pk>/", views.TaskRetrieveUpdate.as_view(), name="task-detail"),
    path("tasks/delete/<int:pk>/", views.TaskDelete.as_view(), name="delete-task"),
    path('dashboard/stats/', views.DashboardStatsView.as_view(), name='dashboard-stats'),
]