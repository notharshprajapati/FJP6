let addBtn = document.querySelector(".add");
let modal = document.querySelector(".modal-cont");
let addModal = true;

addBtn.addEventListener("click", function () {
  if (addModal) {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
  addModal = !addModal;
});
