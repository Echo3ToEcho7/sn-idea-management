var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
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

app.directive('cardLeft', ['$timeout', function ($timeout) {
  return {
    restrict: 'AC',
    link: function (scope, elt, attr) {
      window.setTimeout(function () {
        console.log('test');
        console.log(elt.parnet()[0].clientHeight);
        elt.css({height: elt.parent()[0].clientHeight});
      }, 1000);

      elt.css({
        margin: '0px',
        padding: '0px',
        position: 'relative',
        top: '-8px',
        left: '-8px',
        bottom: '0px'
      });
    }
  };
}]);
