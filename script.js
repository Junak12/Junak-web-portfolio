
const colors = ['#ff7e5f', '#feb47b', '#ff6a88', '#d66d75', '#fda085', '#FF5733', '#900C3F', '#C70039'];
let currentColor = 0;

function changeBackground() {
    document.body.style.background = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;
}

setInterval(changeBackground, 3000); 
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const animatedTextElements = document.querySelectorAll('.animated-text');

animatedTextElements.forEach((element) => {
    element.style.transition = 'transform 0.5s';
    element.addEventListener('mouseover', () => {
        element.style.transform = 'translateY(-5px)';
        element.style.color = '#900C3F'; 
    });

    element.addEventListener('mouseout', () => {
        element.style.transform = 'translateY(0)';
        element.style.color = '#333'; 
    });
});
const profileImage = document.querySelector('.profile-image');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    profileImage.style.transform = `translateY(${Math.min(scrollY / 2, 30)}px)`;
});
