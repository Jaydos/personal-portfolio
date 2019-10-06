// Project Data

const projectData = {
  projects: [
    {
      id: 0,
      project_name: 'NewsGrid',
      description: 'Website for a fictional news company.',
      technologies: ['HTML', 'CSS', 'SASS', 'JavaScript'],
      live_link: 'https://nifty-curie-6f9a23.netlify.com/',
      github_link: 'https://github.com/Jaydos/newsGridDemo',
      image_urls: ['../dist/img/news-grid-1.png', '../dist/img/news-grid-2.png']
    },
    {
      id: 1,
      project_name: 'List Pagination and Filtering',
      description:
        'Dynamically divide single list of students into pages, with live search functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://jaydos.github.io/list-pagination-and-filtering/',
      github_link: 'https://github.com/Jaydos/list-pagination-and-filtering',
      image_urls: [
        '../dist/img/list-pagination-2.png',
        '../dist/img/list-pagination-1.png'
      ]
    },
    {
      id: 2,
      project_name: 'OOP Game Show App',
      description: "Word guessing game using OOP: 'Phrase Hunter'.",
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://jaydos.github.io/game-show-app/',
      github_link: 'https://github.com/Jaydos/game-show-app',
      image_urls: ['../dist/img/game-show-2.png', '../dist/img/game-show-1.png']
    },
    {
      id: 3,
      project_name: 'Public Api Requests',
      description:
        'Dynamically create an employee directory by communication to a third-party API.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://jaydos.github.io/public-api-requests/',
      github_link: 'https://github.com/Jaydos/public-api-requests',
      image_urls: [
        '../dist/img/employee-directory-1.png',
        '../dist/img/employee-directory-2.png'
      ]
    },
    {
      id: 4,
      project_name: 'Interactive Form',
      description:
        "Use JavaScript & jQuery to enhance an interactive registration form for a fictional conference called 'FullStack Conf.'",
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      live_link: 'https://jaydos.github.io/interactive-form/',
      github_link: 'https://github.com/Jaydos/interactive-form',
      image_urls: [
        '../dist/img/interactive-form-1.png',
        '../dist/img/interactive-form-2.png',
        '../dist/img/interactive-form-3.png'
      ]
    }
  ]
};

const projectGrid = document.querySelector('#project-grid');

projectData.projects.forEach(project => {
  let newProject = document.createElement('div');
  newProject.className = 'project';
  newProject.id = project.id;
  newProject.style.background = `url('${
    project.image_urls[0]
  }') no-repeat center center/cover`;

  let overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.id = `overlay${project.id}`;
  overlay.style.visibility = 'hidden';

  let description = document.createElement('p');
  description.textContent = project.description;

  let hideOverlay = document.createElement('div');
  let hideText = document.createElement('p');
  hideText.id = 'hide';
  hideText.textContent = 'Hide';

  hideOverlay.appendChild(hideText);

  let linkDiv = document.createElement('div');
  linkDiv.className = 'projectLinks';

  let liveLink = document.createElement('a');
  liveLink.textContent = 'Live Link';
  liveLink.href = project.live_link;
  liveLink.target = '_blank';

  let githubLink = document.createElement('a');
  githubLink.textContent = 'Github Link';
  githubLink.href = project.github_link;
  githubLink.target = '_blank';

  linkDiv.appendChild(liveLink);
  linkDiv.appendChild(githubLink);

  overlay.appendChild(description);
  overlay.appendChild(linkDiv);
  overlay.appendChild(hideOverlay);
  newProject.appendChild(overlay);

  projectGrid.appendChild(newProject);
});

const projects = document.querySelectorAll('.project');
const hideButtons = document.querySelectorAll('#hide');

hideButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.target.parentNode.parentNode.style.visibility = 'hidden';
    e.target.parentNode.parentNode.style.opacity = 0;
  });
});
projects.forEach(project => {
  project.addEventListener('click', e => {
    if (e.target.className == 'project') {
      document.querySelector(`#overlay${e.target.id}`).style.visibility = '';
      document.querySelector(`#overlay${e.target.id}`).style.opacity = 1;
    } /* else {
      document.querySelector(`#${e.target.id}`).style.visibility = "hidden";
      document.querySelector(`#${e.target.id}`).style.opacity = 0;
    } */
  });
});

/* projects.forEach(project => {
  project.addEventListener("mouseover", e => {
    if (e.target.className == "project") {
      document.querySelector(`#overlay${e.target.id}`).style.visibility = "";
      document.querySelector(`#overlay${e.target.id}`).style.opacity = 1;
    } else {
      document.querySelector(`#${e.target.id}`).style.visibility = "hidden";
      document.querySelector(`#${e.target.id}`).style.opacity = 0;
    } 
  });
});
 */
