const { writeFile } = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

const genLogo = (text, textColor, shape, color) => {
    let logo =
        shape == 'circle'
            ? new Circle(text, textColor, color) :
            shape == 'triangle'
                ? new Triangle(text, textColor, color)
                : new Square(text, textColor, color)

    writeFile('dist/logo.svg', logo.render(), (err) => {
        if (err) throw err;
        console.log('Logo created!');
    });
}

module.exports = genLogo;