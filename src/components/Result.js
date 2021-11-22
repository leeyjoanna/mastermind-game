function Result({isCorrect, numCorrect, numTries, compNum, difficulty}){
    console.log('result', isCorrect)

    if(isCorrect){
        document.getElementById('submit-number').disabled=true;
        return(
            <div id="result-container">
                <div>Congrats! You figured out the code and won the game in {numTries} tries!</div>
            </div>
        )
    }
    if(numTries >= difficulty){
        document.getElementById('submit-number').disabled=true;
        return(
            <div id="result-container">
                <div>Ooops, that was {difficulty} tries! The code was {compNum} this time. Press reset to play again :)</div>
            </div>
        )
    }
    return(
        <div id="result-container">
            <div>Number of correct digits: {numCorrect}</div>
            <div>Number of tries left: {difficulty - numTries}</div>
        </div>
    )
}

export default Result