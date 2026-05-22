import express from 'express';
import postsRouter from './routes/posts-routes';

const app = express();
const port = process.env.NUMBER_PORT || 3000;

app.use('/posts', postsRouter)



app.listen(port, (error => {
    if (error) {
        console.error(error);
    } else {
        console.log(`sei in ascolto sulla porta ${port}`)
    }
}));