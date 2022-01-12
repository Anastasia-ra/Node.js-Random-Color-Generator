import kuler from 'kuler';

import randomColor from 'randomcolor';

// Function that prints the result in the required pattern:
function printResult(color) {
  let str = '#';
  let space = ' ';
  let fullLine = str.repeat(31);
  let partLine = str.repeat(5);
  let partSpace = space.repeat(5);
  let partSpace2 = space.repeat(7);

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
