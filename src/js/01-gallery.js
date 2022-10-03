import { galleryItems } from "./gallery-items.js";



const gallery = document.querySelector(".gallery");

const createMarkup = createGallery(galleryItems);

function createGallery(galleryItems) {
    
  return galleryItems
    .map(({preview, original, description}) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createMarkup);

gallery.addEventListener('click', e => {
    e.preventDefault();

    const imgs = e.target.dataset.source

    const lightBoxConfig = {
        onShow: () => {
            gallery.addEventListener("keydown", e => {
                if (e.key === 'Escape' && instance.visible()) {
                    instance.close()
                }
            })
          },

          onClose: () => {
            if (e.key === "Escape") {
            gallery.removeEventListener("keydown", e => {
                if (e.key === 'Escape' && instance.visible()) {
                    instance.close()
                }
            })
            }
            }
          };



    const instance = basicLightbox.create(`
    <img src="${imgs}" width="800" height="600">
`,lightBoxConfig);
instance.show(() => console.log('lightbox now visible'))
})
