/* eslint-disable no-else-return */
import {
 DECIMAL, CLEAR, NUMBERS, EQUALS 
} from '../actionTypes';

const initial = {
  input: 0,
  prevInput: 0,
};

const isOperator = /[-*/+]/;
const hasDecimal = /[.]/;
const endsWithOperator = /[x+‑/]$/;

const evaluate = (state = initial, action) => {
  switch (action.type) {
    case CLEAR:
      return {
        ...state,
        input: 0,
        prevInput: 0,
      };

    case DECIMAL:
      return {
        ...state,
        input: state.input + '.',
      };

   
    case NUMBERS:
      if (state.input === 0) {
        return {
          ...state,
          input: action.payload,
        };
      } else if (state.input[(state.input).length - 1] === '0' && action.payload === '0') {
        return {
          ...state,
          input: state.input,
        };
      } else if (isOperator.test(state.input[(state.input).length - 1]) && isOperator.test(action.payload)) {
        return {
          ...state,
          input: (state.input).substring(0, (state.input).length - 1) + action.payload,
        };
      } else if (hasDecimal.test(state.input) && action.payload === '.' && !isOperator.test(state.input)) {
        return {
          ...state,
          input: state.input,
        };
      }
      return {
        ...state,
        input: state.input + action.payload,
      };

    case EQUALS:
      return {
        ...state,
        input: eval(state.input),
      };

    default:
      return state;
  }
};

export default evaluate;
