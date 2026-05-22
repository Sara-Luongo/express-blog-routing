import express from 'express';

const app = express();
const NUMBER_PORT = process.env.NUMBER_PORT;






app.listen(NUMBER_PORT, (error => {
    if (error) {
        console.error(error);
    } else {
        console.log('sei in ascolto sulla porta 3000')
    }
}));