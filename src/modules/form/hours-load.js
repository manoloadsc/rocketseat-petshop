import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

// Renderizar os horários no select
const selectHour = document.getElementById("hour");

export function setupHoursLoad({date}) {
    
    // Limpa a lista de horários
    selectHour.innerHTML = ""

    // Buscar os horários disponíveis no select
    const openingHour = openingHours.map((hour) => {
        // Recupera somente a hora
        const [scheduleHour] = hour.split(":");

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

        return {
            hour,
            available: isHourPast
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
