export function convertDate(date) {
  const convertedDate = new Date(date);
  const formattedDate = convertedDate.toLocaleDateString();
  const formattedTime = convertedDate.toLocaleTimeString();

  return `${formattedDate} ${formattedTime}`;
}
