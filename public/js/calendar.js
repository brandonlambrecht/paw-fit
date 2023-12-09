import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'

const calendar = new Calendar(calendarEl, {
plugins: [timeGridPlugin],
initialView: 'timeGridWeek',
headerToolbar: {
    left: 'prev,next',
    center: 'title',
    right: 'timeGridWeek,timeGridDay' // user can switch between the two
}
})