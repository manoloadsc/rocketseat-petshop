import dayjs from "dayjs";
import { clientNew } from "../../service/client-new.js";
import { scheduleNew } from "../../service/schedule-new.js";
import { setupSchedules } from "../schedules/load.js";

// Recuperando o form
const form = document.querySelector("form");

// Recuperando o nome do cliente
const nameClient = document.getElementById("name-client");

// Recuperando o nome do pet
const petClient = document.getElementById("pet-client");

// Recuperando o telefone do cliente
const phoneClient = document.getElementById("phone-client");

// Recuperando o serviço
const serviceClient = document.getElementById("service-client");

// Recuperando a data
const appointmentDate = document.getElementById("appointment-date");

// Recuperando a hora
const hour = document.getElementById("hour");

export function setupForm() {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      // Recuperando o nome do cliente
      const name = nameClient.value.trim();

      if (!name) {
        return alert("Nome do cliente é obrigatório");
      }

      // Recuperando o nome do pet
      const pet = petClient.value.trim();

      if (!pet) {
        return alert("Nome do pet é obrigatório");
      }

      // Recuperando o telefone do cliente
      const phone = phoneClient.value.trim();

      if (!phone) {
        return alert("Telefone é obrigatório");
      }

      // Recuperando o serviço
      const service = serviceClient.value.trim();

      if (!service) {
        return alert("Serviço é obrigatório");
      }

      // Recuperando a data
      const date = appointmentDate.value.trim();

      if (!date) {
        return alert("Data é obrigatória");
      }

      // Recuperando a hora
      const hourSelected = hour.value.trim();

      if (!hourSelected) {
        return alert("Hora é obrigatória");
      }

      // Recuperando a hora
      const [hourOnly] = hourSelected.split(":");

      // Insere a hora na data
      const when = dayjs(date).add(hourOnly, "hour");

      // Gera um ID
      const id = new Date().getTime();

      await scheduleNew({ id, name, pet, phone, service, when });
      await clientNew({ id, name, phone, pet });

      // Recarrega a lista de agendamentos
      await setupSchedules();

      // Limpa o form
      nameClient.value = "";
      petClient.value = "";
      phoneClient.value = "";
      serviceClient.value = "";

      // Fecha o modal
      const modal = document.getElementById("appointment-modal");
      modal.classList.add("hidden");
      
    } catch (error) {
      console.log(error);
      alert("Erro ao agendar o agendamento");
    }
  });
}
