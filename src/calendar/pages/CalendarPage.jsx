import { Calendar } from 'react-big-calendar';
import { NavBar, AddNewEvent } from '../';
import { localizer, getMessagesEs } from '../../helpers';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useCalendar, useCalendarStore, useUiStore } from '../../hooks';
import { CalendarEventBox, CalendarModal } from '../';
import { useSelector } from 'react-redux';


export const CalendarPage = () => {
  const { openDateModal } = useUiStore();
  const { events } = useCalendarStore();
  const { eventStyleGetter, onSelect, onViewChange, lastView } = useCalendar();
  const { activeEvent } = useSelector(state => state.calendar);

  const onDoubleClick = () => {
    openDateModal();
  };

  const add = 'fa fa-plus';
  const trash = 'fa fa-trash-alt';
  return (
    <>
      <NavBar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px)' }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEventBox
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />
      <CalendarModal />
      <AddNewEvent option={add} activeEvent={activeEvent} />
      <AddNewEvent option={trash} activeEvent={activeEvent} />
    </>
  )
}

export default CalendarPage
