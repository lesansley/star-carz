function dateTimeFromISODate(value) {
  return `${value.substring(0, 10)} ${value.substring(11, 19)}`;
}

export { dateTimeFromISODate };
