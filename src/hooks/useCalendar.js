import { useState } from 'react';
import useCalendarStore from './useCalendarStore';

export const useCalendar = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
  const { setActiveEvent, startDeltingEvent } = useCalendarStore();
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return {
      style,
    };
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
  };

  const onDeleteEvent = (activeEvent) => {
    startDeltingEvent({...activeEvent});
  }

  return {
    eventStyleGetter,
    onSelect,
    onViewChange,
    lastView,
    onDeleteEvent
  };
};

export default useCalendar;
