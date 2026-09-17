const projectGrid = document.querySelector('#project-grid');
const year = document.querySelector('#year');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

year.textContent = new Date().getFullYear();

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character]));
}

function renderProjects(projects) {
  projectGrid.innerHTML = projects.map(project => `
    <article class="project-card">
      <div class="project-image">
        ${project.image ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} project preview" loading="lazy">` : ''}
        <span class="project-badge">${escapeHtml(project.category)}</span>
      </div>
      <div class="project-content">
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <div class="project-meta">${(project.tools || []).map(tool => `<span>${escapeHtml(tool)}</span>`).join('')}</div>
      </div>
    </article>`).join('');
}

fetch('data/projects.json')
  .then(response => { if (!response.ok) throw new Error('Project data unavailable'); return response.json(); })
  .then(renderProjects)
  .catch(() => renderProjects([{ category: 'Case study', title: 'Your next workflow', summary: 'Add a project to data/projects.json to showcase your work here.', tools: ['Add your tools'] }]));

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
