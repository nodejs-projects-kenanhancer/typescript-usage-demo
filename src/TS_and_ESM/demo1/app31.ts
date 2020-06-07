function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 5) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();

console.log();

export { };