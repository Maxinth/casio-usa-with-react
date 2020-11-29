export const variantProps = {
  initial: "hidden",
  animate: "visible",
};

export const slideImageVariant = {
  hidden: {
    // y: "-20vh",
    opacity: 0.5,
  },

  visible: {
    // y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 2,
    },
  },
};
