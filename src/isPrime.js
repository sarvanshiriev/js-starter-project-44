export default function isPrime(number) {
  if (number <= 1) {
    return 'no';
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}
