const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/forecast.json?key=d42660b033e44bf1b36153923222903&q=' + latitude + ',' + longitude;
    request({ url, json: true }, (error, { body }) => {
        console.log(body);
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.location.name + ' It is currently ' + body.current.temp_c + ' degress out. there is a ' + body.current.precip_mm + ' % chance of rain.')
        }
    })
}

module.exports = forecast