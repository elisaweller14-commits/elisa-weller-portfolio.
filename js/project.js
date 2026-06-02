const galleryImages = document.querySelectorAll(".case-study__gallery img");

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
lightbox.setAttribute("aria-hidden", "true");

lightbox.innerHTML = `
  <button class="lightbox__close" type="button" aria-label="Cerrar imagen">
    ×
  </button>

  <img class="lightbox__image" src="" alt="">
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox__image");
const closeButton = lightbox.querySelector(".lightbox__close");

function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;

  lightbox.classList.add("visible");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  lightbox.classList.remove("visible");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("no-scroll");
}

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    openLightbox(image);
  });
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
