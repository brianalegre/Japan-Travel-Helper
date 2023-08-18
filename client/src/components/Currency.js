// Import React
import React from 'react';
import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://currency-converter5.p.rapidapi.com/currency/convert',
    params: {
        format: 'json',
        from: 'AUD',
        to: 'CAD',
        amount: '1'
    },
    headers: {
        'X-RapidAPI-Key': '445fda8cf1msh70da80e5f525233p18eca4jsn9bcc56577356',
        'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
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