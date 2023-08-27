import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: 16782678921984,
  title: 'Cumpleaños del Luis',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Luis',
  },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    updateEvent: (state, { payload }) => {
      state.events = state.events.map((e) => {
        if (e._id === payload._id) {
          return payload;
        }
        return e;
      });
    },

    deleteEvent: (state, { payload }) => {
      if (state.activeEvent) {
        state.events = state.events.filter((e) => e._id !== payload._id);
        state.activeEvent = null;
      }
    },
  },
});
export const { onSetActiveEvent, onNewEvent, updateEvent, deleteEvent } =
  calendarSlice.actions;
