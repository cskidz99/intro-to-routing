app.controller('DetailsController', function($scope,$stateParams,DataService){

  $scope.currentDetailId = $stateParams.detailId;

  $scope.currentThing = DataService.data
  [$stateParams.detailId];


});
