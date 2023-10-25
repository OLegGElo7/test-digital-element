export const modal = () => {
  const modalBtn = document.getElementById("modal__button");
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modal__close");

  modalBtn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  });

  window.addEventListener("click", (Event) => {
    if (Event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "visible";
    }
  });
};
