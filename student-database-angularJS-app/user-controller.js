(function(){

angular.module('myapp')
    .controller('userController',userControllerFn);

    function userControllerFn($scope, $window, $document, $location){


        $scope.nextPage = function(){
            $scope.username = document.getElementById('username').value;
            $scope.password = document.getElementById('password').value;
            if($scope.username== 'finalproject' && $scope.password== 'finalproject' ){
                $location.url("/post");
            }
            else{
                $location.url("/user");
                alert("Username and password is incorrect")
            }
        }

    }


})();


