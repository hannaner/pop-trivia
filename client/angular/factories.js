// USER FACTORY
myApp.factory('userFactory', function ($http){
	var factory = {};
	var users = [];
	var current_user;

	// add new user when he/she logs in
	factory.addUser = function(info, callback){
		$http.post('/login', info).success(function (output){
			// console.log(output);
			current_user = output.name;
			callback(current_user);
		})
	}

	factory.getCurrentUser = function(callback){
		callback(current_user);
	}

	factory.getUsers = function(callback){
		$http.get('/users').success(function (output){
			callback(output);
		})
	}

	return factory;

});

// QUESTION FACTORY
myApp.factory('questionFactory', function($http){
	var factory = {};

	factory.addQuestion = function (info, callback){
		$http.post('/add_question', info).success(function (output){
			// message = "You have successfully added a question!";
			callback(output);
		})
	}

	factory.getQuestions = function(callback){
		$http.get('/questions').success(function (output){
			callback(output);
		})
	}

	return factory;
});

