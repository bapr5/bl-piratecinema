import express from 'express';
import { CINEMA_PORT, CINEMA_HOST, CINEMA_URL } from './consts.mjs';
import {buildFileIndex,fileIndex} from './file-index.mjs'
import cors from 'cors';

buildFileIndex();

const app = express();

app.use(cors({origin: CINEMA_URL}));

app.listen(CINEMA_PORT, CINEMA_HOST, () => {
    console.log(`Server running at http://${CINEMA_HOST}:${CINEMA_PORT}/`);
});


app.use('/movies',express.static('./movies'))

app.get('/available', (req, res) => {
    res.json(fileIndex);
})

app.get('/test', (req, res) => {
    res.send('Cinema is online.');
})