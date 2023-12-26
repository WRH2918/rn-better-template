import {create} from 'zustand';

interface ICounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  changeNum: (num: number) => void;
}

const useCounterStore = create<ICounterState>(set => ({
  count: 0,
  increment: () => set(state => ({count: state.count + 1})),
  decrement: () => set(state => ({count: state.count - 1})),
  changeNum: (num: number) => set(state => ({count: num})),
}));

export {useCounterStore};