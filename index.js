// index.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper Functions
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
};

const isArmstrong = (num) => {
    const digits = num.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === num;
};

const getDigitSum = (num) => {
    return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
};

const getProperties = (num) => {
    let properties = [];
    if (isArmstrong(num)) properties.push('armstrong');
    properties.push(num % 2 === 0 ? 'even' : 'odd');
    return properties;
};

// API Route
app.get('/api/classify-number', async (req, res) => {
    const { number } = req.query;

    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number);

    try {
        const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
        const fun_fact = funFactResponse.data.text;

        res.status(200).json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: getProperties(num),
            digit_sum: getDigitSum(num),
            fun_fact: fun_fact
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch fun fact' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
