/* global angular */
/* eslint no-param-reassign: ["error", { "props": false }] */
angular.module('myPets', [])
.controller('MyPetsCtrl', function ($scope, $rootScope, $http, $location, myPets) {
  myPets.getAll()
    .then((pets) => {
      $scope.pets = pets;
    });

  $scope.petImages = {
    1: '../img/pets/thumb-bear.png',
    2: '../img/pets/thumb-octopus.png',
    3: '../img/pets/thumb-dragon.png',
  };

  $scope.displayImages = (type) => $scope.petImages[type];

  $scope.goToPet = (pet) => {
    $rootScope.pet = pet;
    $location.path('/market/pet');
  };

  $scope.editPet = (pet) => {
    $rootScope.pet = pet;
    $location.path('/app/editPet');
  };
});