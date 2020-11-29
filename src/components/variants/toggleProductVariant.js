export const toggleProductsVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
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
