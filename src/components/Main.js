import Result from './Result.js'
import { useState } from 'react'

function Main({compNum}){
    const [ isCorrect, setIsCorrect ] = useState(false)
    const [ numCorrect, setNumCorrect ] = useState(0)
    const [ numTries, setNumTries ] = useState(0)

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
        const digit1 = document.getElementById('digit-1').value;
        const digit2 = document.getElementById('digit-2').value;
        const digit3 = document.getElementById('digit-3').value;
        const digit4 = document.getElementById('digit-4').value;

        const digitArray = [digit1, digit2, digit3, digit4]
        console.log(compNum)
        console.log(digitArray)
        console.log(checkArray(compNum, digitArray))
        const result = checkArray(compNum, digitArray)

        let newNumTries = numTries + 1
        setNumTries(newNumTries)
        setIsCorrect(result.isCorrect)
        setNumCorrect(result.numCorrect)

    }

    return(
        <div id="Main-container">
            <div id="input-container">
                <div id="selection-container">
                    <select name="digit-1" id="digit-1" className="digit-select">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <select name="digit-2" id="digit-2" className="digit-select">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">7</option>
                        <option value="7">7</option>
                    </select>
                    <select name="digit-3" id="digit-3" className="digit-select">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <select name="digit-4" id="digit-4" className="digit-select">
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
                <div id="submit-container">
                    <button id="submit-number" onClick= {handleSubmit}>Submit</button>
                </div>
            </div>
            <div>
                <Result isCorrect={isCorrect} numCorrect={numCorrect} numTries={numTries}/>
            </div>
            
        </div>
    )
}

export default Main