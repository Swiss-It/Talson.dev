/*script.js*/

window.onload = function() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  document.getElementById('copyright-year').textContent = currentYear;  

};

//Dynamic content features
document.addEventListener('DOMContentLoaded', function () {

  //Accordion
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    const icon = title.querySelector('.icon');

    title.addEventListener('click', () => {
      content.classList.toggle('show');
      icon.textContent = content.classList.contains('show') ? '-' : '+';
    });
  });

  //Alert
  const link = document.getElementById('alert');


  link.addEventListener('click', function(event) {

      event.preventDefault();
      
      alert('This page is not ready yet, shoooo');
  });
});


