document.addEventListener('DOMContentLoaded', () => {
    
    // --- Testimonial Slider ---
    const slides = document.querySelectorAll('.testimonial-card');
    let currentSlide = 0;

    if(slides.length > 0) {
        setInterval(() => {
            // Remove active class from current
            slides[currentSlide].classList.remove('active');
            
            // Move to next
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Add active class to new
            slides[currentSlide].classList.add('active');
        }, 5000); // Change every 5 seconds
    }
});