import express from 'express';
import morgan from 'morgan';
import productRouter from './routes/products.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { initMongoDB } from './daos/mongodb/connection.js';

const persistence = 'MONGO';
const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRouter);
app.use(errorHandler);

if(persistence === 'MONGO') await initMongoDB();

app.listen(
    PORT, () => {console.log(`Server up on PORT: ${PORT}`)}
);
