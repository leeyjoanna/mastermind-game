import { useState } from 'react'

function Customize({difficulty, setDifficulty}) {
    const [ theme, setTheme ] = useState('classic')

    const handleSelectTheme = (e) => {
        setTheme(e.target.value)
        switch(e.target.value){
            case "classic":
                console.log('classic')
                document.getElementById('App').className = "classic-theme";
                break
            case "night":
                console.log('night')
                document.getElementById('App').className = "night-theme";
                break
            case "throwback":
                console.log('throwback')
                document.getElementById('App').className = "throwback-theme";
                break
            default: 
                console.log('default')
                document.getElementById('App').className = "classic-theme";
        }
        return false
    }

    const handleSelectDifficulty = (e) => {
        setDifficulty(parseInt(e.target.value))
        return false
    }
    
    return(
        <div id="customize-container">
            <div id="customize-title">Customizations</div>
            <div id="theme-container">
                Theme:
                <div id="theme-input-container">
                    <div><input type="radio" name="classic" value="classic" checked={theme === "classic"} onChange={handleSelectTheme}/> Classic Blue</div>
                    <div><input type="radio" name="night" value="night" checked={theme === "night"} onChange={handleSelectTheme}/> Night time</div>
                    <div><input type="radio" name="throwback" value="throwback" checked={theme === "throwback"} onChange={handleSelectTheme}/> Throwback</div>
                </div>
            </div>
            <div id="difficulty-container">
                Difficulty:
                <div id="difficulty-input-container">
                    <div><input type="radio" name="easy" value="15" checked={difficulty === 15} onChange={handleSelectDifficulty}/> Easy (15 tries)</div>
                    <div><input type="radio" name="medium" value="10" checked={difficulty === 10} onChange={handleSelectDifficulty}/> Medium (10 tries)</div>
                    <div><input type="radio" name="hard" value="5" checked={difficulty === 5} onChange={handleSelectDifficulty}/> Hard (5 tries)</div>
                </div>
            </div>
        </div>
    )
}

export default Customize