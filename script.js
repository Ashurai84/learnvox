document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Hover effect on scroll down button
const scrollDown = document.querySelector('.scroll-down');
scrollDown.addEventListener('mouseenter', function() {
  scrollDown.style.transform = 'scale(1.1)';
});
scrollDown.addEventListener('mouseleave', function() {
  scrollDown.style.transform = 'scale(1)';
});
