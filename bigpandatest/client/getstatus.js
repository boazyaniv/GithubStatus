function personController($scope, $http){
  console.log("getting the status....");
  $http.get('http://localhost:4848').success(function(data) {
    // this callback will be called asynchronously when the response is available

    //parse json;
    $scope.status = data.status;
    $scope.body = data.body;
    $scope.createdOn = data.created_on;

  }).error(function(status) {
    $scope.status="Failed getting the status";
  })
};
