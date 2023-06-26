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
  