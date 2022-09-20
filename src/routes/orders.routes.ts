import express from 'express';
import OrdersController from '../controllers/orders.controller';
import tokenValidation from '../middlewares/tokenValidation';
import orderValidation from '../middlewares/orderValidation';

const ordersRoute = express.Router();

ordersRoute.get('/', OrdersController.getAll);
ordersRoute.post('/', tokenValidation, orderValidation, OrdersController.create);

export default ordersRoute;