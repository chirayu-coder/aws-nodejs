import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Hello, ES6 with Node.js!');
});


app.get('/api/hello', (req, res) => {
    res.send('Hello, Chirayu from API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
