import cors from 'cors';
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser';
import controlador from './controlador/route.js'

dotenv.config()
const app = express();
app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use( controlador)

const port = 5000;

app.listen(port, () => {
    console.log(`servidor abierto en el puerto ${port}`);
})