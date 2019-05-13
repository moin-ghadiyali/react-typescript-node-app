import AuthController, { authController } from '../controllers/auth.controller';
import {Express} from 'express';
import { userInfo } from 'os';

export default class AuthRoute {
    userAuth(app: Express) {
        app.post('/v1/auth', authController.userAuth);
    }

    userInfo(app: Express) {
        app.get('/v1/auth', authController.userInfo);
    }

    authRoute(app: Express) {
        this.userAuth(app);
        this.userInfo(app);
    }
}