from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('resume_upload/', views.resume_upload, name='resume_upload'),
    path('career_analysis/', views.career_analysis, name='career_analysis'),
    path('job_recommendations/', views.job_recommendations, name='job_recommendations'),
    path('skill_analysis/', views.skill_analysis, name='skill_analysis'),
    path('print_report/', views.print_report, name='print_report'),
    path('feedback/', views.feedback, name='feedback'),
    path('mock_interview/', views.mock_interview, name='mock_interview'),
    path('interview_practice/', views.interview_practice, name='interview_practice'),
    
    # Resume generator paths
    path('resume_templates/', views.resume_templates, name='resume_templates'),
    path('resume_generator/', views.resume_generator, name='resume_generator'),
    path('generate_resume/', views.generate_resume, name='generate_resume'),
    
    # Admin paths
    path('admin_dashboard/', views.admin_dashboard, name='admin_dashboard'),
    path('admin_users/', views.admin_users, name='admin_users'),
    path('admin_analytics/', views.admin_analytics, name='admin_analytics'),
    path('remove_resume/', views.remove_resume, name='remove_resume'),
] 