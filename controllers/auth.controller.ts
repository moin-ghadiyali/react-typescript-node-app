import Auth from '../models/auth.model';

export default class AuthController {
    userAuth(req:any, res:any, next:any) {
        const schema = {
            userName: req.body.userName,
            email: req.body.email
        }

    userAuthCreate(req: any, res: any, next: any) {
        Auth.find({ 'phone': req.body.phone }, (error: any, result: any) => {
            var rest = Buffer.from(result);
            var len = rest.length;
            if (error) {
                res.send({
                    message: "Record Error!",
                    error: error
                })
            } else {
                res.send({
                    message: "Record Created!",
                    result: result
                })
            }
        })
    }

    userInfo(req:any, res:any, next:any) {
        Auth.find({}, (error:any, result:any) => {
            if(error) {
                res.send({
                    message: "Record Error!",
                    result: error
                })
            } else {
                res.send({
                    message: "Record Created!",
                    result: result
                })
            }
        })
    }
}

export const authController = new AuthController();