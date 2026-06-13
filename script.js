
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
document.body.classList.toggle('dark');
const isDark = document.body.classList.contains('dark');
themeToggle.textContent = isDark ? 'sun': 'moon'; 
});
const toTop = document.querySelector('#to-top');

// LISTEN for scrolling; show the button past 300px down 
 window.addEventListener('scroll', () => {

if (window.scrollY > 300) {
    toTop.classList.add('show');}

else {
toTop.classList.remove('show');
}
});

// Click -> glide back to the top
 toTop.addEventListener('click', () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
 });

// FIND every element marked with class "reveal"

const revealItems = document.querySelectorAll('.reveal');

const observer = new Intersectionobserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) { // when it enters the screen 
entry.target.classList.add('is-visible');
observer.unobserve(entry.target); // animate once, then stop
}
});
}, { threshold: 0.15 });

revealItems.forEach((item) => observer.observe(item));