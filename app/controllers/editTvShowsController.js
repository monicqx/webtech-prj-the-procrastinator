let cl = angular.module('editTvShowsController', []);

cl.controller('editTvShowsController', ['$scope','$http', function($scope,$http) {
    $scope.showParagraph=false;
    
    $http.get('/tvshows').then(function(genresResponse) {
        $scope.tvshows = genresResponse.data;
    });
    $http.get('/genres').then(function(genresResponse) {
        $scope.genres = genresResponse.data;
    });
    
    $scope.getTvShowDetails=function(tvshowId){
        $http.get('/tvshows/'+tvshowId).then(function(genresResponse) {
            $scope.tvshowToDelete = genresResponse.data;
            $scope.showParagraph=true;
        });
    }
    
    $scope.deleteRecord=function(){
        $http.delete('/tvshows/'+$scope.tvshowToDeleteId)
        .success(function(response, status, headers, config){
             $scope.showParagraph=false;
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