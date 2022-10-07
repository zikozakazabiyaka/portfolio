import { OPEN_MODAL, CLOSE_MODAL } from "./constants";
import { ModalType } from "./types";

export const INITIAL_STATE: ModalType = {
  isOpen: false,
};

const modalReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case OPEN_MODAL:
      return ({ ...state, isOpen: true });
    case CLOSE_MODAL:
      return ({ ...state, isOpen: false });
    default:
      return state
  }
}

export default modalReducer;
