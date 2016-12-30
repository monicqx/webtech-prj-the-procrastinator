var app=angular.module("myApp", ['ngRoute','viewTvShowsController','addTvShowController','editTvShowsController']);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/addTvShow', {
      templateUrl: 'views/addTvShow.html', controller: 'addTvShowController'
   }).
   
   when('/viewTvShow', {
      templateUrl: 'views/viewTvShows.html', controller: 'viewTvShowsController'
   }).
   
   when('/home',{
      templateUrl: 'views/home.html'
   }).
   
   when('/editTvShows',{
      templateUrl: 'views/editTvShows.html', controller: 'editTvShowsController'
   }).

   otherwise({
       redirectTo: '/home'
   });
	
}]);