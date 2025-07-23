import dayjs from "dayjs";

// Seleciona as sessões (Manhã, tarde e a noite)
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodEvening = document.getElementById("period-night");

export function setupSchedulesShow({ dailySchedules }) {
  try {
    // Seleciona os <ul> dentro de cada período
    const ulMorning = periodMorning.querySelector("ul");
    const ulAfternoon = periodAfternoon.querySelector("ul");
    const ulEvening = periodEvening.querySelector("ul");
    // Limpa apenas os <ul> dentro de cada período
    ulMorning.innerHTML = "";
    ulAfternoon.innerHTML = "";
    ulEvening.innerHTML = "";

    // Renderizar os agendamentos
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const appointment = document.createElement("div");
      const hour = document.createElement("strong");
      const petClient = document.createElement("p");
      const service = document.createElement("span");

      // Adiciona o id do agendamento
      item.setAttribute("data-id", schedule.id);

      hour.textContent = dayjs(schedule.when).format("HH:mm");
      petClient.textContent = `${schedule.pet} / ${schedule.name}`;
      service.textContent = schedule.service;
      service.classList.add("service");
      hour.classList.add("hour-schedule");
      appointment.classList.add("appointment");
      item.classList.add("list");

      // Cria o icone de cancelar
      const deleteButton = document.createElement("button");
      const deleteIcon = document.createElement("img");

      deleteButton.classList.add("delete-btn");
      deleteIcon.src = "./src/assets/trash.svg";
      deleteIcon.classList.add("icon-trash");
      deleteIcon.alt = "Excluir";
      deleteButton.appendChild(deleteIcon);

      appointment.append(hour, petClient, service);

      item.append(appointment, deleteButton);

      // Obtem somente a hora
      const hourAppointment = dayjs(schedule.when).hour();

      //Renderizar o agendamento na sessão (Condicional)
      if (hourAppointment <= 12) {
        ulMorning.appendChild(item);
      } else if (hourAppointment > 12 && hourAppointment <= 18) {
        ulAfternoon.appendChild(item);
      } else {
        ulEvening.appendChild(item);
      }
    });
  } catch (error) {
    console.log(error);
    alert("Erro ao buscar os agendamentos");
  }
}
