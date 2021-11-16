import axios from 'axios'

const getRand = (number) => {
    const request = axios.get('https://www.random.org/integers/', { params: { num: number, min: 0, max: 7, col: 1, base: 10, format: 'plain', rand: 'new' } })
    return request.then(response => response.data)
}

export default {getRand}