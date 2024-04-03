function main() {
  const greeting = `${getGreeting("Jatin")} Hello, from Git hooks!`;
  console.log(greeting);
}

function getGreeting(name) {
  return `Good evening, ${name}!`;
}

main();
