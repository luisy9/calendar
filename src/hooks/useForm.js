import { useState, useMemo, useEffect } from 'react';
import { useCalendarStore } from './useCalendarStore';
import { addHours, differenceInSeconds } from 'date-fns';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useUiStore } from './useUiStore';

export const useForm = () => {
  const [formValues, setFormValues] = useState({
    title: 'Luis',
    notes: 'de Haro',
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const [formSubmited, setFormSubmited] = useState(false);
  const { activeEvent, startSavingEvent } = useCalendarStore();
  const { onCloseModal } = useUiStore();

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({...activeEvent});
    }
  }, [activeEvent]);

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChange = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const titleClass = useMemo(() => {
    if (!formSubmited) return '';

    return formValues.title.length <= 0 ? 'is-invalid' : 'is-valid';
  }, [formSubmited, formValues.title]);

  const onSubmit = async(event) => {
    event.preventDefault();
    setFormSubmited(true);

    const difference = differenceInSeconds(formValues.end, formValues.start);
    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error');
      return;
    }

    if (formValues.title.length <= 0) return;

    await startSavingEvent(formValues);
    Swal.fire('Success!', 'Formulario enviado correctamente', 'success');
    onCloseModal();
    setFormSubmited(false);
  };

  return {
    onInputChange,
    onDateChange,
    onSubmit,
    titleClass,
    formValues,
  };
};
