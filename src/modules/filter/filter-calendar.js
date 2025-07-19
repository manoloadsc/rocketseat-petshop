import dayjs from "dayjs";

const selectedDate = document.getElementById("agenda-date");
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");


export function setupFilterCalendar() {
    selectedDate.value = inputToday;

    selectedDate.min = inputToday;
}