angular.module('starter.directives', [])


.directive('map', function($rootScope) {


//alert($rootScope.branchMapLongitude);

var myCenter=new google.maps.LatLng( $rootScope.branchMapLatitude , $rootScope.branchMapLongitude);
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
	 // $scope.$apply();
        var mapOptions = {
          center:myCenter,
          zoom:16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };	
		
       //var map = new google.maps.Map($element[0], mapOptions);		
		var map = new google.maps.Map($element[0],  mapOptions);		
		 var marker = new google.maps.Marker({
      position: myCenter,
      map: map,
      title:   $rootScope.branchMapBranchName
    });
	
  //$scope.mm=map;
        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener(marker,$element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });			
		   $scope.onCreate({map: map});		
      }
      if (document.readyState === "complete") {
        initialize();
      } else {	 
	 
        //google.maps.event.addDomListener(window, 'load', initialize);	
		google.maps.event.addDomListener(window, 'load', initialize);
		initialize();		
      }	
    }
  }


});
