from django.contrib import admin
from .models import (
    UserProfile, Resume, Skill, CareerPath, CareerAnalysis,
    SkillMatch, RecommendedSkill, CareerPathRecommendation,
    JobPortal, JobRecommendation
)

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'education', 'university', 'graduation_year', 'created_at')
    search_fields = ('user__username', 'user__email', 'education', 'university')

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ('user', 'uploaded_at', 'processed')
    list_filter = ('processed', 'uploaded_at')
    search_fields = ('user__username',)

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(CareerPath)
class CareerPathAdmin(admin.ModelAdmin):
    list_display = ('title', 'avg_salary', 'growth_potential')
    search_fields = ('title', 'description')

@admin.register(CareerAnalysis)
class CareerAnalysisAdmin(admin.ModelAdmin):
    list_display = ('user', 'resume', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('user__username', 'strengths', 'areas_to_improve')

@admin.register(SkillMatch)
class SkillMatchAdmin(admin.ModelAdmin):
    list_display = ('analysis', 'skill', 'proficiency')
    list_filter = ('proficiency',)
    search_fields = ('analysis__user__username', 'skill__name')

@admin.register(RecommendedSkill)
class RecommendedSkillAdmin(admin.ModelAdmin):
    list_display = ('analysis', 'skill', 'importance')
    list_filter = ('importance',)
    search_fields = ('analysis__user__username', 'skill__name')

@admin.register(CareerPathRecommendation)
class CareerPathRecommendationAdmin(admin.ModelAdmin):
    list_display = ('analysis', 'career_path', 'match_percentage')
    list_filter = ('match_percentage',)
    search_fields = ('analysis__user__username', 'career_path__title')

@admin.register(JobPortal)
class JobPortalAdmin(admin.ModelAdmin):
    list_display = ('name', 'url')
    search_fields = ('name',)

@admin.register(JobRecommendation)
class JobRecommendationAdmin(admin.ModelAdmin):
    list_display = ('analysis', 'title', 'company', 'portal')
    search_fields = ('title', 'company', 'description')
    list_filter = ('portal',)
