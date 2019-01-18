import axios from 'axios';

const KEY = 'AIzaSyCUhLDf7jWd6po0PvbLC3J81878Ymzl4ZE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY,
        type: ''
    }
});