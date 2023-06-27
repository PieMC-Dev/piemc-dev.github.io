window.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu li a');
  
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offsetTop = targetElement.offsetTop;
  
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    }
  });

  
  const h2Elements = document.querySelectorAll('h2');

  function addAnimationToH2() {
    h2Elements.forEach((h2) => {
      h2.classList.add('animate');
    });
  }
  
  // Add animation when the page finishes loading
  window.addEventListener('load', addAnimationToH2);
  