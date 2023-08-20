const axios = require('axios');


async function getWeather() {

    const options = {
        method: 'GET',
        url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
            aggregateHours: '24',
            location: 'Washington,DC,USA',
            contentType: 'csv',
            unitGroup: 'us',
            shortColumnNames: '0'
        },
        headers: {
            'X-RapidAPI-Key': '445fda8cf1msh70da80e5f525233p18eca4jsn9bcc56577356',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return console.log(response.data);
    } catch (error) {
        return "Error getWeather data: " + error.message;;
    }
}

module.exports = getWeather;