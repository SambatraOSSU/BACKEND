const mongoose =require('mongoose')


const login= new mongoose.Schema({
    nom:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    mdp:{
        type:String,
        default:""
    },
})
const auth = mongoose.model('auth',login)
module.exports = auth;