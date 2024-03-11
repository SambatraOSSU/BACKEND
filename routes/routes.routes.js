const express = require('express')
const router = express.Router()
const controller = require('../controllers/controlleurs')

router.post('/login',controller.postLogin)   
router.post('/ajout',controller.ajoutDesProdutis)
module.exports = router;    
