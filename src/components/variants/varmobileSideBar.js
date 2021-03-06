export const mobileSideBarVariant = {
  hidden: {
    x: "90vw",
  },

  visible: {
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
