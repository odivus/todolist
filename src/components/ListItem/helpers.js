export function convertDate(date) {
  const convertedDate = new Date(date);
  const formattedDate = convertedDate.toLocaleDateString();
  const formattedTime = convertedDate.toLocaleTimeString();

  return `${formattedDate} ${formattedTime}`;
}

export function convertPriority(priority) {
  const data = {
    low: 'Низкий',
    medium: 'Средний',
    high: 'Высокий'
  }

  return data[priority];
}
