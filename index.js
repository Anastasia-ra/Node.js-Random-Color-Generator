import kuler from 'kuler';

import randomColor from 'randomcolor';

// Function that prints the result in the required pattern:
function printResult(color) {
  const fullLine = '#'.repeat(31);
  const partLine = '#'.repeat(5);
  const partSpace = ' '.repeat(5);
  const partSpace2 = ' '.repeat(7);

  console.log(kuler(fullLine, color));
  console.log(kuler(fullLine, color));
  console.log(kuler(fullLine, color));
  console.log(
    kuler(
      `${partLine} ${partSpace} ${partSpace2} ${partSpace} ${partLine}`,
      color,
    ),
  );
  console.log(
    kuler(`${partLine} ${partSpace} ${color} ${partSpace} ${partLine}`, color),
  );
  console.log(
    kuler(
      `${partLine} ${partSpace} ${partSpace2} ${partSpace} ${partLine}`,
      color,
    ),
  );
  console.log(kuler(fullLine, color));
  console.log(kuler(fullLine, color));
  console.log(kuler(fullLine, color));
}

// Randomly generates color depending on user input and then prints it to the console:

let color;
if (process.argv[2]) {
  if (process.argv[3]) {
    color = randomColor({ luminosity: process.argv[3], hue: process.argv[2] });
    printResult(color);
  } else {
    color = randomColor({ hue: process.argv[2] });
    printResult(color);
  }
} else {
  color = randomColor();
  printResult(color);
}
