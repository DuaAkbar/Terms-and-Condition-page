   //SIDE BAR
const menuButton = document.querySelector('.new-menu-button');
const sidebar = document.querySelector('.sidebar');
const closeNavButton = document.querySelector('.close-nav');
const overlay = document.querySelector('.overlay');

menuButton.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

closeNavButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

  // DARK-LIGHT THEME
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');


themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  if (body.classList.contains('dark-theme')) {
    sunIcon.classList.replace('fi-ss-brightness', 'fi-rr-brightness');
    moonIcon.classList.replace('fi-rr-moon', 'fi-ss-moon');
  } else {
    sunIcon.classList.replace('fi-rr-brightness', 'fi-ss-brightness');
    moonIcon.classList.replace('fi-ss-moon', 'fi-rr-moon');
  }

  localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(`${savedTheme}-theme`);

  if (savedTheme === 'dark') {
    sunIcon.classList.replace('fi-ss-brightness', 'fi-rr-brightness');
    moonIcon.classList.replace('fi-rr-moon', 'fi-ss-moon');
  } else {
    sunIcon.classList.replace('fi-rr-brightness', 'fi-ss-brightness');
    moonIcon.classList.replace('fi-ss-moon', 'fi-rr-moon');
  }
}


  

    
        
        