let cl = angular.module('editTvShowsController', []);

cl.controller('editTvShowsController', ['$scope','$http', function($scope,$http) {
    $http.get('/tvshows').then(function(genresResponse) {
        $scope.tvshows = genresResponse.data;
    });
    $http.get('/genres').then(function(genresResponse) {
        $scope.genres = genresResponse.data;
    });
    
    $scope.deleteRecord=function(ev){
        $http.delete('/tvshows/'+$scope.tvshowToDeleteId)
        .success(function(response, status, headers, config){
        })
        .error(function(response, status, headers, config){
            $scope.error_message = response.error_message;
        });
    }
    
    $scope.updateRecord=function(){
        $http.put('/tvshows/'+$scope.tvshowToEditId,$scope.tvshowToEdit).
        success(function(data) {
            console.log("put successful");
        }).error(function(data) {
            console.error("error in put http request");
        })
        $scope.tvshowToEdit="";
    }
}]);