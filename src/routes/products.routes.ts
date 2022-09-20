import express from 'express';
import ProductsController from '../controllers/products.controller';
import { productValidationName, productValidationAmount } from '../middlewares/productValidation';

const productsRoute = express.Router();

productsRoute.post('/', productValidationName, productValidationAmount, ProductsController.create);
productsRoute.get('/', ProductsController.getAll);

export default productsRoute;