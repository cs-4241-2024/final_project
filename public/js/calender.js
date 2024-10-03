
const currentDate = new Date();

const generateCalendar = () => {
  currentDate.setDate(1);

  const daysContainer = document.querySelector(".days");

  const totalDays = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const prevMonthLastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();

  const firstDayOfMonthIndex = currentDate.getDay();
  const lastDayOfMonthIndex = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDay();
  const extraNextDays = 7 - lastDayOfMonthIndex - 1;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").textContent =
    monthNames[currentDate.getMonth()];
  document.querySelector(".date p").textContent = new Date().toDateString();

  let daysHTML = "";

  for (let prev = firstDayOfMonthIndex; prev > 0; prev--) {
    daysHTML += `<div class="prev-date">${prevMonthLastDay - prev + 1}</div>`;
  }

  for (let day = 1; day <= totalDays; day++) {
    if (
      day === new Date().getDate() &&
      currentDate.getMonth() === new Date().getMonth()
    ) {
      daysHTML += `<div class="day today" data-day="${day}">${day}</div>`;
    } else {
      daysHTML += `<div class="day" data-day="${day}">${day}</div>`;
    }
  }

  if (extraNextDays > 0) {
    for (let next = 1; next <= extraNextDays; next++) {
      daysHTML += `<div class="next-date">${next}</div>`;
    }
  }

  daysContainer.innerHTML = daysHTML;

  document.querySelectorAll(".day").forEach((day) => {
    day.addEventListener("click", (e) => {
      const selectedDay = e.target.getAttribute("data-day");

      document
        .querySelectorAll(".day")
        .forEach((d) => d.classList.remove("highlighted"));

      day.classList.add("highlighted");

      fetchEventsForDay(selectedDay, e.target);
    });
  });
};

//WILL BE REPLACED BY FETCHING DATA FROM DATABASE
const fetchEventsForDay = (day, dayElement) => {
  const events = {
    1: ["meeting w hanna", "lunch w sophia"],
    5: ["andrew goes to the gym", "lunch w hanna"],
    12: ["homework", "test"],
  };

  const eventList = events[day] || ["No events"];
  displayEvents(eventList, dayElement);
};


const displayEvents = (events, dayElement) => {
  const existingPopup = document.querySelector(".event-popup");
  if (existingPopup) existingPopup.remove();

  const eventPopup = document.createElement("div");
  eventPopup.classList.add("event-popup");

  let eventHTML = "<h3>Events:</h3>";
  events.forEach((event) => {
    eventHTML += `<p>${event}</p>`;
  });
  eventPopup.innerHTML = eventHTML;

  dayElement.style.position = "relative";
  dayElement.appendChild(eventPopup);
};

document.querySelector(".prev").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar();
});

generateCalendar();
