app.controller('userController', ['$scope', 'userService', function(scope, userService){
    scope.pageName = "Home Page";

    scope.getAllEmployeeData = function(){
        userService.getEmployee().then(function(data){
            debugger;
            scope.users = data;
        }, function(err){
            console.log(err);
        });
    };
    scope.getAllEmployeeData();

    scope.getEmployeeDataById = function(id){
        userService.getEmployeeUsingId(id).then(function(data){
            scope.users = data;
        }, function(err){
            console.log(err);
        });
    };
    //scope.getEmployeeDataById(2);

    scope.insertEmployeeData = function(data){
        data.phone = Number(data.phone);
        userService.createEmployee(data).then(function(data){
            if(data.affectedRows == 1){
                alert("Success");
            }
        }, function(err){
            console.log(err);
        });
    };

    scope.deleteUser = function(id){
        userService.deleteEmployeeData(id).then(function(data){
          if(data.affectedRows == 1){
              scope.getAllEmployeeData();
          }
        }, function(err){
            console.log(err);
        });
    };

    scope.loginUser = function(users){
        userService.loginUsers(users).then(function(data){
            scope.users = data;
        }, function(err){
            console.log(err);
        });
    }
}]);