const auth = require('../models/login')
const ajoutProduits = require('../models/ajouterProduis')

const ajoutDesProdutis = async (req,res)=>{
    const ajout = new ajoutProduits(req.body)
        await ajout.save()
}
const postLogin = async (req,res)=>{
    const log = new auth (req.body)
        await ajout.save()
}

module.exports  = {ajoutDesProdutis,postLogin}