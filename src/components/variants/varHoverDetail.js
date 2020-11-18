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
};

export { hoverDetailVariant, variantProps };
