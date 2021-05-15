(function () {
'use strict';

angular.module('', [])

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
  $scope.inputData = "";
  $scope.myMessage = "";
 
  $scope.getFood = function () {
 //   var upCase = $filter('uppercase');
  

    $scope.inputData = $scope.inputData;
  
    
    	if ($scope.inputData ==0) {
    		$scope.myMessage = "Please enter data first!";
    	} else {
    		$scope.myMessage = myAnswer($scope.inputData)
    	}
    	
  };

function myAnswer (string){
    var myFood = [];
    var myReply = "";
    var countIt = 0;
    myFood = string.split(',');

   for (var i = 0; i <myFood.length; i++) {
      if (myFood[i].length > 0) {
      	countIt++;
      }

    }
	if (countIt <=3) {
		myReply = "Enjoy!";
	} else {
		myReply = "Too much!";
	} 
	return myReply;

};

}

})();