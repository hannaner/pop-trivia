var users = require('./../controllers/users.js');
var questions = require('./../controllers/questions.js');
var scores = require('./../controllers/scores.js');

module.exports = function(app){
// create routes here
	app.post('/login', function (req, res){
		users.create(req, res);
	});

// create question 
	app.post('/add_question', function (req, res){
		questions.create(req, res);
	});

// show questions
	app.get('/questions', function (req, res){
		questions.show(req, res);
	});

	app.get('/users', function (req, res){
		users.show(req, res);
	})

}