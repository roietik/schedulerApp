export const remCalc = (px) => {
  return `${px / 16}rem`;
};
export const emCalc = (px) => `${px / 16}em`;

// `${px / parseFloat(getComputedStyle(document.documentElement).fontSize)}rem`;
