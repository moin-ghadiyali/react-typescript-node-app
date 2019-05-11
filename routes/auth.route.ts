import AuthController, { authController } from '../controllers/auth.controller';
import {Express} from 'express';

export default class AuthRoute {
    userAuth(app: Express) {
        app.post('/v1/auth', authController.userAuth);
    }

    authRoute(app: Express) {
        this.userAuth(app);
    }
}