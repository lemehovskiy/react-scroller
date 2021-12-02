const getConvertItemUnitToPx = (
  value: string,
  width: number,
  height: number
) => {
  const valueWithoutSpaces = value.replace(/\s/g, '');
  const parsedValue = parseInt(valueWithoutSpaces, 10);
  

  if (/px$/.test(valueWithoutSpaces)) {
    return parsedValue;
  }
  if (/%|vw$/.test(valueWithoutSpaces)) {
    return (width / 100) * parsedValue;
  }
  if (/%|vh$/.test(valueWithoutSpaces)) {
    return (height / 100) * parsedValue;
  }
  return parsedValue;
};

export default getConvertItemUnitToPx;
