import getWheater from './Components/WeatherData';

describe('trying to fetch WeatherData',()=>{
    test('Should fetch Weather Data based on  location',()=>{
        const output ={
            'getWeather': !null
        };
        expect(getWheater).toEqual(output);
    })
})