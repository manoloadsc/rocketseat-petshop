import { setupSchedules } from "../schedules/load.js";

// Seleciona o input de data
const selectedDateForm = document.getElementById("appointment-date");
const selectedDate = document.getElementById("agenda-date");

// Recarrega a lista de horarios ao mudar de data
selectedDateForm.onchange = () => {
    selectedDate.value = selectedDateForm.value; // Sincroniza os campos
    setupSchedules();
};

selectedDate.onchange = () => {
    selectedDateForm.value = selectedDate.value; // Sincroniza os campos
    setupSchedules();
};
