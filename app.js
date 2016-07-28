(function() {
    var app = angular.module('movie', ['ngMaterial', 'ngResource', 'ngRoute', 'ngStorage']);

    app.controller('MovieController', ['$scope', '$http', '$localStorage', '$sessionStorage',
        function($scope, $http, $localStorage, $sessionStorage) {

            // start functions-----
            function MovieController($scope) {
                $scope.currentNavItem = 'page1';
            }

            $scope.$watch('search', function() {
                fetch();
            });

            // $scope.search = [];
            $scope.search = "Sherlock Holmes";

            function fetch() {
                // this.display=block;
                console.log("detailssss");
                $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&y=&plot=short&r=json")
                    .then(function(response) {
                        $scope.details = response.data;
                        console.log("details", $scope.details);


                        // $localStorage.message.push($scope.details);

                    });

                if ($localStorage.message == null) {
                    $localStorage.message = [];
                }
                $scope.add = function() {



                    $localStorage.message.push($scope.details);

                };

                $scope.show = function() {
                    $scope.x = $localStorage.message;
                }

                $scope.update = function(movie) {
                    $scope.search = movie.Title;
                };

                $scope.myvalue = false; 
                $scope.select = function() {
                    $scope.myvalue = true;  
                    this.setSelectionRange(0, this.value.length);
                    //$scope.details=true;
                    // $scope.IsVisible = $scope.IsVisible ? false : true;
                };

              




            }
        }
    ]);

})();
