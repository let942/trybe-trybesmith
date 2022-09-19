import express from 'express';
import productsRoute from './routes/products.routes';
import usersRoute from './routes/users.routes';
import ordersRoute from './routes/orders.routes';
import loginRoute from './routes/login.routes';
import bodyLoginValidation from './middlewares/bodyLoginValidation';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);
app.use('/login', bodyLoginValidation, loginRoute);

export default app;
