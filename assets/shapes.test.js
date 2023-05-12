const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('render method should return the correct SVG string', () => {
    const shape = new Circle(50);
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle r="50" fill="blue" />');
  });
});

describe('Triangle', () => {
  test('render method should return the correct SVG string', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Square', () => {
  test('render method should return the correct SVG string', () => {
    const shape = new Square(100);
    shape.setColor('blue');
    expect(shape.render()).toEqual('<rect width="100" height="100" fill="blue" />');
  });
});