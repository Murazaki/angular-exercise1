var app = angular.module('angular-exercise1', ['ngAnimate']);

app.controller('AppCtrl', function($scope) {
    
    console.log("Loading controller AppCtrl");
    
    $scope.newTask = ""; // variable contenant la valeur du champ input (grâce à ng-model) 
  
    $scope.tasklist = []; // initialisation de la liste de tâche
  
    $scope.addTask = function() {
      // On crée une nouvelle tâche de nom newTask (ce qui a été tapé dans l'input text)
      var task = { name: $scope.newTask, done: false };
      
      $scope.tasklist.push(task); // On ajoute la nouvelle tâche dans la liste de tâche
      
      $scope.newTask = "";  // On efface le champ input
    }
    
    $scope.removeTask = function(index) {
      // On vérifie que l'index est bien dans les valeurs autorisées (0 <= index < taille de la liste)
      if((index >= 0) && (index < $scope.tasklist.length)) {
        $scope.tasklist.splice(index,1);
      }
    }
    
    // La fonction markAsDone change l'état done de la tâche
    $scope.markAsDone = function(index) {
      // On vérifie que l'index est bien dans les valeurs autorisées (0 <= index < taille de la liste)
      if((index >= 0) && (index < $scope.tasklist.length)) {
        // ici on assigne NON done à done (passe de vrai à faux, ou de faux à vrai)
        $scope.tasklist[index].done = !$scope.tasklist[index].done;
      }
    }
});