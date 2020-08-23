export const formatDuration = (timestamp) => {
  const hours = Math.floor(timestamp / 60);
  const minutes = timestamp % 60;
  return `${hours}h ${(`0` + minutes).slice(-2)}m`;
};
