// Add scroll event listener to change header style
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Optional form validation: Check for empty fields before submission
  document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');
  
    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
  