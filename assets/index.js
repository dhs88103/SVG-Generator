const readline = require("readline");
const fs = require("fs");
const { createLogoSVG } = require("../logoGenerator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

(async function () {
  const text = await promptUser("Enter text (up to 3 characters): ");
  const textColor = await promptUser("Enter text color: ");
  const shape = await promptUser("Choose a shape (circle, triangle, square): ");
  const shapeColor = await promptUser("Enter shape color: ");

  const svgFileName = "logo.svg";
  createLogoSVG(text, textColor, shape, shapeColor, svgFileName);

  console.log(`Generated ${svgFileName}`);
  rl.close();
})();
