import { setupHoursLoad } from "../form/hours-load.js";

const selectDate = document.getElementById("appointment-date");

export function setupSchedules() {
    const date = selectDate.value;
    
    // Renderizar as horas disponíveis
    setupHoursLoad({date});

    // Buscar na API os agendamentos do dia selecionado

    // Buscar os horários disponíveis no select (horário futuro + não agendado) 
}
