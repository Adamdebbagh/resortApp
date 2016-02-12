angular.module('App', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home/home.html'
      })
      .state('reservation',{
        url:'/reservation',
        templateUrl:'views/reservation/reservation.html',
        controller:'ReservationController'
      })
      .state('weather',{
        url:'/weather',
        templateUrl:'views/weather/weather.html',
        controller:'WeatherController'
      })
      .state('restaurants', {
        url: '/restaurants',
        controller: 'RestaurantsController',
        templateUrl: 'views/restaurants/restaurants.html'
      });
    ;

    $urlRouterProvider.otherwise('/home');

  })
;

