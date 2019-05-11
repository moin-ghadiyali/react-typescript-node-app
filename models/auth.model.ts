const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    }
})

const Auth = mongoose.model('auth', authSchema);
export default Auth;