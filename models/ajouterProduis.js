const mongoose =require('mongoose')
const PicturesSchema = new mongoose.Schema({
    file_path: {
      type: String,
      default: "",
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    size: {
      type: Number,
      default: 0, 
    },
    file_name: {
      type: String,
      default: "",
    },
  });

const enregistrement= new mongoose.Schema({
    img:{
        type:PicturesSchema,
        default:""
    },
    nomProduits:{
        type:String,
        default:""
    },
    PU:{
        type:Number,
        default:""
    },
    quatité:{
        type:Number,
        default:""
    },
})

const ajoutProduits = mongoose.model('ajoutProduits',enregistrement)

module.exports = ajoutProduits 