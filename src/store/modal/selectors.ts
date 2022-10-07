import { RootState } from "..";

export const isOpenModalSelector = (state: RootState) => state.modal.isOpen;
