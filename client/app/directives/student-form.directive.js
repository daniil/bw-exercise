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

StudentFormCtrl.$inject = ['$scope', '$element', '$attrs', '$transclude', 'bwExerciseDataService'];

function StudentFormCtrl($scope, $element, $attrs, $transclude, bwExerciseDataService) {
    var vm = this;
    vm.students = bwExerciseDataService.students;
    vm.addStudent = addStudent;

    initStudentModel();

    function initStudentModel() {
      vm.studentModel = {
        firstName: '',
        lastName: '',
        grade: 0,
        comment: ''
      };
    }

    function addStudent() {
      bwExerciseDataService.addStudent(vm.studentModel);
      initStudentModel();
    }
}
