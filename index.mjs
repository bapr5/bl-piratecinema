import express from 'express';
import { CINEMA_PORT, CINEMA_HOST } from './consts.mjs';
import {buildFileIndex,fileIndex} from './file-index.mjs'

buildFileIndex();

const app = express();

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