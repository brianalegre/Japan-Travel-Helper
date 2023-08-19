// Import React
import React from 'react';
import axios from 'axios';

// Import API key
const CURRENCY_API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;
const CURRENCY_API_HOST = process.env.REACT_APP_CURRENCY_API_HOST;


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

export default function Currency() {
    return (
        <div>
            <h1 className='text-red-500 font-bold'>JAPAN</h1>
            <h2 className='text-blue-500 font-bold'>Currency</h2>
        </div>
    )
}