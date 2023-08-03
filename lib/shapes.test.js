const { Circle, Square, Triangle } = require('./shapes');

let text = 'ABC';
let textColor = 'white';
let color = 'yellow';

let logo;

logo = new Circle(text, textColor, color);
test('Circle has text', () => expect(logo.text).toBe(text));
test('Circle has color', () => expect(logo.color).toBe(color));
test('Circle has text color', () => expect(logo.textColor).toBe(textColor));

logo = new Square(text, textColor, color);
test('Square has text', () => expect(logo.text).toBe(text));
test('Square has color', () => expect(logo.color).toBe(color));
test('Square has text color', () => expect(logo.textColor).toBe(textColor));

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
