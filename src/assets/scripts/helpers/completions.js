export default function completions(num, declintation) {
  let n = num % 100;

  if (n > 4 && n < 21) {
    return `${num} ${declintation[2]}`;
  } else {
    n = num % 10;
    if (n === 1) {
      return `${num} ${declintation[0]}`;
    }
    if (n > 1 && n < 5) {
      return `${num} ${declintation[1]}`;
    } else {
      return `${num} ${declintation[2]}`;
    }
  }
}
