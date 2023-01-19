const calculateScore = require("../bowlingScoreCalculator");

const cases = [
    [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], 90],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10], 30],
    [[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 16]
]

describe('Calculating score of one bowling game', () => {
    test.each(cases)('for the input %s the score should be %d',(rolls, expectedScore) => {
        expect(calculateScore(rolls)).toBe(expectedScore);
    })
})