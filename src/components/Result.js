function Result({isCorrect, numCorrect, numTries}){
    console.log('result', isCorrect)

    if(isCorrect){
        document.getElementById('submit-number').disabled=true;
        return(
            <div id="result-container">
                <div>Congrats! You figured out the code and won the game in {numTries} tries!</div>
            </div>
        )
    }
    if(numTries === 10){
        document.getElementById('submit-number').disabled=true;
        return(
            <div id="result-container">
                <div>Oh no! You couldn't get the code in 10 tries, click reset to try the game again! You got this!</div>
            </div>
        )
    }
    return(
        <div id="result-container">
            {/* <div>Result goes here: {isCorrect.toString()}</div> */}
            <div>You have this many digits correct: {numCorrect}</div>
            <div>Number of tries: {numTries}</div>
        </div>
    )
}

export default Result