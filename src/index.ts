import yargs from "yargs";

const args = yargs
  .command("* <message>", "print a message received as an argument")
  .positional("message", {
    describe: "message for printing",
    type: "string",
    demandOption: true,
  })
  .parseSync();

console.log(args.message);
