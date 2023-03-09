const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Чи подобається вам програмування? (y/n) ", (_answer1) => {
  rl.question("Чи будемо вчитись далі? (y/n) ", (_answer2) => {
    rl.question("и маєш час на навчання? (y/n) ", (_answe2r3) => {
      console.log("Відповіді:\n1. ${answer1}\n2. ${answer2}\n3. ${answer3}");
      rl.close();
    });
  });
});
