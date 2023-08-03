const { writeFile } = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

const genLogo = ({text, textColor, color, shape}) => {
    let logo;
    switch (shape) {
        case 'circle': logo = new Circle(text, textColor, color); break;
        case 'triangle': logo = new Triangle(text, textColor, color); break;
        case 'square': logo = new Square(text, textColor, color); break;
    }; 

    writeFile('dist/logo.svg', logo.getSVG(), (err) => {
        if (err) throw err;
        console.log('Logo created!');
    });
}

module.exports = genLogo;