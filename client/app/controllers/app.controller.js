(function() {
  'use strict';

  angular
    .module('bwExerciseApp')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', 'bwExerciseDataService'];

  function AppCtrl($scope, bwExerciseDataService) {
    /*jshint validthis: true */
    var vm = this;

    activate();

    function activate() {
      vm.students = bwExerciseDataService.students;
    }
  }
})();
