let ctl = angular.module('viewTvShowsController', []);

ctl.controller('viewTvShowsController', ['$scope','$http', function($scope,$http) {
    $scope.readTvShows=function(){
        $http.get('/tvshows').then(function(tvshowsResponse) {
            $scope.tvshows = tvshowsResponse.data;
        });
    }
    
    $scope.readGenres=function(){
        $http.get('/genres').then(function(genresResponse) {
            $scope.genres = genresResponse.data;
        });
    }

    
}]);