import { useDispatch, useSelector } from 'react-redux';
import { onOpenDateModal, onCloseDateModal } from '../store/ui/uiSlice';

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isDateModelOpen } = useSelector(state => state.ui);


  const openDateModal = () => {
    dispatch(onOpenDateModal());
  }

  const onCloseModal = () => {
    dispatch(onCloseDateModal());
  }

  return {
    isDateModelOpen,
    openDateModal,
    onCloseModal
  }
};