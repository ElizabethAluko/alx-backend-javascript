//1-stdin module

const readline = require('readline');

// Create an interface for reading from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
rl.on('line', (input) => {
  // Display the user's name
  console.log(`Your name is: ${input}`);

  // Close the program
  if (process.stdin.isTTY) {
	  rl.close();
  } else {
	  console.log('This important software is now closing');
	  rl.close();
  }
});
