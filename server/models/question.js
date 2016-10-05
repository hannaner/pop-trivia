var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({

	question: String,
	answer: String,
	fake1: String,
	fake2: String,
	created: {type: Date, default: new Date}

});

mongoose.model('Question', QuestionSchema);

QuestionSchema.path('question').required(true, 'Must enter a question');
QuestionSchema.path('answer').required(true, 'You gotta have an answer to the question!');
QuestionSchema.path('fake1').required(true, 'Field cannot be blank!');
QuestionSchema.path('fake2').required(true, 'Field cannot be blank!');