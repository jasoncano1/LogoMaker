class Shape {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `Child class should implement this method`;
    }

    getText() {
        return `<text x="150" y="125" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

    getSVG() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.render()}
        ${this.getText()}
        </svg>`;
    }
};

class Circle extends Shape {

    render() {
        return `<circle cx="150" cy="100" r="70"  fill="${this.color}"/>`;
    }
};

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;     
    }
};

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="100"
        fill="${this.color}"/>`;
    }
};

module.exports = { Circle, Triangle, Square }

