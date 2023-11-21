// Small HTTP servet using Node's

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log('This important software is now closing');
    rl.close();
  } else {
    console.log(`Your name is: ${input}`);
    console.log('Welcome to Holberton School, what is your name?');
  }
});

rl.on('close', () => {
  process.exit(0);
});

module.exports = rl;
