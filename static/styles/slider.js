const links = document.querySelectorAll('.animated-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    link.classList.add('clicked');
    setTimeout(() => {
      link.classList.remove('clicked');
    }, 1000); 
  });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', () => {
    const footer = document.querySelector('.footer');
    if (isInViewport(footer)) {
      footer.classList.add('animate');
    }
  });

const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('current-year');
yearElement.textContent = currentYear;