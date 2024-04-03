function main() {
  const greeting = `${getGreeting("Jatin")} Hello, from git hooks!`;
  console.log(greeting);
}

function getGreeting(name) {
  return `Good evening, ${name}!`;
}

main();
