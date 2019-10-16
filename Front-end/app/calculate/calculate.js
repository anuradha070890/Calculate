'use strict';

angular.module('myApp.calculate', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/calculate', {
    templateUrl: 'calculate/calculate.html',
    controller: 'calculateCtrl'
  });
}])

.controller('calculateCtrl', ['$scope','$http',function($scope ,$http) {
  $http(
    {
      method : "GET",
        url : "http://localhost:3000/getData"
    }
  )
  .then(function(response){
    console.log("response"+JSON.stringify(response))

    $scope.Num1=response.data[0].div1;
    $scope.Num2=response.data[0].div2;
    $scope.mul=response.data[0].result;
  })
    console.log("constroller");
     $scope.flag1=true;  $scope.flag2=true; $scope.buttonFlag=true; 
  $scope.change1 = function (num){
      if(num >=0) {  $scope.flag1 = true}
      else {  $scope.flag1 = false}
      if($scope.flag1 && $scope.flag2){ $scope.buttonFlag = false}
      else {$scope.buttonFlag = true }
  }
  $scope.change2 = function (num){
    if(num >=0) {  $scope.flag2 = true}
    else {  $scope.flag2 = false}
    if($scope.flag1 && $scope.flag2){ $scope.buttonFlag = false}
    else {$scope.buttonFlag = true }
}


    $scope.multiply = function (num1,num2) {
      $scope.mul = parseInt(num1) * parseInt(num2);
      $http({
        method: 'POST',
        url:'http://localhost:3000/saveData',
        data: {
          div1: $scope.Num1,
          div2: $scope.Num2,
          result:$scope.mul
      },
      })
    
      return $scope.mul 
   
  }
  
}]);