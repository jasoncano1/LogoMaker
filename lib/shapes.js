class Shape {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
};

class Circle extends Shape {

    render() {
        return `<circle cx="150" cy="100" r="70"  fill="${this.color}"/>`;
    }
};

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182"
        fill="${this.color}"/>`;
    }
};

class Square extends Shape {
    render() {
        return `<polygoTn points="150, 18 244, 182 56, 182"
        fill="${this.color}"/>`;
    }
};

module.exports = { Circle, Triangle, Square}

