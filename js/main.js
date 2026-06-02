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
const menuToggle = document.querySelector(".navbar__toggle");
const navbarLinks = document.querySelector(".navbar__links");
const navbarAnchors = document.querySelectorAll(".navbar__links a");

if (menuToggle && navbarLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navbarLinks.classList.toggle("visible");

    menuToggle.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  navbarAnchors.forEach((link) => {
    link.addEventListener("click", () => {
      navbarLinks.classList.remove("visible");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formMessage.textContent =
        "Revisa que todos los campos estén completos y que el email sea válido.";

      contactForm.reportValidity();
      return;
    }

    formMessage.textContent =
      "¡Gracias! El formulario se ha validado correctamente.";

    contactForm.reset();
  });
}
