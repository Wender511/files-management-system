export const parseToNumber = (value: string): number | null => {
  const parsedValue = parseFloat(value);

  // Check if the parsed value is NaN (Not a Number)
  if (isNaN(parsedValue)) {
    return null;
  }

  return parsedValue;
};
