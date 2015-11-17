(function() {
  'use strict';

  angular
    .module('bwExerciseApp')
    .factory('bwExerciseDataService', bwExerciseDataService);

  function bwExerciseDataService() {
    var undoHistory = [],
        students = [
          {
            id: generateTimestamp(),
            firstName: 'Johnny',
            lastName: 'Appleseed',
            grade: 50,
            comment: ''
          }
        ];

    var service = {
      students: students,
      addStudent: addStudent,
      removeStudent: removeStudent,
      editStudent: editStudent,
      undoHistory: undoHistory,
      undo: undo
    };

    return service;

    function addStudent(model) {
      var modelCopy = angular.extend(angular.copy(model), {
        id: generateTimestamp()
      });
      students.push(modelCopy);
      createUndoRecord(modelCopy, 'add');
    }

    function removeStudent(student) {
      students.splice(students.indexOf(student), 1);
      createUndoRecord(student, 'remove');
    }

    function editStudent(student) {
      createUndoRecord(angular.copy(student), 'edit');
    }

    function undo() {
      var undoStep = undoHistory.pop();

      switch (undoStep.type) {
        case 'add':
          undoAdd(undoStep);
          break;
        case 'remove':
          undoRemove(undoStep);
          break;
        case 'edit':
          undoEdit(undoStep);
          break;
      }
    }

    function undoAdd(step) {
      students.splice(students.indexOf(step.model), 1);
    }

    function undoRemove(step) {
      students.push(step.model);
    }

    function undoEdit(step) {
      var stepModelIndex;
      students.forEach(function(student, i) {
        if (student.id === step.model.id) {
          stepModelIndex = i;
          return;
        }
      });
      step.model.editableFields = {};
      students.splice(stepModelIndex, 1, step.model);
    }

    function createUndoRecord(model, type) {
      undoHistory.push({
        type: type,
        model: model
      });
    }

    function generateTimestamp() {
      return (new Date()).getTime();
    }
  }
  })();
