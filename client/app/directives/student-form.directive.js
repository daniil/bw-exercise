(function() {
  'use strict';

  angular
      .module('bwExerciseApp')
      .directive('bwStudentForm', bwStudentForm);

  function bwStudentForm() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'app/directives/student-form.directive.tpl.html',
          scope: {},
          controller: StudentFormCtrl,
          controllerAs: 'vm',
          bindToController: true
      };

      return directive;
  }

  StudentFormCtrl.$inject = ['$scope', '$element', '$attrs', '$transclude', '$timeout', 'bwExerciseDataService'];

  function StudentFormCtrl($scope, $element, $attrs, $transclude, $timeout, bwExerciseDataService) {
      var vm = this;
      vm.studentModel = {};
      vm.addStudent = addStudent;

      function addStudent(studentForm) {
        if (studentForm.$valid) {
          bwExerciseDataService.addStudent(vm.studentModel);
          $timeout(function() {
            vm.studentModel = {};
            studentForm.$setPristine();
            studentForm.$setUntouched();
          });
        }
      }
  }
})();
