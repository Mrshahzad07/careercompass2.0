# CareerLytics

CareerLytics is an intelligent resume screening and career direction system specifically designed for fresh graduates and early-career professionals. The platform helps users identify suitable career paths based on their academic qualifications, skills, and interests using advanced data analysis.

## Features

- **Resume Parsing**: Upload and analyze resumes to extract key information
- **Career Path Analysis**: Get personalized career path recommendations based on your profile
- **Skill Assessment**: Identify your current skill proficiency and areas for improvement
- **Job Recommendations**: Discover entry-level positions that match your profile
- **Job Portal Integration**: Direct links to major job portals like Naukri.com, Indeed, and LinkedIn
- **Printable Reports**: Generate and print comprehensive career analysis reports

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Django (Python)
- **Database**: SQLite (default), can be configured for PostgreSQL
- **Charts**: Chart.js
- **Icons**: Font Awesome

## Setup Instructions

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/career_compass.git
   cd career_compass
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - Windows:
     ```
     venv\Scripts\activate
     ```
   - Mac/Linux:
     ```
     source venv/bin/activate
     ```

4. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

5. Run migrations:
   ```
   python manage.py makemigrations
   python manage.py migrate
   ```

6. Create a superuser (for admin access):
   ```
   python manage.py createsuperuser
   ```

7. Start the development server:
   ```
   python manage.py runserver
   ```

8. Visit `http://127.0.0.1:8000/` in your browser to access the application.

## Project Structure

- `compass_app/`: Main Django application
  - `models.py`: Database models
  - `views.py`: View functions
  - `urls.py`: URL routing
  - `admin.py`: Admin site configuration
  - `templatetags/`: Custom template tags and filters
- `templates/`: HTML templates
  - `compass_app/`: Application templates
  - `compass_app/admin/`: Admin panel templates
- `static/`: Static files (CSS, JavaScript, images)
- `media/`: User-uploaded files (resumes, etc.)

## User Types

- **Regular Users**: Can upload resumes, view career analysis, and job recommendations
- **Admin Users**: Can manage users, view analytics, and maintain system data

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Special thanks to all the job portals and career resources that inspired this project
- Bootstrap 5 for the responsive frontend framework
- Chart.js for beautiful data visualization 

# In settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'shahzad12$career_compass',  # Use your PythonAnywhere username$database_name
        'USER': 'shahzad12',  # Your PythonAnywhere username
        'PASSWORD': 'your_database_password',  # Set in the PythonAnywhere MySQL tab
        'HOST': 'shahzad12.mysql.pythonanywhere-services.com',  # Use your username as prefix
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        },
    }
}

STATIC_URL = '/static/'
STATIC_ROOT = '/home/shahzad12/career_compass/staticfiles'
MEDIA_URL = '/media/'
MEDIA_ROOT = '/home/shahzad12/career_compass/media'

DEBUG = False  # Set to False for production
ALLOWED_HOSTS = ['shahzad12.pythonanywhere.com']  # Add your domain

# Add a proper SECRET_KEY (don't use the development one)
SECRET_KEY = 'your-secure-key-here'  # Better to use environment variables