import { setupModal } from "../modal/modal.js";
import { setupForm } from "../form/submit.js";
import { setupFilterCalendar } from "../filter/filter-calendar.js";

export function initApp() {
  setupModal();
  setupForm();
  setupFilterCalendar();
}

document.addEventListener("DOMContentLoaded", initApp);