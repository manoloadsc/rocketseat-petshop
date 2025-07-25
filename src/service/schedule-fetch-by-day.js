import dayjs from "dayjs";
import {apiConfig} from "./api-config.js";

export async function scheduleFetchByDay({date}) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedule`);
        
        const data = await response.json();

        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"));

        return dailySchedules;
    } catch (error) {
        console.log(error);
        alert("Erro ao buscar os agendamentos");
    }
}
    