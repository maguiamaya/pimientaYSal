var express = require('express');
var router = express.Router();


const { index, detail } = require('../controllers/mainController')
/* GET home page. */
router.get('/',index) 
router.get('/detalle/:id', detail)  // :id rutas parametrisadas. con ?es optativo- detail es un metodo q se detalla en main controller 


module.exports = router;
