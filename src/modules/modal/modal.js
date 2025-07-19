export function setupModal(){
    const modal = document.getElementById("appointment-modal");
    const modalButton = document.getElementById("new-appointment-button");
    const modalCloseButton = document.getElementById("modal-close-button");
    
    modalButton.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    modalCloseButton.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

}