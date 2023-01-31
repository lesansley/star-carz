function dateTimeFromISODate(value) {
  return (
    <span>
      {value.substring(0, 10)} <em>{value.substring(11, 19)}</em>
    </span>
  );
}

export { dateTimeFromISODate };
