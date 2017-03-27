var app=angular.module('perfectApp',[]);
app.controller('perfectCtrl',function($scope){
	$scope.perfect=function(num){
    $scope.result=[];
		for(var i = 1; i<=num; i++)
        {
           var sum=0;
           for(var j=1; j<i; j++)
        {
           if(i % i == 0)
            {
                sum = sum + j;
            }

        }
           
        
   if (sum == i)
    {
      $scope.result.push(i);
      console.log("sbdhja",i)
    }
 }
  }
});