import { useButton, useUiStore } from '../../../hooks';
import './style.css';

export const AddNewEvent = ({option, activeEvent = {}}) => {
  const { handleButton } = useButton({option, activeEvent});
  const { isDateModelOpen } = useUiStore();

  // const activeButtonDelete = () => {
  //   //Al entrar en la pagina
  // }

  return (
    <>
      <button className={`btn ${option === 'fa fa-plus' ? 'fab btn-primary' : `btn-danger fab-delete ${(activeEvent === null) ? 'invisible' : ''}`}`} onClick={handleButton}>
        <i className={`${option}`}></i>
      </button>
    </>
  )
}

export default AddNewEvent
