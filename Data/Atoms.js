import { atom } from "jotai";
import { OpenDialog, OverlayAnimation, SwitchDialog } from "./Animations";
export const ModalIndex = atom(-1);
export const Dragging = atom(false);
export const ModalAnimations = atom(OpenDialog);
export const OverlayAnimations = atom(OverlayAnimation);
export const SwitchState = atom(false)
