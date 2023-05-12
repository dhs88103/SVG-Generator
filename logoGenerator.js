const fs = require("fs");
const { Circle, Triangle, Square } = require("./shapes");

function createLogoSVG(text, textColor, shape, shapeColor, fileName) {
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
      <g transform="translate(150, 100)">
        <text text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
        ${getShape(shape, shapeColor).render()}
      </g>
    </svg>
  `;

  fs.writeFileSync(fileName, svgContent.trim());
}

function getShape(shape, color) {
  switch (shape) {
    case "circle":
      return new Circle(50);
    case "triangle":
      return new Triangle(100, 100);
    case "square":
      return new Square(100);
    default:
      throw new Error("Invalid shape");
  }
}

module.exports = { createLogoSVG };
