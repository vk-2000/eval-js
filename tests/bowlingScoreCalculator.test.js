const { bestScore, calculateScore } = require("../bowlingScoreCalculator")


const calculateScoreCases = [
    [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], 90],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10], 30],
    [[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 16]
]

const bestScoreCases = [
    [[
        [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
        [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ], 90]
]


describe('Calculating score of one bowling game', () => {
    test.each(calculateScoreCases)('for the input %s the score should be %d',(rolls, expectedScore) => {
        expect(calculateScore(rolls)).toBe(expectedScore);
    })
})

describe('Calculating best score from set of games', () => {
    test.each(bestScoreCases)('for the input %o the best score should be %d',(games, expectedScore) => {
        expect(bestScore(games)).toBe(expectedScore);
    })
})