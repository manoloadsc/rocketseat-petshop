import { scheduleCancel } from "../../service/schedule-cancel.js";
import { setupSchedules } from "./load.js";

const periods = document.querySelectorAll(".period");

// Para cada período, seleciona o <ul> e adiciona o event listener
periods.forEach(period => {
    const ul = period.querySelector("ul");
    if (ul) {
        ul.addEventListener("click", async (event) => {

            // Obtem a li pai do icone de cancelar
            const item = event.target.closest("li")

            // Obtem o ID do agendamento
            const {id} = item.dataset;

        // Confirma se o ID foi selecionado
        if(id) {
            const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?")

            // Verifica se o usuário confirmou
            if(isConfirm) {
                await scheduleCancel({id})
                setupSchedules()
            }
        }

    }
    )
    }
})