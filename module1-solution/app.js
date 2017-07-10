(function () {
'use strict';

angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope', '$filter']

	function LunchCheckController ($scope, $filter) {

		$scope.food =  "";
		// $scope.messagePrint = "";

		$scope.check = function () {		
		var foodList = $scope.food.split(',');
		var cantFood = 0;
		console.log(foodList);

		if (foodList[0] != "" && foodList[0] != " " ){
			cantFood = foodList.length;
		}

		$scope.message(cantFood);

		};

		$scope.message = function (cantFood) {
			console.log(cantFood);
			if (cantFood != 0) {
				if (cantFood <= 3) {
					console.log("Enjoy!");
					$scope.messagePrint = "Enjoy";
				}
				else {
					console.log("Too much!");
					$scope.messagePrint = "Too much!";
				}
			}
			else{
				console.log("Please enter data first");
				$scope.messagePrint = "Please enter data first";
			}
		
		};

		
	};

	
	})
();

	// If the number of items in the textbox is less than or equal to 3 (e.g., 1, 2, or 3), a message should show up under
	// to the textbox saying "Enjoy!". If the number of items is greater than 3 (4, 5, and above),
	// the message "Too much!" should show up under the textbox.