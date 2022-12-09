const form = document.querySelector(`.feedback__form`);
const popup = document.querySelector(`.popup`);


function handleCloseByEsc(event) {
    const key = event.key;
    if (key === "Escape") {
        closePopup();
    }
}
function openPopup() {
    popup.classList.add(`popup_active`);
    document.addEventListener("keydown", handleCloseByEsc);
}

function closePopup() {
    popup.classList.remove(`popup_active`);
    document.removeEventListener("keydown", handleCloseByEsc);
}
form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    form.reset();
    openPopup();
});
popup.addEventListener(`click`, (event) => {
    if (
        event.target.classList.contains("popup_active") ||
        event.target.classList.contains("popup__close-button-image")
    ) {
        closePopup();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.feedback__image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 10) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main-section");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
    })
});