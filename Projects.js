function openDialog() {
    document.getElementById('dialogBox').style.display = 'block';
}

function closeDialog() {
    document.getElementById('dialogBox').style.display = 'none';
}
function openDialog_project_1() {
    document.getElementById('project-1').style.display = 'block';
}

function closeDialog_project_1() {
    document.getElementById('project-1').style.display = 'none';
}


function closeDialog_project_1() {
    var project1 = document.getElementById('project-1');
    project1.classList.add('fade-out'); // Add fade-out class
    setTimeout(function () {
        project1.style.display = 'none'; // Hide after animation
        project1.classList.remove('fade-out'); // Remove the class for future use
    }, 500); // Adjust the timeout to match the animation duration
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