var myStore = angular.module('myStore', []);
myStore.controller('storeCtrl', ['$scope', '$http', function($scope,$http){
	$http.get('products.json').success(function(data){
		$scope.products = data;
	})
	
	$scope.newItem = {};
	$scope.addItem = function(){
		$scope.products.push($scope.newItem);
		$scope.newItem = {};
	}

	$scope.removeItem = function(x){
		$scope.products.splice(x, 1);
	}
}]);