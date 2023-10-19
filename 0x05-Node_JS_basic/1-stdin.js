//Using Process stdin

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if (process.argv.length === 3) {
  const name = process.argv[2];
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  process.exit(0);
} else {
  console.log('Welcome to Holberton School, what is your name?');

  rl.question('', (name) => {
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
    rl.close();
  });

  rl.on('close', () => {
    process.exit(0);
  });
}
