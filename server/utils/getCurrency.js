const axios = require('axios');
const dotenv = require('dotenv');

// Import API key
const currencyAPI = `${process.env.CURRENCY_API_KEY}`;
const currncyHost = `${process.env.CURRENCY_API_HOST}`;


async function fetchCurrency() {

    const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/exchange',
        params: {
            from: 'JPY',
            to: 'USD',
            q: '1.0'
        },
        headers: {
            'X-RapidAPI-Key': currencyAPI,
            'X-RapidAPI-Host': currncyHost

        }
    };

    try {
        const response = await axios.request(options);
        const responseData = response.data;
        let formattedResponse = responseData.toFixed(4);
        return "1 JPY = " + formattedResponse + " USD";

    } catch (error) {
        return "Error fetching currency data: " + error.message + currencyAPI;
    }
}

module.exports = fetchCurrency;


