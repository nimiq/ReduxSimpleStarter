// Library to make XHR request from the browser. Exactly like the ajax method
//  of jQuery, but in a lighter library.
import axios from 'axios';
// Key from: openweathermap.org
const API_KEY = '19ada413e53708602034aa72e938ebb9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log('Request: ', request); // A promise.

    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}
