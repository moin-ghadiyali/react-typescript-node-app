import AuthController, { authController } from '../controllers/auth.controller';
import {Express} from 'express';
import { userInfo } from 'os';

export default class AuthRoute {
    userAuth(app: Express) {
        app.post('/v1/auth', authController.userAuthCreate);
    }

    userInfo(app: Express) {
        app.get('/v1/auth', authController.userInfo);
    }

    userLogin(app: Express) {
        app.post('/v1/login', authController.userAuthLogin)
    }

    verifyToken(app: Express) {
        app.post('/v1/verifytoken', authController.verifyToken)
    }

    authRoute(app: Express) {
        this.userAuth(app);
        this.userInfo(app);
        this.userLogin(app);
        this.verifyToken(app);
    }
}