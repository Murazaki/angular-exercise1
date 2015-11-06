var app = angular.module('angular-exercise1', []);

app.controller('AppCtrl', function($scope) {
    
    console.log("Loading controller AppCtrl");
    
    $scope.newTask = "";
  
    $scope.tasklist = [{ name: "Tache n°1", done: false },{ name: "Tache n°2", done: false }];
  
    $scope.addTask = function() {
      var task = { name: $scope.newTask, done: false };
      $scope.tasklist.push(task);
    }
});