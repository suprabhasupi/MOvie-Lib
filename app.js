(function() {
    var app = angular.module('movie', ['ngMaterial', 'ngResource', 'ngRoute','ngStorage']);

app.controller('MovieController', ['$scope', '$http', '$localStorage', '$sessionStorage', function($scope, $http, $localStorage, $sessionStorage){ 




// start functions-----
	  function MovieController($scope) {
    $scope.currentNavItem = 'page1';
  }

	 $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = [];
// $scope.search="kick";
	function fetch(){
		console.log("detailssss");
  $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&y=&plot=short&r=json")
  .then(function(response)
  	{ 
  		$scope.details = response.data; 
  		  console.log("details", $scope.details);

  		   // $localStorage.message.push($scope.details);
            
           
        

  	});
 if($localStorage.message == null)
        {
            $localStorage.message = [];
        }
  $scope.add=function(){

  	
  	 
 	$localStorage.message.push($scope.details);

  };

    $scope.show=function(){
    	 $scope.x = $localStorage.message;
    }

 $scope.update = function(movie) {
      $scope.search = movie.Title;
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
  }





}
        }]);

})();




