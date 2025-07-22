import { setupSchedules } from "../schedules/load.js";

// Seleciona o input de data
const selectedDateForm = document.getElementById("appointment-date");
const selectedDate = document.getElementById("agenda-date");

// Recarrega a lista de horarios ao mudar de data
selectedDateForm.onchange = () => {
    setupSchedules();
    console.log(selectedDateForm.value);
};

// Recarrega a lista de horarios ao mudar de data
selectedDate.onchange = () => {
    setupSchedules();
    console.log(selectedDate.value);
};
