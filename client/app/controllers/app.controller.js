(function() {
  'use strict';

  angular
    .module('bwExerciseApp')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', 'bwExerciseDataService'];

  function AppCtrl($scope, bwExerciseDataService) {
    /*jshint validthis: true */
    var vm = this;
    vm.undoHistory = bwExerciseDataService.undoHistory;
    vm.undo = bwExerciseDataService.undo;

    activate();

    function activate() {
      vm.students = bwExerciseDataService.students;
    }
  }
})();
