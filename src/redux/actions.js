import { CLEAR, NUMBERS,DECIMAL, OPERATIONS, EQUALS } from './actionTypes';


export const clear = () => ({
  type: CLEAR,
  payload: 0,
});


export const decimal = () => ({
  type: DECIMAL,
  payload: '.',
});

export const numbers = input => ({
  type: NUMBERS,
  payload: input,
});

export const equals = () => ({
  type: EQUALS,
});
