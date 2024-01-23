export default function getRandomInt(min, max) {
  const correctedMin = Math.ceil(min);
  const correctedMax = Math.floor(max);
  return Math.floor(Math.random() * (correctedMax - correctedMin + 1)) + correctedMin;
}
