import express from 'express';
import productsRoute from './routes/products.routes';
import usersRoute from './routes/users.routes';
import ordersRoute from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);

export default app;
