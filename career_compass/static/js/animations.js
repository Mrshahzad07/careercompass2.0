/**
 * Animation utilities for Career Compass
 * Enhances the user experience with scroll-based animations
 */

// Initialize scroll animations when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add data-aos attributes to elements for animation
    initScrollAnimations();
    
    // Initialize AOS with custom settings
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: false,
        mirror: true,
        offset: 50
    });
    
    // Initialize hover effects
    initHoverEffects();
    
    // Refresh AOS on window resize for responsiveness
    window.addEventListener('resize', function() {
        AOS.refresh();
    });
});

/**
 * Adds animation attributes to elements based on their type and position
 */
function initScrollAnimations() {
    // Hero section animations
    const hero = document.querySelector('.py-5.bg-light');
    if (hero) {
        const heroContent = hero.querySelector('.col-lg-6:first-child');
        const heroImage = hero.querySelector('.col-lg-6:last-child');
        
        if (heroContent) {
            heroContent.setAttribute('data-aos', 'fade-right');
            heroContent.setAttribute('data-aos-delay', '100');
            heroContent.setAttribute('data-aos-duration', '1000');
        }
        
        if (heroImage) {
            heroImage.setAttribute('data-aos', 'fade-left');
            heroImage.setAttribute('data-aos-delay', '300');
            heroImage.setAttribute('data-aos-duration', '1000');
        }
    }
    
    // Section titles with zoom effect
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.setAttribute('data-aos', 'zoom-in');
        title.setAttribute('data-aos-duration', '600');
    });
    
    // Feature cards with sequential animations
    const featureCards = document.querySelectorAll('.hover-card');
    featureCards.forEach((card, index) => {
        card.setAttribute('data-aos', 'flip-up');
        card.setAttribute('data-aos-delay', (index * 150).toString());
        card.setAttribute('data-aos-duration', '800');
    });
    
    // Feature icons with bounce effect
    const featureIcons = document.querySelectorAll('.feature-icon');
    featureIcons.forEach(icon => {
        icon.setAttribute('data-aos', 'zoom-in');
        icon.setAttribute('data-aos-duration', '800');
    });
    
    // Stats cards with pop effect
    const statsCards = document.querySelectorAll('.hover-card-stats');
    statsCards.forEach((card, index) => {
        card.setAttribute('data-aos', 'zoom-in-up');
        card.setAttribute('data-aos-delay', (index * 200).toString());
    });
    
    // Stats section with count-up effect
    const statsNumbers = document.querySelectorAll('.display-4.fw-bold');
    statsNumbers.forEach(stat => {
        stat.setAttribute('data-aos', 'fade-up');
        stat.setAttribute('data-aos-anchor-placement', 'center-bottom');
        
        // Add counter effect
        if (!isNaN(parseInt(stat.textContent))) {
            setupCountAnimation(stat);
        }
    });
    
    // Job portal cards
    const portalCards = document.querySelectorAll('.hover-card-portal');
    portalCards.forEach((card, index) => {
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 150).toString());
    });
    
    // Course provider cards
    const courseCards = document.querySelectorAll('.hover-card-course');
    courseCards.forEach((card, index) => {
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 150).toString());
    });
    
    // Testimonial cards with staggered entrance
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.setAttribute('data-aos', 'fade-right');
        card.setAttribute('data-aos-delay', (index * 200).toString());
        card.setAttribute('data-aos-duration', '800');
        card.setAttribute('data-aos-easing', 'ease-in-out');
    });
}

/**
 * Sets up count animation for numeric statistics
 * @param {Element} element - The element containing the number to animate
 */
function setupCountAnimation(element) {
    const finalValue = parseInt(element.textContent);
    element.textContent = '0';
    
    // Create intersection observer to trigger animation when element is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counter animation
                let startValue = 0;
                const duration = 2000; // 2 seconds
                const step = finalValue / (duration / 16); // For 60fps
                
                const counter = setInterval(() => {
                    startValue += step;
                    if (startValue > finalValue) {
                        element.textContent = finalValue + (element.textContent.includes('+') ? '+' : '');
                        clearInterval(counter);
                    } else {
                        element.textContent = Math.floor(startValue) + (element.textContent.includes('+') ? '+' : '');
                    }
                }, 16);
                
                // Stop observing after animation is triggered
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    // Start observing the element
    observer.observe(element);
}

/**
 * Initialize enhanced hover effects for various elements
 */
