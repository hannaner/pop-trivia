var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Score = mongoose.model('Score');

module.exports = (function(){
	return{

		create: function(req, res){
			var question = new Question({question: req.body.question, answer: req.body.answer, fake1: req.body.fake1, fake2: req.body.fake2});
			question.save(function (err, results){
				if (err){
					console.log(err);
				} else {
					res.send("Successfully added a question!");
				}
			})
		},

		show: function(req, res){
			Question.find({}, function (err, results){
				if (err){
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},


	}
})();

