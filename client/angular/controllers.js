
myApp.controller('usersController', function (userFactory, $scope, $location, $routeParams){

	// userFactory.getUsers(function (data){
	// 	$scope.users = data;
	// });

	$scope.addUser = function (){
		// console.log($scope.new_user)
		userFactory.addUser($scope.new_user, function (data){

			$location.path('/main');
		});
	}

});


// main page - shows scoreboard, start to play game
myApp.controller('scoreboardController', function ($scope, userFactory, questionFactory, $routeParams, $location){

	$scope.current_user;

	userFactory.getUsers(function (data){
		$scope.users = data;
	})

	userFactory.getCurrentUser(function (current_user){
		$scope.current_user = current_user;
		// console.log($scope.current_user);
	})
	

});


// create a question
myApp.controller('questionsController', function ($scope, userFactory, questionFactory, $routeParams, $location){

	$scope.addQuestion = function (){
		// console.log($scope.new_question);
		questionFactory.addQuestion($scope.new_question, function (data){
			$location.path('/main');
		})
	}

});


// play trivia game
myApp.controller('gameController', function ($scope, userFactory, questionFactory, $routeParams, $location){

	$scope.current_user;


	userFactory.getCurrentUser(function (data){
		$scope.current_user = data;
		// console.log($scope.current_user);
	})


	questionFactory.getQuestions(function (data){
		// fisher-yates shuffle method
		function shuffle(arr){
			var currentIndex = arr.length, tempValue, randomIndex;

			while (0 !== currentIndex){
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				tempValue = arr[currentIndex];
				arr[currentIndex] = arr[randomIndex];
				arr[randomIndex] = tempValue;
			}
			return arr;
		}
		console.log('this is data', data);
		var data;
		shuffle(data);
		$scope.questions = data;
	})

});



