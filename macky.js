// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        
        // Scroll to the target section smoothly
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Trigger animation for the target section
        animateSection(target);
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'visible' class for animation
function animateSection(section) {
    if (isInViewport(section)) {
        section.classList.add('visible');
    }
}

// Scroll event to check for visibility
window.addEventListener('scroll', () => {
    document.querySelectorAll('.digital').forEach(section => {
        animateSection(section);
    });
});

// Check if the element is already in the viewport on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.digital').forEach(section => {
        animateSection(section);
    });
});


// to hide page 
var verf = document.getElementById("verify");
var display =0;


function hideShow(){
     if(display==1){
        verf.style.display='block';
        display=0;
     }
     else{
        verf.style.display='none';
        display=1;
     }
}
