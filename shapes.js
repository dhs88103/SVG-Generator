class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error('Render method not implemented');
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  render() {
    return `<circle r="${this.radius}" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    return '<polygon points="150, 18 244, 182 56, 182" ' +
           `fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  render() {
    return `<rect width="${this.side}" height="${this.side}" ` +
           `fill="${this.color}" />`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };