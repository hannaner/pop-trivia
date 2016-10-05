var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Score = mongoose.model('Score');

module.exports = (function(){
	return{

		create: function (req, res){
			var user = new User({name: req.body.name});
			user.save(function (err, results){
				if (err){
					console.log("Could not create user");
				} else {
					res.json(results);
				}
			})
		},

		show: function (req, res){
			User.find({}, function (err, results){
				if (err){
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},


	}

})();