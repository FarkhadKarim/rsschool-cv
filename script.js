
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-list a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
    
        const targetId = link.getAttribute('href');
        if (targetId === '#' || targetId === '') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
        }
    
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        }
    });
  });