export const mobileSideBarVariant = {
  hidden: {
    // opacity: 0,
    x: "90vw",
  },

  visible: {
    // opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.6,
    },
  },
};

export const variantProps = {
  initial: "hidden",
  animate: "visible",
};
