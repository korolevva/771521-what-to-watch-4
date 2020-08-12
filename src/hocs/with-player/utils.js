export const formatMovieDuration = (timestamp) => {
  const hours = Math.floor(timestamp / 3600);
  const minutes = Math.floor(timestamp / 60) - (hours * 60);
  const seconds = Math.floor(timestamp % 60);
  return [
    hours.toString().padStart(2, `0`),
    minutes.toString().padStart(2, `0`),
    seconds.toString().padStart(2, `0`)
  ].join(`:`);
};
