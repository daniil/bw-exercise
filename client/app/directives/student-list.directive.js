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

StudentListCtrl.$inject = ['$scope', '$element', '$attrs', '$transclude', 'bwExerciseDataService'];

function StudentListCtrl($scope, $element, $attrs, $transclude, bwExerciseDataService) {
    var vm = this;
    vm.students = bwExerciseDataService.students;
}
