// Wait until DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll Functionality for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetSection = document.querySelector(link.getAttribute('href')); // Get target section
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll
        }
      });
    });
  
    // Responsive Mobile Menu Toggle
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    navbar.appendChild(menuToggle);
  
    menuToggle.addEventListener('click', () => {
      const navLinksContainer = document.querySelector('.nav-links');
      navLinksContainer.classList.toggle('active');
    });
  
    // Intersection Observer for Scroll Animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Dynamic Content for the Services Section
    const serviceCards = document.querySelector('.service-cards');
    const services = [
      { title: 'Pet Sitting', description: 'Trusted sitters for your furry friends.' },
      { title: 'Dog Walking', description: 'Daily exercise to keep your pet healthy.' },
      { title: 'Grooming', description: 'Keep your pet looking and feeling great.' },
      { title: 'Vet Consultations', description: 'Expert advice at your fingertips.' },
      { title: 'Pet Training', description: 'Help your pet learn and grow.' }
    ];
  
    services.forEach(service => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      `;
      serviceCards.appendChild(card);
    });
  
    // Scroll-to-Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.classList.add('scroll-to-top');
    scrollToTopBtn.textContent = '↑';
    document.body.appendChild(scrollToTopBtn);
  
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Show/Hide Scroll-to-Top Button Based on Scroll Position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  });
  