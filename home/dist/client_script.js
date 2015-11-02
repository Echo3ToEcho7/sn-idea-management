'use strict';

var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
  //$scope.inIFrame = window.self === window.top;

  $scope.spaces = window.data.spaces;
}]);

app.config(function ($mdThemingProvider) {
  var background = $mdThemingProvider.extendPalette('grey', {
    'A100': 'f7f7f7'
  });
  $mdThemingProvider.definePalette('background', background);

  $mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('blue-grey').backgroundPalette('background');
});

app.directive('cardLeft', function () {
  return {
    restrict: 'AC',
    link: function link(scope, elt, attr) {
      elt.css({
        margin: '0px',
        padding: '0px',
        position: 'relative',
        top: '-8px',
        left: '-8px'
      });
    }
  };
});