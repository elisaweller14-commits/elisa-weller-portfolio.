const gallery = document.querySelector("#project-gallery");

function renderProjects(projectList) {
  gallery.innerHTML = "";

  projectList.forEach((project) => {
    const card = `
      <article class="project-card">
        <a href="${project.url}">
          <img src="${project.image}" alt="${project.alt}">

          <div class="project-card__content">
            <p>${project.discipline}</p>
            <h3>${project.title}</h3>
          </div>
        </a>
      </article>
    `;

    gallery.insertAdjacentHTML("beforeend", card);
  });
}

renderProjects(projects);
