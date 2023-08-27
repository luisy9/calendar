import { useDispatch, useSelector } from 'react-redux';
import {
  onSetActiveEvent,
  onNewEvent,
  onCloseDateModal,
  updateEvent,
  deleteEvent
} from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  //Sin base de datos
  // const newNote = (newNote) => {
  //   dispatch(onNewEvent(newNote));
  // }

  //Con base de datos
  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      //Actualizar
      dispatch(updateEvent({ ...calendarEvent }));
    } else {
      dispatch(onNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
      onCloseDateModal();
    }
  };

  const startDeltingEvent = (event) => {
    dispatch(deleteEvent(event));
  }

  return {
    events,
    activeEvent,
    setActiveEvent,
    startSavingEvent,
    startDeltingEvent
    // newNote
  };
};

export default useCalendarStore;
