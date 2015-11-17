(function() {
  'use strict';

  angular
      .module('bwExerciseApp')
      .directive('bwStudentList', bwStudentList);

  function bwStudentList() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'app/directives/student-list.directive.tpl.html',
          scope: {},
          controller: StudentListCtrl,
          controllerAs: 'vm',
          bindToController: true
      };

      return directive;
  }

  StudentListCtrl.$inject = ['$scope', '$element', '$attrs', '$transclude', '$window', 'bwExerciseDataService'];

  function StudentListCtrl($scope, $element, $attrs, $transclude, $window, bwExerciseDataService) {
      var vm = this;
      vm.students = bwExerciseDataService.students;
      vm.removeStudent = removeStudent;
      vm.toggleEditable = toggleEditable;

      function removeStudent(student) {
        var confirm = $window.confirm('Are you sure you want to delete ' + student.firstName + ' ' + student.lastName + '\'s record?');
        if (confirm) {
          bwExerciseDataService.removeStudent(student);
        }
      }

      function toggleEditable(student, field, state) {
        student.editableFields = student.editableFields || {};
        student.editableFields[field] = state;
      }
  }
})();
