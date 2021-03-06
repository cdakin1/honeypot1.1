/* global angular Plaid */
/* eslint no-param-reassign: ["error", { "props": false }] */
angular.module('app.account', [])
  .controller('accountController', function ($scope, $location, $http, $rootScope, account) {
    // TODO: Get out of controller
    $http.get(`http://35.167.2.107:3000/v1/totals/?user_id__is=${$rootScope.user}`)
      .then(res => {
        $scope.total = (res.data.data[0].total / 100).toFixed(2);
      });
    $scope.openChecking = function openChecking() {
      account.checkingHandler.open();
    };
    $scope.openSavings = function openSavings() {
      account.savingsHandler.open();
    };
    $scope.goToPet = function goToPet() {
      $location.path('/app/myPets');
    };
    $scope.showHelp = () => { account.showHelp(); };
  });
