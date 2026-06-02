const gallery = document.querySelector("#project-gallery");
const filterButtons = document.querySelectorAll(".filter-button");

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

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    if (selectedFilter === "todos") {
      renderProjects(projects);
    } else {
      const filteredProjects = projects.filter((project) => {
        return project.category === selectedFilter;
      });

      renderProjects(filteredProjects);
    }
  });
});

renderProjects(projects);
