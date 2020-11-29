const hoverDetailVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

const variantProps = {
  initial: "hidden",
  animate: "visible",
  hover: "hover",
};

const productItemHoverVariant = {
  hover: {
    scale: 1.01,
    transition: {
      type: "tween",
      yoyo: 10,
    },
  },
};
export { hoverDetailVariant, variantProps, productItemHoverVariant };
