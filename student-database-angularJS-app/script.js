(function(){
  angular.module('myapp',['ngMessages','ngRoute','firebase']);


    angular.module('myapp').config(moduleConfigFn);

    moduleConfigFn.$inject = ['$routeProvider'];

    function moduleConfigFn($routeProvider){
        $routeProvider
            .when('/user',{
            templateUrl: 'user.html',
            controller: 'userController'
        })
            .when('/post', {
                templateUrl : 'post.html',
                controller: 'postController'
            })

            .otherwise({
                redirectTo:'/user'
            });

    }


})();

