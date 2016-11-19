var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serieSchema = new Schema({
	showTitle:{ type: String}
});

module.exports =mongoose.model('Serie',serieSchema);