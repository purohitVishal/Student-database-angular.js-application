
(function(){

    angular.module('myapp')
        .controller('postController',postControllerFn);
    function postControllerFn($scope, $firebaseArray){

        var mystudents=new Firebase('https://popping-torch-7289.firebaseio.com/students');
        $scope.students=$firebaseArray(mystudents);




        $scope.showForm=function(){
            $scope.addFormShow=true;
            $scope.editFormShow=false;
            clearForm();
        }

        $scope.hideForm=function(){
            $scope.addFormShow=false;
        }

        function clearForm(){

            $scope.studentName="";
            $scope.enrollmentNo="";
            $scope.department="";
            $scope.studentAddress="";
        }

        $scope.addFormSubmit=function(){
            $scope.students.$add({
                studentName:$scope.studentName,
                enrollmentNo:$scope.enrollmentNo,
                department:$scope.department,
                studentAddress:$scope.studentAddress

            });

            clearForm();
        }

        $scope.showstudent=function(student){

            $scope.editFormShow=true;
            $scope.addFormShow=false;
            $scope.studentName=student.studentName;
            $scope.enrollmentNo=student.enrollmentNo;
            $scope.department=student.department;
            $scope.studentAddress=student.studentAddress;
            $scope.id=student.$id;
        }

        $scope.editFormSubmit=function(){
            var id=$scope.id;
            var record=$scope.students.$getRecord(id);
            record.studentName=$scope.studentName;
            record.enrollmentNo=$scope.enrollmentNo;
            record.department=$scope.department;
            record.studentAddress=$scope.studentAddress;
            $scope.student.$save(record);

        }

        $scope.deletestudent=function(student){
            $scope.students.$remove(student);
        }
    }


})();
