
// 1. Mobile nav toggle - works on every page
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// 2. Projects filter + dynamic DOM - only runs on projects.html
const projectsContainer = document.getElementById('projectsContainer');
if (projectsContainer) {
  const projects = [
  {
    title: "Weather Dashboard",
    category: "Responsive",  // <- changed from "API"
    desc: "Fetches real weather data using OpenWeather API. Shows temp, humidity, wind for any city.",
    img: "images/place.png",
    github: "#"
  },
  {
  title: "Temple Album",
  category: "Responsive",
  desc: "Displays LDS temple data from JSON with filter buttons for old/new/Utah temples. Mobile-first cards.",
  img: "images/temples.png",
  github: "#"
},
  {
    title: "Picture Album Enhancement",
    category: "JavaScript",
    desc: "Enhanced photo gallery with category filter buttons. Lazy loading images for performance.",
    img: "images/filtered-temples.png",
    github: "#"
  }
];
  function displayProjects(filter = "All") {
    const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
    projectsContainer.innerHTML = filtered.map(p => `
      <div class="project-card">
        <img src="${p.img}" alt="${p.title} project screenshot showing ${p.desc}" loading="lazy">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a href="${p.github}" target="_blank">View Code</a>
      </div>
    `).join('');
  }

  displayProjects();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      displayProjects(e.target.dataset.category);
    });
  });
}

// 3. Contact form validation - only runs on contact.html
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    contactForm.querySelectorAll('.error').forEach(span => span.textContent = '');
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    if (name.value.trim() === '') {
      name.nextElementSibling.textContent = 'Name is required';
      isValid = false;
    }
    
    if (!email.value.includes('@')) {
      email.nextElementSibling.textContent = 'Valid email required';
      isValid = false;
    }
    
    if (message.value.trim().length < 10) {
      message.nextElementSibling.textContent = 'Message must be 10+ characters';
      isValid = false;
    }
    
    if (isValid) {
      alert('Message sent! Thanks for contacting Lhexiverse.');
      contactForm.reset();
    }
  });
}

// 4. LocalStorage - track last visit, works on every page
const lastVisit = localStorage.getItem('lastVisit');
if (lastVisit) {
  console.log(`Welcome back! Last visit: ${new Date(lastVisit).toLocaleDateString()}`);
}
localStorage.setItem('lastVisit', new Date().toISOString());

