import Result from './Result.js'
import Track from './Track.js'
import Customize from './Customize.js'
import { useState } from 'react'

function Main({compNum}){
    const [ isCorrect, setIsCorrect ] = useState(false)
    const [ numCorrect, setNumCorrect ] = useState(0)
    const [ numTries, setNumTries ] = useState(0)
    const [ logNumCorrect, setLogNumCorrect ] = useState([])
    const [ logTries, setLogTries ] = useState([])
    const [ difficultyTries, setDifficultyTries ] = useState(10)
    const [ userDigits, setUserDigits ] = useState(['0', '0', '0', '0'])

    const checkArray = (arr1, arr2) => {
        let counter = 0;
        if(arr1.length !== arr2.length){
            return {isCorrect: false, numCorrect: counter}
        }
        for (let i=0; i < arr1.length; i++){
            if(arr1[i] === arr2[i]){
                counter++
            }
        }
        if(counter === arr1.length){
            return {isCorrect: true, numCorrect: counter}
        }
        return {isCorrect: false, numCorrect: counter}
    }

    const handleSubmit = () => {
        document.getElementById('error-message').innerHTML= '';
        if(logTries.indexOf(userDigits) !== -1){
            document.getElementById('error-message').textContent= 'You tried that combination already!';
            return;
        }
        const result = checkArray(compNum, userDigits)

        let logNum = logNumCorrect
        logNum.push(result.numCorrect)
        setLogNumCorrect(logNum)

        let logTry = logTries
        logTry.push(userDigits)
        setLogTries(logTry)

        let newNumTries = numTries + 1
        setNumTries(newNumTries)
        setIsCorrect(result.isCorrect)
        setNumCorrect(result.numCorrect)
    }

    return(
        <div id="Main-container">
            <div id="input-container">
                <div id="selection-container">
                    {userDigits.map((n, idx) => (
                        <div key={idx}>
                            <select name="digit" id={idx} value={n} className="digit-select" 
                            onChange={(e) => (setUserDigits(userDigits.map((n, innerIdx) => (innerIdx===idx ? e.target.value : n))))}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                    ))}
                </div>
                <div id="submit-container">
                    <button id="submit-number" onClick= {handleSubmit}>Submit</button>
                </div>
            </div>
            <div> 
                <div id="error-message"></div>
                <Result isCorrect={isCorrect} numCorrect={numCorrect} numTries={numTries} compNum={compNum} difficultyTries={difficultyTries}/>
            </div>
            <div id="custom-container">
                <Track numTries={numTries} logNumCorrect={logNumCorrect} logTries={logTries}/>
                <Customize difficultyTries={difficultyTries} setDifficultyTries={setDifficultyTries} />
            </div>
            
        </div>
    )
}

export default Main