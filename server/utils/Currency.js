const axios = require('axios');

// Import API key
const CURRENCY_API_KEY = process.env.CURRENCY_API_KEY;
const CURRENCY_API_HOST = process.env.CURRENCY_API_HOST;


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
            'X-RapidAPI-Key': CURRENCY_API_KEY,
            'X-RapidAPI-Host': CURRENCY_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        const responseData = response.data;
        let formattedResponse = responseData.toFixed(4);
        console.log("1 JPY =", formattedResponse, "USD");

    } catch (error) {
        console.error(error);
    }
}

module.exports = fetchCurrency;


