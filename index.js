import chalk from "chalk";

console.log(chalk.green("Hello world!"));
console.log(chalk.blue.bgRed.bold("Hello world!"));
console.log(chalk.blue("Hello") + " World" + chalk.red("!"));
console.log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

import jokes from "jester-jokes";
const joke = jokes.getJoke();
console.log(joke);

import cowsay from "cowsay";

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);
