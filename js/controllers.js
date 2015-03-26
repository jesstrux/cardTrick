var cardsGameControllers = angular.module('cardsGameControllers', ['ngAnimate']);

cardsGameControllers.controller('startCtrl', ['$scope', '$http', function($scope, $http) {
  
}]);

cardsGameControllers.controller('gameCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('js/allcards.json').success(function(data){
  	$scope.cardsCol1 = shuffle(data);
  	$scope.loading = false;
  	$scope.rounds = ['roundOne','roundTwo','roundThree'];
    $scope.roundCount = $scope.rounds[0];
    $scope.theCard;

    $scope.switchToRoundOne = function(round,row){    	
    	$scope.rowOne = parseInt(row);

    	$('.overlay').fadeIn(10);
    	setTimeout(function() {
    		$('.overlay').fadeOut(100);
    	}, 1000);    	
    	
    	$scope.roundCount = $scope.rounds[1];
    }

    $scope.switchToRoundTwo = function(round,row){
    	$scope.rowTwo = parseInt(row);
    	
    	$scope.theCard = getCard($scope.rowOne,$scope.rowTwo);
        $scope.front = true;
    	$scope.roundCount = $scope.rounds[2];
    }

    $scope.switchCardFaces = function(){
        $scope.front = false;
        $scope.back = true;
    }

    function getCard(r1,r2){
    	var card;
    	if(r1 == 1 && r2 == 1){
    		card = 0
    	}
    	else if(r1 == 1 && r2 == 2)
    		{card = 1}
    	else if(r1 == 1 && r2 == 3)
    		{card = 2}
    	else if(r1 == 1 && r2 == 4)
    		{card = 3}
    	else if(r1 == 2 && r2 == 1)
    		{card = 4}
    	else if(r1 == 2 && r2 == 2)
    		{card = 5}
    	else if(r1 == 2 && r2 == 3)
    		{card = 6}
    	else if(r1 == 2 && r2 == 4)
    		{card = 7}
    	else if(r1 == 3 && r2 == 1)
    		{card = 8}
    	else if(r1 == 3 && r2 == 2)
    		{card = 9}
    	else if(r1 == 3 && r2 == 3)
    		{card = 10}
    	else if(r1 == 3 && r2 == 4)
    		{card = 11}
    	else if(r1 == 4 && r2 == 1)
    		{card = 12}
    	else if(r1 == 4 && r2 == 2)
    		{card = 13}
    	else if(r1 == 4 && r2 == 3)
    		{card = 14}
    	else if(r1 == 4 && r2 == 4)
    		{card = 15}
    	
    	return card;
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