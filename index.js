function main() {
  const greeting = `${getGreeting("Jatin")} Hello, from git hooks!`;
  return greeting;
}

function getGreeting(name) {
  return `Good evening, ${name}!`;
}

main();
