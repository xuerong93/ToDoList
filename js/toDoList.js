var app = angular.module('toDoListApp',[])
.controller('ListController',function($scope){

  $scope.items = [
    {detail: 'write homework', status: 'To Do'},
    {detail: 'sharpen pencil', status: 'Completed'},
    {detail: 'search for material', status: 'Doing'}
  ];
	
  $scope.addItems = function(){

    $scope.items.push({
      detail: $scope.newItemDetail,
      status: 'To Do'
    });
  };

  $scope.deleteItems = function(item){
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1); 
  };


  $scope.doingItem = function(item){
    item.status = "Doing";
  };

  $scope.completeItem = function(item){
    item.status = "Completed";
  };
	

 });

function changeTab(tabId){
	  switch(tabId){
		  case 0:
			  document.getElementById("all_list_wrapper").style.display= "block";
			  document.getElementById("to_do_list_wrapper").style.display= "none";
			  document.getElementById("doing_list_wrapper").style.display= "none";
			  document.getElementById("completed_list_wrapper").style.display= "none";
			  break;
		  case 1:
			  document.getElementById("all_list_wrapper").style.display= "none";
			  document.getElementById("to_do_list_wrapper").style.display= "block";
			  document.getElementById("doing_list_wrapper").style.display= "none";
			  document.getElementById("completed_list_wrapper").style.display= "none";
			  break;			  
		  case 2:
			  document.getElementById("all_list_wrapper").style.display= "none";
			  document.getElementById("to_do_list_wrapper").style.display= "none";
			  document.getElementById("doing_list_wrapper").style.display= "block";
			  document.getElementById("completed_list_wrapper").style.display= "none";
			  break;			  
		   case 3:
			  document.getElementById("all_list_wrapper").style.display= "none";
			  document.getElementById("to_do_list_wrapper").style.display= "none";
			  document.getElementById("doing_list_wrapper").style.display= "none";
			  document.getElementById("completed_list_wrapper").style.display= "block";
			  break;
		  default:;
			  
	  }
}
