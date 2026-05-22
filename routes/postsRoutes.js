import express from 'express';
import { index, show } from '../controllers/functionPosts.js';

//creo il mio router e lo esporto 
const postsRouter = express.Router();

//route index
postsRouter.get('/', index);
//route show che mi restituisce il singolo elemento del mio json tramite id parametro che gli passo io 
postsRouter.get('/:id', show)

export default postsRouter;