import { setupHoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../service/schedule-fetch-by-day.js";
import { setupSchedulesShow } from "./show.js";

const selectDate = document.getElementById("appointment-date");

export async function setupSchedules() {
    const date = selectDate.value;
    
    // Renderizar as horas disponíveis
    setupHoursLoad({date});

    // Buscar na API os agendamentos do dia selecionado
    const dailySchedules = await scheduleFetchByDay({date});

    // Exibe os agendamentos
    setupSchedulesShow({dailySchedules});

    // Buscar os horários disponíveis no select (horário futuro + não agendado) 
}