function initHoverEffects() {
    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.hover-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            
            // Animate the icon inside
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--card-shadow)';
            
            // Reset icon animation
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Stats cards hover effect
    const statsCards = document.querySelectorAll('.hover-card-stats');
    statsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            
            // Make the number pop
            const number = this.querySelector('.display-4');
            if (number) {
                number.style.transform = 'scale(1.1)';
                number.style.transition = 'transform 0.3s ease';
                number.style.color = '#ff006e'; // Accent color
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--card-shadow)';
            
            // Reset number animation
            const number = this.querySelector('.display-4');
            if (number) {
                number.style.transform = 'scale(1)';
                number.style.color = '#3a86ff'; // Primary color
            }
        });
    });
    
    // Job portal cards hover effect
    const portalCards = document.querySelectorAll('.hover-card-portal');
    portalCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.03)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            
            // Check if we're in dark mode and apply appropriate colors
            if (document.body.classList.contains('dark-mode')) {
                this.style.background = 'linear-gradient(135deg, #2a3a4a, #1f2937)';
                
                // Ensure text is visible in dark mode
                const title = this.querySelector('.h4');
                const paragraph = this.querySelector('p');
                
                if (title) {
                    title.style.color = '#ffffff';
                    title.style.transition = 'color 0.3s ease';
                }
                
                if (paragraph) {
                    paragraph.style.color = '#e0e0e0';
                    paragraph.style.transition = 'color 0.3s ease';
                }
            } else {
                this.style.background = 'linear-gradient(135deg, #f8f9fa, #e9ecef)';
                
                // Regular light mode colors
                const title = this.querySelector('.h4');
                if (title) {
                    title.style.color = '#3a86ff';
                    title.style.transition = 'color 0.3s ease';
                }
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--card-shadow)';
            this.style.background = 'var(--card-bg)';
            
            // Reset text colors
            const title = this.querySelector('.h4');
            const paragraph = this.querySelector('p');
            
            if (title) {
                title.style.color = 'var(--text-color)';
            }
            
            if (paragraph) {
                paragraph.style.color = 'var(--text-color)';
            }
        });
    });
    
    // Course cards hover effect
    const courseCards = document.querySelectorAll('.hover-card-course');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.03)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            
            // Check if we're in dark mode and apply appropriate colors
            if (document.body.classList.contains('dark-mode')) {
                this.style.background = 'linear-gradient(135deg, #2a3a4a, #1f2937)';
                
                // Ensure text is visible in dark mode
                const title = this.querySelector('.h4');
                const paragraph = this.querySelector('p');
                
                if (title) {
                    title.style.color = '#ffffff';
                    title.style.transition = 'color 0.3s ease';
                }
                
                if (paragraph) {
                    paragraph.style.color = '#e0e0e0';
                    paragraph.style.transition = 'color 0.3s ease';
                }
            } else {
                this.style.background = 'linear-gradient(135deg, #f8f9fa, #e9ecef)';
                
                // Regular light mode colors
                const title = this.querySelector('.h4');
                if (title) {
                    title.style.color = '#8338ec'; // Secondary color
                    title.style.transition = 'color 0.3s ease';
                }
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--card-shadow)';
            this.style.background = 'var(--card-bg)';
            
            // Reset text colors
            const title = this.querySelector('.h4');
            const paragraph = this.querySelector('p');
            
            if (title) {
                title.style.color = 'var(--text-color)';
            }
            
            if (paragraph) {
                paragraph.style.color = 'var(--text-color)';
            }
        });
    });
    
    // Testimonial cards hover effect
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            
            // Check if we're in dark mode and apply appropriate colors
            if (document.body.classList.contains('dark-mode')) {
                this.style.background = 'linear-gradient(135deg, #2a3a4a, #1f2937)';
                
                // Ensure all text is visible in dark mode
                const title = this.querySelector('h5');
                const subtitle = this.querySelector('p.text-body.mb-0');
                const content = this.querySelector('p.text-body:not(.mb-0)');
                
                if (title) {
                    title.style.color = '#ffffff';
                    title.style.transition = 'color 0.3s ease';
                }
                
                if (subtitle) {
                    subtitle.style.color = '#e0e0e0';
                    subtitle.style.transition = 'color 0.3s ease';
                }
                
                if (content) {
                    content.style.color = '#ffffff';
                    content.style.transition = 'color 0.3s ease';
                }
            } else {
                this.style.background = 'linear-gradient(135deg, #f8f9fa, #e9ecef)';
            }
            
            // Animate the stars
            const stars = this.querySelectorAll('.fa-star, .fa-star-half-alt');
            stars.forEach((star, index) => {
                setTimeout(() => {
                    star.style.transform = 'scale(1.2)';
                    star.style.transition = 'transform 0.2s ease';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--card-shadow)';
            this.style.background = 'var(--card-bg)';
            
            // Reset text colors
            const title = this.querySelector('h5');
            const subtitle = this.querySelector('p.text-body.mb-0');
            const content = this.querySelector('p.text-body:not(.mb-0)');
            
            if (title) {
                title.style.color = 'var(--text-color)';
            }
            
            if (subtitle) {
                subtitle.style.color = 'var(--text-color)';
            }
            
            if (content) {
                content.style.color = 'var(--text-color)';
            }
            
            // Reset stars animation
            const stars = this.querySelectorAll('.fa-star, .fa-star-half-alt');
            stars.forEach(star => {
                star.style.transform = 'scale(1)';
            });
        });
    });
}

/**
 * Adds parallax effect to background elements
 * Called when the user scrolls
 */
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Apply subtle parallax to hero image if it exists
    const heroImg = document.querySelector('.py-5.bg-light img');
    if (heroImg) {
        heroImg.style.transform = `translateY(${scrollPosition * 0.05}px)`;
    }
    
    // Floating animation for feature cards on scroll
    const featureCards = document.querySelectorAll('.hover-card');
    featureCards.forEach((card, index) => {
        const floatPosition = Math.sin((scrollPosition / 500) + index) * 10;
        card.style.transform = `translateY(${floatPosition - 5}px)`;
    });
    
    // Subtle rotation for stats cards on scroll
    const statsCards = document.querySelectorAll('.hover-card-stats');
    statsCards.forEach((card, index) => {
        const rotateAmount = Math.sin(scrollPosition / 1000 + index) * 1;
        card.style.transform = `translateY(-5px) rotate(${rotateAmount}deg)`;
    });
}); 