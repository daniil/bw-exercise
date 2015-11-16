(function() {
  'use strict';

  angular
    .module('bwExerciseApp')
    .factory('bwExerciseDataService', bwExerciseDataService);

  function bwExerciseDataService() {
    var students = [
      {
        firstName: 'Johnny',
        lastName: 'Appleseed',
        grade: 50,
        comment: ''
      }
    ];

    var service = {
      students: students,
      addStudent: addStudent,
      removeStudent: removeStudent
    };

    return service;

    function addStudent(model) {
      students.push(angular.copy(model));
    }

    function removeStudent(student) {
      students.splice(students.indexOf(student), 1);
    }
  }
  })();
