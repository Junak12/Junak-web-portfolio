// Change background color dynamically
const colors = ['#4facfe', '#00f2fe', '#ff7e5f', '#feb47b', '#ff6a88', '#d66d75', '#fda085'];
let currentColor = 0;

function changeBackground() {
    // Change body background color
    document.body.style.backgroundColor = colors[currentColor];

    // Change section background color
    document.querySelectorAll('section').forEach(section => {
        section.style.backgroundColor = colors[(currentColor + 1) % colors.length];
    });

    currentColor = (currentColor + 1) % colors.length;
}

setInterval(changeBackground, 3000); // Change color every 3 seconds

// Smooth scrolling and highlighting active section
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the target section
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Highlight the active link
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for the navbar height
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const currentId = section.getAttribute('id');
            document.querySelector(`nav a[href="#${currentId}"]`).classList.add('active');
        } else {
            const currentId = section.getAttribute('id');
            document.querySelector(`nav a[href="#${currentId}"]`).classList.remove('active');
        }
    });

    // Move profile image down on scroll
    const profileImage = document.querySelector('.profile-image');
    profileImage.style.transform = `translateY(${scrollPosition / 2}px)`; // Adjust as needed
});
