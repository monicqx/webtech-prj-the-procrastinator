let ctrl = angular.module('addTvShowController', []);

ctrl.directive('myDirective', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) { //mCtrl is the ngModelController,
      function myValidation(value) {
        if (angular.equals(value.charAt(0),value.charAt(0).toUpperCase())) {
          mCtrl.$setValidity('charUp', true);
        } else {
          mCtrl.$setValidity('charUp', false);
        }
        return value;
      }
      mCtrl.$parsers.push(myValidation);
    }
  };
});

ctrl.controller('addTvShowController', ['$scope','$http', function($scope,$http) {
    $scope.tvshow;
    
    $http.get('/genres').then(function(genresResponse) {
            $scope.genres = genresResponse.data;
    });
    
    $scope.submitRecord=function(){
        $http.post('/tvshows',$scope.tvshow).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        })
        
        $scope.tvshow="";
    }
}]);