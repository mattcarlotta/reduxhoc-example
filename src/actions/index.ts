import * as constants from "../constants";

/**
 * Controls 'toggles' state
 *
 * @function buttonToggle
 * @returns constants.USER_CHECK_SESSION
 */
export const buttonToggle = (): {
  type: typeof constants.BUTTON_TOGGLE;
} => ({
  type: constants.BUTTON_TOGGLE,
});
