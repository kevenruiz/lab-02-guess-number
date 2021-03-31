export function compareNumbers(userGuess, correctNumber) {
    if (correctNumber < userGuess) return 1;
    if (correctNumber > userGuess) return -1;
    if (correctNumber === userGuess) return 0;
}