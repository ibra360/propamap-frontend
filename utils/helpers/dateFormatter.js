const getDate = value => {
  let date = new Date(value);
  return (
    date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
  );
};

export const dateFormatter = (date, withTime = false) => {
  const timeFormatter = time => {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let amPm = 'am';
    if (minutes.toString().length < 2) minutes = `0${minutes}`;
    if (hours >= 12) {
      amPm = 'pm';
      if (hours != 12) {
        hours = hours - 12;
      }
    }
    if (hours.toString().length < 2) hours = `0${hours}`;

    return `${hours}:${minutes} ${amPm}`;
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  date = new Date(date);
  return `${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}${withTime ? ` ${timeFormatter(date)}` : ''}`;
};

export default getDate;
