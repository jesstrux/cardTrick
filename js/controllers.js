var cardsGameControllers = angular.module('cardsGameControllers', ['ngAnimate']);

cardsGameControllers.controller('startCtrl', ['$scope', '$http', function($scope, $http) {
  
}]);

cardsGameControllers.controller('gameCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('js/cards.json').success(function(data){
  	$scope.cardsCol1 = shuffle(data);
  	$scope.loading = false;
  	$scope.rounds = ['roundOne','roundTwo','roundThree'];
    $scope.roundCount = $scope.rounds[0];
    $scope.theCard;

    $scope.switchRounds = function(to){
    	$('.overlay').fadeIn(10);
    	$scope.roundCount = $scope.rounds[to];

    	setTimeout(function() {
    		$('.overlay').fadeOut(1000);
    	}, 2000);    	

    	$scope.roundCount = $scope.rounds[to];
    }

  	function shuffle(array){
	  var counter = array.length, temp, index;
	  while (counter > 0) {
	      index = Math.floor(Math.random() * counter);
	      counter--;
	      temp = array[counter];
	      array[counter] = array[index];
	      array[index] = temp;
	  }
	  return array;
	}
  });
}]);