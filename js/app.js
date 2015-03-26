var myApp = angular.module('cardsGame', [
  'ngRoute',
  'cardsGameControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/start', {
    templateUrl: 'partials/start.html',
    controller: 'startCtrl'
  })
  .when('/game', {
    templateUrl: 'partials/game.html',
    controller: 'gameCtrl'
  })
  .otherwise({
    redirectTo: '/game'
  });
}]);