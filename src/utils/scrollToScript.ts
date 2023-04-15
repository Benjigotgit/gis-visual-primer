export const scrollToScript = (scrollTo: number, smooth?: boolean) => {
  window.scrollTo({
    top: scrollTo,
    left: 100,
    behavior: smooth ? "smooth" : "auto",
  });
};
