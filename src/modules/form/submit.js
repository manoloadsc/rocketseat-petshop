const form = document.querySelector("form");

export function setupForm() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Formulário enviado");
    });
}