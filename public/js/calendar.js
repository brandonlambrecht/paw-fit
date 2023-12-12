// import { Calendar } from '@fullcalendar/core'
// import timeGridPlugin from '@fullcalendar/timegrid'

// const calendar = new Calendar(calendarEl, {
// plugins: [timeGridPlugin],
// initialView: 'timeGridWeek',
// headerToolbar: {
//     left: 'prev,next',
//     center: 'title',
//     right: 'timeGridWeek,timeGridDay' // user can switch between the two
// }
// })
// const calendarE = document.querySelector('#calendar')


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
    });
    calendar.render();
});