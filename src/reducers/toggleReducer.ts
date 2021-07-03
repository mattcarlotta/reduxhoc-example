import type { AnyAction } from "redux";
import * as types from "../constants";

/**
 * @function toggleReducer
 * @param {object} state - an object containing current user session state.
 * @param {object} action - type and payload to be reduced.
 * @returns a boolean
 */
const toggleReducer = (state = true, { type }: AnyAction): boolean => {
  switch (type) {
    case types.BUTTON_TOGGLE: {
      return !state;
    }
    default: {
      return state;
    }
  }
};

export default toggleReducer;
