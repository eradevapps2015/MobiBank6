// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic' ,'starter.controllers','starter.directives','starter.services','ngCordova'])

.run(function($ionicPlatform,  $ionicPopup, $cordovaDevice) {
 
})


.config(function($stateProvider, $urlRouterProvider,  $ionicConfigProvider) {

  $stateProvider
  
    .state('app', {
      url: "/app",	  
      abstract: true,
      templateUrl: "templates/sidemenu.html",
      controller: 'AppCtrl'
    })
	
 .state('app.welcome', {
      url: "/welcome",
	 
      views: {
        'menuContent' :{
          templateUrl: "templates/welcome.html",
          controller: 'welcomeCtrl'
        }
      }
    })

		.state('app.accBalance', {
      url: "/accBalance",	
      views: {
        'menuContent' :{
          templateUrl: "templates/accBalance.html",
		    controller: 'AccBalanceCtrl'
        }
      }
    })
	
	.state('app.accStatement', {
      url: "/accStatement",
	 
      views: {
        'menuContent' :{
          templateUrl: "templates/accStatement.html",
		    controller: 'AccStatementCtrl'
        }
      }
    })
	
		.state('app.fundTranster', {
      url: "/fundTranster",
	  
      views: {
        'menuContent' :{
          templateUrl: "templates/fundTranster.html",
		    controller: 'FundTransterCtrl'
        }
      }
    })
	.state('app.descobill', {
      url: "/descobill",
	 
      views: {
        'menuContent' :{
          templateUrl: "templates/descobill.html",
		    controller: 'descoBilltCtrl'
        }
      }
    })
	
	.state('app.fundTransterRequest', {
      url: "/fundTransterRequest",
	  
      views: {
        'menuContent' :{
          templateUrl: "templates/fundTransterRequest.html",
		    controller: 'fundTransterRequestCtrl'
        }
      }
    })
	
		.state('app.talkTimeRecharge', {
      url: "/talkTimeRecharge",
	 
      views: {
        'menuContent' :{
          templateUrl: "templates/talkTimeRecharge.html",
		    controller: 'talkTimeRechargetCtrl'
        }
      }
    })
	
	.state('app.stopChequeLeaf', {
      url: "/stopChequeLeaf",
	 
      views: {
        'menuContent' :{
          templateUrl: "templates/stopChequeLeaf.html",
		    controller: 'stopChequeLeafCtrl'
        }
      }
    })
	
	
		.state('app.chequeStatusInquiry', {
      url: "/chequeStatusInquiry",	 
      views: {
        'menuContent' :{
          templateUrl: "templates/chequeStatusInquiry.html",
		    controller: 'chequeStatusInquiryCtrl',
		
        }
      }
    })
	
		.state('app.changePassword', {
      url: "/changePassword",	  
      views: {
        'menuContent' :{
          templateUrl: "templates/changePassword.html",
		    controller: 'changePasswordCtrl'
        }
      }
    })

	
	
  
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
	
    .state('tabs.signin', {
      url: "/signin",
      views: {
        'signin-tab': {
          templateUrl: "templates/signin.html",
          controller: 'SignInCtrl'
        }
      }
    })
	    .state('tabs.locations', {
      url: "/locations",
      views: {
        'locations-tab': {
          templateUrl: "templates/locations.html",
		  controller: 'LocationsCtrl'
        }
      }
    })
	
	  .state('tabs.registration', {
      url: "/registration",
      views: {
        'registration-tab': {
          templateUrl: "templates/registration.html",
		  controller: 'RegistrationCtrl'
        }
      }
    })
	

	
		
	  .state('changePasswordWithErrorCode', {
			
          url: "/changePasswordWithErrorCode",
          templateUrl: "templates/changePasswordWithErrorCode.html",
          controller: 'ChangePasswordWithErrorCodeCtrl'
        })
	
	   .state('tabs.map', {     
	   url: '/locations/:chatId',
      views: {
        'locations-tab': {
          templateUrl: "templates/map.html",
		  controller: 'MapCtrl'
        }
      }
    })
	
	 .state('tabs.chats', {
      url: "/chats",
      views: {
        'chats-tab': {
          templateUrl: "templates/tab-chats.html",
		  controller: 'ChatsCtrl'
        }
      }
    })
	
	.state('tabs.chat-detail', {
     url: '/chats/:chatId',
      views: {
        'chats-tab': {
          templateUrl: 'templates/chat-detail.html',
		  controller: 'ChatDetailCtrl'
        }
      }
    })
	
	

 

	
	

  

   $urlRouterProvider.otherwise("/tab/signin");
   $ionicConfigProvider.tabs.position('bottom');

})


