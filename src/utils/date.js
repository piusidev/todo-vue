export const getDate = () => {
  const date = new Date();
  const hours = date.getHours();
  const day = date.getDate();
  const weekday = date.toLocaleString('default', { weekday: 'long' });
  const month = date
    .toLocaleString('default', { month: 'long' })
    .substring(0, 3);

  return { day, month, weekday, hours };
};
