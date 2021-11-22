import { useState } from 'react'

function Track({numTries, logNumCorrect, logTries}) {
    const [ showDisplay, setShowDisplay ] = useState(false)
    return(
        <div id="track-container">
            <div id="attempts-button-container">
                <button id="attempts-button" onClick={() => setShowDisplay((s) => !s)}>See past attempts</button>
            </div>
            <div id="attempts-container" style={{ display: showDisplay ? "flex" : "none" }}>
                <div className="attempt-log">{logNumCorrect.map((log, idx) => (<div key={idx}>{log} correct digit(s) </div>))}</div>
                <div className="attempt-log">{logTries.map((log, idx) => (<div key={idx}> {log}</div>))}</div>
            </div>
        </div>
    )
}

export default Track