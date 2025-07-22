import {apiConfig} from "./api-config.js";

export async function clientNew({id, name, phone, pet}) {
    try {
        await fetch(`${apiConfig.baseURL}/clients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, phone, pet})
        })
        console.log("Cliente cadastrado com sucesso");
    } catch (error) {
        console.log(error);
        alert("Erro ao cadastrar o cliente");
    }
}
