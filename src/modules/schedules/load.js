import { setupHoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../service/schedule-fetch-by-day.js";
import { setupSchedulesShow } from "./show.js";

const selectDateForm = document.getElementById("appointment-date");

export async function setupSchedules() {
    const date = selectDateForm.value;

    // Buscar na API os agendamentos do dia selecionado
    const dailySchedules = await scheduleFetchByDay({date});

    // Renderizar as horas disponíveis
    setupHoursLoad({date, dailySchedules});

    // Exibe os agendamentos
    setupSchedulesShow({dailySchedules});
}
