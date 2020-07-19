export const numericScoreToTextScore = (numericScore) => {
  if (numericScore < 3) {
    return `Bad`;
  } else if (numericScore < 5) {
    return `Normal`;
  } else if (numericScore < 8) {
    return `Good`;
  } else if (numericScore < 10) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};
