const args = process.argv.slice(2);

switch (args[0]) {
  case `--binary-search`:
    console.log(`Binary search algorithm`);
    process.exit(0);
    break;
}