var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	score: Number
	// percentage??

});

mongoose.model('Score', ScoreSchema)