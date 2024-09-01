export const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const debounce = (func, delay) => {
  let timeout;

  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};