document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const monthYear = document.getElementById("month-year");
    const calendarBody = document.getElementById("calendar-body");

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function updateCalendar() {
        let firstDay = new Date(currentYear, currentMonth, 1);
        let lastDay = new Date(currentYear, currentMonth + 1, 0);
        let startDate = firstDay.getDay();
        let endDate = lastDay.getDate();

        monthYear.textContent = `${currentMonth + 1}月 ${currentYear}`;

        let html = "";
        let day = 1;

        for (let i = 0; i < 6; i++) {
            html += "<tr>";
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startDate) {
                    html += "<td></td>";
                } else if (day > endDate) {
                    html += "<td></td>";
                } else {
                    html += `<td>${day}</td>`;
                    day++;
                }
            }
            html += "</tr>";
        }

        calendarBody.innerHTML = html;
    }

    updateCalendar();

    prevBtn.addEventListener("click", function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    nextBtn.addEventListener("click", function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });
});
