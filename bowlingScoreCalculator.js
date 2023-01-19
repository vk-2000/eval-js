const calculateScore = rolls => {
    let score = 0;
    let standingPins = 10;
    let rollsInFrame = 0;
    let numFrames = 0;
    for(let i=0;i<rolls.length; i++){
        if(numFrames == 9){
            score += rolls.slice(i).reduce((partialSum, a) => partialSum + a, 0);
            break;
        }
        if(rolls[i] == 10){
            score += (10 + rolls[i+1] + rolls[i+2]);
            rollsInFrame = 0;
            numFrames += 1;
            standingPins = 10;
        }
        else {
            standingPins -= rolls[i];
            rollsInFrame += 1;
            if(rollsInFrame == 2){
                score += ((standingPins === 0) ? (rolls[i] + rolls[i+1]) : rolls[i]);
                rollsInFrame = 0;
                numFrames += 1;
                standingPins = 10;
            }
            else{
                score += rolls[i];
            }
        }
    }
    return score;
}

console.log(calculateScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));