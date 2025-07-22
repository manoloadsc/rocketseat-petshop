import {apiConfig} from "./api-config.js";

export async function scheduleNew({id, name, pet, phone, service, when}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedule`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, pet, phone, service, when})
        })
        alert("Agendamento realizado com sucesso");
    } catch (error) {
        console.log(error);
        alert("Erro ao agendar o agendamento");
    }
}