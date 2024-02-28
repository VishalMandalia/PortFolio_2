if (typeof jQuery == 'undefined') {
    console.error('jQuery is not loaded.');
} else {
    $(document).ready(function() {
    
        $('.overlay-text img').animate({
            transform: 'scale(1.2)'
        }, 500,
        function() {
            setTimeout(function() {
                $('.overlay-text img').animate({
                    transform: 'scale(1)'
                }, 500);
            }, 3000);
        });

        $('.tilted-icon').tilt({
            maxTilt: 10,
            perspective: 1000,
            scale: 1.2,
        });
        $('.tilted-image').tilt({
            maxTilt: 10,
            perspective: 1500,
            scale: 1.05,
        });

        $('.tilted-skill-1, .tilted-skill-2, .tilted-skill').tilt({
            maxTilt: 20,
            perspective: 1000,
            scale: 1.3,
        });
        $('.tilted-experience').tilt({
            maxTilt: 5,
            perspective: 1000,
            scale: 1.03,
        });

        

        const skillsSection = document.getElementById('skills');
        const observerOptions = {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin around the root
            threshold: 0.5, // Trigger when at least 50% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Only execute your logic when #skills is in view
                    const listItems = document.querySelectorAll('.skills-animate li');
                    listItems.forEach((item) => {
                        const randomDelay = getRandomFloat(1, 5);
                        item.style.setProperty('--animation-delay', randomDelay + 's');
                        const randomDirection = getRandomFloat(-100, 100);
                        item.style.setProperty('--initial-x', randomDirection + 'vw');
                        item.style.setProperty('--initial-y', randomDirection + 'vh');
                    });
                }
            });
        }, observerOptions);

        observer.observe(skillsSection);
    });

    function getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
}