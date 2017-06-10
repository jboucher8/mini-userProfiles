angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.getUsers = function() {
    	$scope.users = mainService.getUsers();
    }

    $scope.getUsers();

    $scope.toggleFavorite = mainService.toggleFavorite;
    // $scope.toggleFavorite = function(userId) {
    // 	mainService.toggleFavorite;
    // }
})