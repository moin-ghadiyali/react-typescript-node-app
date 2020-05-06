import Auth from '../models/auth.model';
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt')

export default class AuthController {
    usernameCheck(req: any, res: any) {
        Auth.find({ 'username': req.body.username }, (error: any, result: any) => {
            var rest = Buffer.from(result);
            var len = rest.length;
            if (error) {
                res.send({
                    message: "Record Error!",
                    error: error
                })
            } else if (len > 0) {
                res.send({
                    message: "Username already taken",
                    result: result
                })
            }
        })
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
            } else if (len > 0) {
                res.send({
                    message: "Phone already Registered",
                    result: result
                })
            } else {
                bcrypt.hash(req.body.password, 10, (error: any, hash: any) => {
                    if (error) {
                        throw error;
                    } else {
                        var userPass = hash;
                        const schema: any = {
                            username: req.body.username,
                            password: userPass,
                            fullname: req.body.fullname,
                            phone: req.body.phone
                        }
                        Auth.create(schema, (error: any, resultUser: any) => {
                            if (error) {
                                res.send({
                                    message: 'Error',
                                    error: error
                                })
                            } else {
                                const jwtSchema = {
                                    id: resultUser._id,
                                    username: resultUser.username,
                                    fullname: resultUser.fullname,
                                    phone: resultUser.phone,
                                    password: resultUser.password,
                                }
                                jwt.sign(jwtSchema, 'moin1234', (error: any, result: any) => {
                                    if (error) throw error;
                                    res.send({
                                        message: 'User Created',
                                        token: result,
                                        user: resultUser
                                    })
                                })
                            }
                        })
                    }
                })
            }
        })
    }

    userAuthLogin(req: any, res: any) {
        Auth.findOne({ 'username': req.body.username }, (error: any, result: any) => {
            if (error) {
                res.send({
                    message: 'Error',
                    error: error
                })
            } else {
                bcrypt.compare(req.body.password, result.password, (error: any, match: any) => {
                    if (error) throw error;
                    if (match) {
                        const jwtSchema = {
                            id: result._id,
                            username: result.username,
                            fullname: result.fullname,
                            phone: result.phone,
                            email: result.email,
                            password: result.password,
                            profileImage: result.profileImage,
                            followersCount: result.followersCount,
                            followingCount: result.followingCount,
                            postCount: result.postCount,
                            bio: result.bio
                        }
                        jwt.sign(jwtSchema, 'moin1234', (error: any, token: any) => {
                            if (error) throw error;
                            res.send({
                                message: 'User Logged In',
                                token: token,
                                user: result
                            })
                        })
                    } else {
                        res.send({
                            message: 'Invalid Credentials'
                        })
                    }
                }
                )
            }
        })
    }

    verifyToken(req: any, res: any) {
        var token = req.headers.token;
        if (!token) {
            res.send({
                message: 'No Token Found'
            })
        } else {
            jwt.verify(token, 'moin1234', (error: any, decoded: any) => {
                if (error) throw error;
                res.send({
                    message: 'Decoded',
                    decoded: decoded
                })
            })
        }
    }

    userInfo(req: any, res: any, next: any) {
        Auth.find({}, (error: any, result: any) => {
            if (error) {
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