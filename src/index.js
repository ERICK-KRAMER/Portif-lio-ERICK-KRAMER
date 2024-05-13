const icon = document.querySelector('#icon');
const body = document.querySelector('body');


icon.addEventListener('click', () => {
  const name = icon.textContent;

  if(name === 'light_mode') {
    icon.textContent = 'dark_mode';
  } else {
    icon.textContent = 'light_mode'
  }

  body.classList.add('transition-all');
  body.classList.add('duration-500');
  body.classList.toggle('bg-neutral-800');
});


const skills = document.querySelector('#skills');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');

const hSkills = document.querySelector('#hSkills');
const hProjects = document.querySelector('#hProject');
const footer = document.querySelector('#footer');


skills.addEventListener('click', () => {
  hSkills.scrollIntoView({ behavior: 'smooth' });
});

projects.addEventListener('click', () => {
  hProjects.scrollIntoView({ behavior: 'smooth' });
});

contact.addEventListener('click', () => {
  footer.scrollIntoView({ behavior: 'smooth' });
});
