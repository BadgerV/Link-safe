export const commaFormat = (number: string | number) => {
  // toLocalString only works with numbers so cast number to a number data type
  // if it's not a number
  if (typeof number === "undefined") return number;
  if (typeof number === "string") {
    // try to cast to number
    number = Number(number);
    if (Number.isNaN(number)) {
      // can't be casted, return as it is
      return number;
    }
  }
  return number.toLocaleString();
};
