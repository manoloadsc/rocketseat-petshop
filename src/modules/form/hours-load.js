import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

// Renderizar os horários no select
const selectHour = document.getElementById("hour");

export function setupHoursLoad({date, dailySchedules}) {
    
    // Limpa a lista de horários
    selectHour.innerHTML = "";

     // Obtem as horas com a datas indisponiveis
     const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    // Buscar os horários disponíveis no select
    const openingHour = openingHours.map((hour) => {
        // Recupera somente a hora
        const [scheduleHour] = hour.split(":");

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

        const available = !unavailableHours.includes(hour) && !isHourPast;

        return {
            hour,
            available
        }
    })

    // Renderizar os horários no select
    openingHour.forEach((hour) => {
        const option = document.createElement("option");
        option.value = hour.hour;
        option.textContent = hour.hour;
        option.disabled = !hour.available;
        option.classList.add(hour.available ? "select-available" : "select-unavailable")
        selectHour.appendChild(option);
    })
    
}
