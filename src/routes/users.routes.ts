import express from 'express';
import UsersController from '../controllers/users.controller';
import {
  userValidationUsername,
  userValidationClasse,
  userValidationLevel,
  userValidationPassword,
} from '../middlewares/userValidation';

const usersRoute = express.Router();

usersRoute.post(
  '/',
  userValidationUsername,
  userValidationClasse,
  userValidationLevel,
  userValidationPassword,
  UsersController.create,
);

export default usersRoute;