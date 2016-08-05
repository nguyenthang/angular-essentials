var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var carSchema = new Schema({	
	plate: {type: String},
	color: {type: String},
	entrance: {type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Car', carSchema);