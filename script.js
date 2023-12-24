function openDialog() {
    document.getElementById('dialogBox').style.display = 'block';
  }
  
  function closeDialog() {
    document.getElementById('dialogBox').style.display = 'none';
  }

// Menu Icon Script
  function myFunction(x) {
    x.classList.toggle("change");
  }
  

  function toggleMenu(x) {
    x.classList.toggle("change");
    var menu = document.querySelector('.mobile-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
