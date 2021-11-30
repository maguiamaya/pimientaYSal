const platos = require('../data/platos_db');


module.exports = {
  index: (req, res) => {

    return res.render('index', {
      platos: platos,
    });
  },
  detail: (req, res) => {

    let id = req.params.id;

    let plato = platos.find(plato => plato.id === +id)

   

    return res.render('detalleMenu',{
        plato
    });
  }
}