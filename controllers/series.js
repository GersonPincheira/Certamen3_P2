var mongoose =require('mongoose');
var Serie = mongoose.model('Serie');

//Post Insertar usuario
exports.add = function(req,res){
	console.log('GET');
	console.log(req.query);

	var serie = new Serie ({
		showTitle: req.query.showTitle
	});

	serie.save(function(err,serie){
		if(err) return res.send(500,err.message);
		res.status(200).jsonp(serie);
	});
};


//GET - Retornar todos los registros
exports.findAll = function(req, res) {
  Serie.find(function(err, serie) {
    if(err) res.send(500, err.message);
    res.status(200).jsonp(serie);
  });
};