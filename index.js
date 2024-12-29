
function toggleButton(){   
     
    const sideButton = document.getElementById('sidenav');
     const visibleNavbutton = sideButton.classList.toggle('sidenav-visible');
    
}

function toggleElement(){
  const hidebutton = document.querySelector('.secondInner-mobile');
 const itishidden = hidebutton.style.display ='flex'
}

// const activePage = window.location.pathname;

// const navLink = document.querySelectorAll('nav a').forEach(
//   link => {
//     if(link.href.includes(`${activePage}`)){
//       link.classList.add('activePage')
//     }

//   }
// );
// Example of setting the active page
const activePage = window.location.pathname.split('/').pop(); // Get the current page name (e.g., 'about.html')

const navLinks = document.querySelectorAll('nav a'); // Select all <a> tags inside <nav>

navLinks.forEach(link => {
  if (link.href.includes(activePage)) {
    link.classList.add('activePage'); // Add 'activePage' class if it matches
  }
});

function toggleContent() {
  const icons = document.querySelectorAll('.toggle-icon'); // Select all toggle icons

  icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      const content = document.querySelectorAll('.plus-content')[index]; // Match content to icon
  
      if (content.classList.contains('active')) {
        // Hide content and switch to plus icon
        content.classList.remove('active');
        icon.src = 'images/plus.png';
      } else {
        // Show content and switch to minus icon
        content.classList.add('active');
        icon.src = 'images/dash.png';
      }
    });
  });
  
}
document.addEventListener("DOMContentLoaded", () => {
  const activePage = window.location.pathname.split('/').pop(); // Get the current filename
  const navLinks = document.querySelectorAll('nav a'); // Select all nav links

  navLinks.forEach(link => {
    if (link.href.includes(activePage)) {
      link.classList.add('active'); // Add the 'active' class to the matching link
    }
  });
});

//moving to diffrent tabs
const tabs = document.querySelectorAll('.tab_btn');
const contents = document.querySelectorAll('.fourthwrap');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and content
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab and corresponding content
    tab.classList.add('active');
    contents[index].classList.add('active');
  });
});
