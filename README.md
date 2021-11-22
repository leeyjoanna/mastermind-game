# Mastermind Game
[Play on Heroku!](https://jojo-mastermind.herokuapp.com/) 

## Gameplay

User plays against computer to try and guess combination of randomly generated digits between 0-7.\
Feedback provided: number of correct digits, number of tries.\
Optional feedback: log of each attempt and number of correct digits.

## Customizations

Themes:
*This is done using CSS variables tied to themed classNames*
* classic- clean light blue displays
* night mode- contrast mode with dark background and light font
* throwback- a simple homage to old Myspace layouts 


Difficulty:
* easy- allows users 15 attempts
* medium- allows users 10 attempts
* hard- allows users 5 attempts


## React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
`index.js` renders `App.js` which contains all of the components for this game.\
Component breakdown:
* `<Header/>`: title, description
* `<Main/>`: contains game play components 
    * `<Result/>`: prints correct number of digits and number of tries after each attempt, win message, or loss message
    * `<Track/>`: contains a button that toggles `<div>` of logged attempts (correct number of digits and attempt #)
    * `<Customize/>`: contains radio buttons to customize theme (CSS) or difficulty (# attempts allowed)

### State management
`useEffect()` called once game first renders and makes calls to API to get 4 random digits.\

Game utilizes states to track game play logistics including:
* API generated 'computer' number
* Log of user's attempts and number of correct digits each time
* Counter of attempts since most recent submission
* Counter of number of correct digit for most recent submission
* Boolean if user has guessed all correct digits
* Number of max attempts related to difficulty 


### API integration

`Axios` via `services` folder used to call to random generator API (https://www.random.org/clients/http/api/.\
Generated random numbers via GET and these parameters: 

| URL parameter | Value | Purpose |
| --- | --- | --- |
| num           | 4     | Number of integers requested |
| min           | 0     | The smallest value returned  |
| max           | 7     | The largest value returned |
| col           | 1     | Num of columns used to display the returned values |
| base          | 10    | Use base 10 system |
| format        | plain | Returns response in a plain text. Generate a new random numbers |
| rnd           | new   | Generate a new random numbers |

### Deployed to Heroku

With a simple `Node.js` backend, this game is deployed to Heroku.\
Depending on website activity, it may take some time to load the game due to free-tier account status.

