import create from 'zustand';
import { format } from 'date-fns'


export const orderStore = create(set => ({
  selectedOrder: null,
  setSelectedOrder: selectedOrder => set({ selectedOrder }),

  selectedDate: format(new Date(), 'yyyy-MM-dd'),
  setSelectedDate: selectedDate => set({ selectedDate }),

  order: [],
  setOrder: order => set({ order }),

  client: null,
  setClient: client => set({ client }),

  food: null,
  setFood: food => set({ food }),
}));

export const historicStore = create(set => ({
    selectedDate: format(new Date(), 'yyyy-MM-dd'),
    setSelectedDate: selectedDate => set({ selectedDate }),
  }))
  