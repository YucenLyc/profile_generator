const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What do you think of Node.js? ', (answer1) => {
  rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer2) => {
    rl.question('What\'s an activity you like doing? ', (answer3) => {
      rl.question('What do you listen to while doing that? ', (answer4) => {
        rl.question('Which meal is your favourite? ', (answer5) => {
          rl.question('What\'s your favourite thing to eat for that meal? ', (answer6) => {
            rl.question('Which sport is your absolute favourite? ', (answer7) => {
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer8) => {
                console.log(`Thank you for taking the survey. Your name is ${answer2}, you like to ${answer3}, you listen to ${answer4} while doing ${answer3}. Your favourite meal is ${answer5}. Your favourite thing to eat for that meal is ${answer6}. Your favourite sport is ${answer7}. Your superpower is ${answer8}. You think Node.js is ${answer1}.`);

                rl.close();
              })
            })
          })
        }) 
      })
    })
  })
});

