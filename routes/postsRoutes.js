import express from 'express';
import { index } from '../controllers/functionPosts.js';

//creo il mio router e lo esporto 
const postsRouter = express.Router();

//route index
postsRouter.get('/', index);

export default postsRouter;