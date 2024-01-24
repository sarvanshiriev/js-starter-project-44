// Пример randomItem
export default function randomItem() {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
}
