export const SwitchDialog = {
  initial: {
    x: "-50%",
    y: "-50%",
    opacity: 1,
  },
  animate: {
    x: "-50%",
    y: "-50%",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "0%",
    y: "-50%",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
export const OpenDialog = {
  initial: {
    x: "0%",
    y: "-50%",
    opacity: 0,
  },
  animate: {
    x: "-50%",
    y: "-50%",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "0%",
    y: "-50%",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export const OverlayAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.4,
    ease: "easeInOut",
  },
};
export const SwitchAnimation = {
  initial: {
    y:10,
    opacity: 0,
  },
  animate: {
    y:0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.7,
    ease: "easeInOut",
  },
};
