const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What are the letters for the Logo (3 or less)?',
        validate: text => text.length < 4 || 'Please enter 3 or less letters',
        default: 'ABC'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What is the text color?',
        default: 'white'
    },
    {
        type: 'input',
        name: 'color',
        message: 'What is the shape color?',
        default: 'darkgreen'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What is the shape of the logo?',
        choices: ['square', 'circle', 'triangle'],
        default: 'cirlce'
    }
];

module.exports = questions;