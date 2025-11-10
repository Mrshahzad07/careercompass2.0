from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    phone = models.CharField(max_length=15, blank=True, null=True)
    education = models.CharField(max_length=100, blank=True, null=True)
    university = models.CharField(max_length=100, blank=True, null=True)
    graduation_year = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.username}'s Profile"

class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='resumes')
    file = models.FileField(upload_to='resumes/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    processed = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.user.username}'s Resume ({self.uploaded_at.strftime('%Y-%m-%d')})"

class Skill(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class CareerPath(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    avg_salary = models.CharField(max_length=50, blank=True, null=True)
    growth_potential = models.CharField(max_length=50, blank=True, null=True)
    
    def __str__(self):
        return self.title

class CareerAnalysis(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='analyses')
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='analyses')
    created_at = models.DateTimeField(auto_now_add=True)
    
    # Analysis results
    strengths = models.TextField(blank=True, null=True)
    areas_to_improve = models.TextField(blank=True, null=True)
    ats_score = models.IntegerField(default=0)  # 0-100 score for ATS compatibility
    
    def __str__(self):
        return f"Analysis for {self.user.username} ({self.created_at.strftime('%Y-%m-%d')})"

class SkillMatch(models.Model):
    analysis = models.ForeignKey(CareerAnalysis, on_delete=models.CASCADE, related_name='skill_matches')
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    proficiency = models.IntegerField(default=0)  # 0-100
    
    def __str__(self):
        return f"{self.skill.name}: {self.proficiency}%"

class RecommendedSkill(models.Model):
    analysis = models.ForeignKey(CareerAnalysis, on_delete=models.CASCADE, related_name='recommended_skills')
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    importance = models.IntegerField(default=0)  # 0-100
    
    def __str__(self):
        return f"Recommended: {self.skill.name} ({self.importance}%)"

class CareerPathRecommendation(models.Model):
    analysis = models.ForeignKey(CareerAnalysis, on_delete=models.CASCADE, related_name='career_recommendations')
    career_path = models.ForeignKey(CareerPath, on_delete=models.CASCADE)
    match_percentage = models.IntegerField(default=0)  # 0-100
    
    def __str__(self):
        return f"{self.career_path.title}: {self.match_percentage}%"

class JobPortal(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField()
    logo = models.ImageField(upload_to='portal_logos/', blank=True, null=True)
    
    def __str__(self):
        return self.name

class JobRecommendation(models.Model):
    analysis = models.ForeignKey(CareerAnalysis, on_delete=models.CASCADE, related_name='job_recommendations')
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    portal = models.ForeignKey(JobPortal, on_delete=models.SET_NULL, null=True, blank=True)
    url = models.URLField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.title} at {self.company or 'Unknown'}"
