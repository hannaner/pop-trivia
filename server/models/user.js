var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: String,
	created: {type: Date, default: new Date},
	scores: [{type: Schema.Types.ObjectId, ref: 'Score'}]

});

mongoose.model('User', UserSchema);