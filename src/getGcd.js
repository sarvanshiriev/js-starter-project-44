export default function getGcd(a, b) {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
}
