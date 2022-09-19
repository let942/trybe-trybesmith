import express from 'express';
import LoginController from '../controllers/login.controller';

const loginRoute = express.Router();

loginRoute.post('/', LoginController.getLogin);

export default loginRoute;