import { useUiStore } from './useUiStore';
import { useCalendarStore } from './useCalendarStore';
import addHours from 'date-fns/addHours';
import useCalendar from './useCalendar';

export const useButton = ({ option, activeEvent = {}}) => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();
  const { onDeleteEvent } = useCalendar();

  const handleButton = () => {
    if (option === 'fa fa-plus') {
      handleOpenModal();
    } else {
      deleteEvent(event);
    }
  };

  const handleOpenModal = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Luis',
      },
    });

    openDateModal();
  };

  const deleteEvent = () => {
    onDeleteEvent(activeEvent);
  };

  return {
    handleButton,
  };
};

export default useButton;
