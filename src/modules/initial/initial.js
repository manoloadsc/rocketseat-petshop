import { setupModal } from "../modal/modal.js";
import { setupForm } from "../form/submit.js";
import { setupFilterCalendar } from "../filter/filter-calendar.js";
import { setupSchedules } from "../schedules/load.js";

export function initApp() {
  setupModal();
  setupForm();
  setupFilterCalendar();
  setupSchedules();
}

document.addEventListener("DOMContentLoaded", initApp);