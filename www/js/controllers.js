var db=null;
angular.module('starter.controllers', [])

// **************************************Sign In Controller*******************************************************
	// **************************************Sign In Controller*******************************************************
	// **************************************Sign In Controller*******************************************************
	// **************************************Sign In Controller*******************************************************
	
	.controller('SignInCtrl', function($ionicPlatform,$scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter,$cordovaSQLite,$cordovaDevice) {
	
	  $ionicPlatform.ready(function() {
   

   
    
		if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device. Please Connect Internet"
                    })
                    
                }
            }
           
     //Begin For sqlite**********************************
    db = window.sqlitePlugin.openDatabase({name: "DB"});

      db.transaction(function(tx) {
       //tx.executeSql('DROP TABLE IF EXISTS user_info');
       // tx.executeSql('DROP TABLE IF EXISTS branch_location');
        tx.executeSql('CREATE TABLE IF NOT EXISTS user_info (user_id text)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS branch_location (slno text,branch_code text,branch_name text,branch_address text,longitude text,latitude text,phone text,fax text)');
				
///For user
db.transaction(function(tx) {
            tx.executeSql("SELECT user_id from user_info;", [], function(tx, res) {
              // alert("res.rows.length: " + res.rows.length + " -- should be 1");
                //alert("res.rows.item(0).user_id: " + res.rows.item(0).user_id + " -- should be 100");
                var user_id11=res.rows.item(0).user_id;
                	$scope.user = { uname:user_id11};
            });
        });
        
        //Begin Show Branch Info
          
			$rootScope.branChcategories = [];
	  db.transaction(function(tx) {
            tx.executeSql("SELECT * from branch_location;", [], function(tx, res) {
             
                 var len = res.rows.length;
                 if(len>0){
                 	 for (var i = 0; i < len; i++) {
                 	 //	alert("res.rows.item(0).branch_code: " + res.rows.item(i).branch_code + "Branch Name :"+res.rows.item(i).branch_name);
                 	 //listItems.push(res.rows.item(i).branch_code);
                 	  $scope.branChcategories.push({
                 	  	slno: res.rows.item(i).slno, 
                 	  	branch_code: res.rows.item(i).branch_code,
                 	  	branch_name: res.rows.item(i).branch_name,
                 	  	branch_address: res.rows.item(i).branch_address,
                 	  	phone: res.rows.item(i).phone,
                 		 fax: res.rows.item(i).fax
                 	  });
                 	  // Make sure to apply scope change so that ng-repeat updates
        		$scope.$apply();
                 	//$scope.categories.push({slno: res.rows.item(i).slno, branch_name: res.rows.item(i).branch_name});
                 	 }
                 	 	
                 	 }
                 })
            });
        
        //End show branch Info
        
        

      });
    //End sqlite**********************************************************
    
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
	
			$ionicPlatform.registerBackButtonAction(function (event) {
			event.preventDefault();
			}, 100) 
			
		
 
		
  });
	
	/*
document.addEventListener("deviceready", function() {
   
  }, false);
*/
        

/*
	// *****Begin Show User ID**********

	 document.addEventListener('deviceready', function () {
	 alert("controller");
	  $scope.uuid = $cordovaDevice.getUUID();
	  alert("Deviec uuid"+ $scope.uuid);
	db = $cordovaSQLite.openDB({ name: "bankasiadb.db" });
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS useridinfo (user_id text)");
	     var query = "SELECT user_id FROM useridinfo";
        $cordovaSQLite.execute(db, query).then(function(res) {
            if(res.rows.length > 0) {
			
              	
					$scope.user = { uname:res.rows.item(0).user_id};
					
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
        
        //Begin Internet Connection
      $ionicPlatform.registerBackButtonAction(function (event) {
			event.preventDefault();
			}, 100) 
 
			if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device. Please Connect Internet Cotrollerrrrr"
                    })
                    
                }
            }
            //End internet connection
 })
 */
 
	// *****End Show User ID**********
  	$rootScope.getServerIp='http://202.40.190.14:8084/'  //For Test
	//$rootScope.getServerIp='http://localhost:8084/'  //For Own Pc



	

	//	$scope.user = { uname:'era@mybank.com'};
	

		/*	 $scope.login111 = function(user) {
			 		alert("Insert Login");
			 	
    		db.transaction(function(tx) {       
			tx.executeSql("select user_id from user_info where user_id=? ;", [user.uname], function(tx, res) {
				 if(res.rows.length > 0) {
			  $state.go('app.welcome');
			  }else{
			  
				tx.executeSql("select user_id from user_info where user_id=? ;", [user.uname], function(tx, res) {
           
			  if(res.rows.length > 0) {
				var uid=res.rows.item(0).user_id;
					tx.executeSql("UPDATE user_info set user_id=? where user_id=?", [user.uname,uid], function(tx, res){
					 alert("Update successfully");
					  $state.go('app.welcome');
					}, function(e) {
					 
					  alert("ERROR: ");
					});
			  }else{
					   tx.executeSql("INSERT INTO user_info (user_id) VALUES (?)", [user.uname], function(tx, res) {
				 alert("Insert successfully");
				  $state.go('app.welcome');
				}, function(e) {
				 
				  alert("ERROR:");
				});
			  }
            });
			
			  }
			})       
      });	
      
      
   	
		  };*/
		  
		  
	 $scope.login1 = function(user) {
	 /*
			 		alert("Insert Login");
			 	
    		db.transaction(function(tx) {       
			tx.executeSql("select user_id from user_info where user_id=? ;", [user.uname], function(tx, res) {
				 if(res.rows.length > 0) {
				// alert("Found");
			  //$state.go('app.welcome');
			  tx.executeSql("SELECT user_id from user_info;", [], function(tx, res) {
               alert("res.rows.length: " + res.rows.length + " -- should be 1");
                alert("res.rows.item(0).user_id: " + res.rows.item(0).user_id + " -- should be 100");
            });
			  }else{
			  
				tx.executeSql("delete from user_info ;", [], function(tx, res) {
				alert("Deleted");
			  
					tx.executeSql("INSERT INTO user_info (user_id) VALUES (?)", [user.uname], function(tx, res) {
				 alert("Insert successfully");
				  //$state.go('app.welcome');
				  tx.executeSql("SELECT user_id from user_info;", [], function(tx, res) {
               alert("res.rows.length: " + res.rows.length + " -- should be 1");
                alert("res.rows.item(0).user_id: " + res.rows.item(0).user_id + " -- should be 100");
            });
				}, function(e) {
				 
				  alert("ERROR:");
				});
			
            });
			
			  }
			})       
      });
      */
}	  
		 

    
	$scope.login= function (user) {
	
       				
		if(!user || ! user.uname){
		 $ionicPopup.alert({
		  title: 'User ID Required !',
		  //template:'From date'
		  })
		//alert("Please Enter Your User ID");
		}else if(!user || ! user.pass){
			 $ionicPopup.alert({
		  title: 'Password Required !',
		  //template:'From date'
		  })
		}else if(navigator.connection.type == Connection.NONE){
		 $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device. Please Connect Internet"
                    })	
		}else{
	
			$ionicLoading.show({
                template: 'Please Wait..'
            });
					$http({
					  method: 'GET',
					 
					  url: $rootScope.getServerIp+'BankAndroidConnectivity/LoginMobiBank',
					  params: {uname:user.uname, pass:user.pass, appVersion:'MOBIBANKV1.0',imei:$cordovaDevice.getUUID()},
					  //type:'JSON',
					  headers : { 'Content-Type': 'application/json' }
					}).success(function(data, status, headers, config) {
						//alert("success..."+data.loginNodes[0].errorCode);
							$rootScope.userChangeID=user.uname;
						$ionicLoading.hide();
						//user.uname="";
						user.pass="";

						if(data.loginNodes[0].errorCode ==0){
							$scope.loginNodes = data.loginNodes; // response data
							//$scope.responseArr = [];
							  $rootScope.responseArr = [];
							angular.forEach(data.loginNodes, function(loginNode, index) {
								
								$rootScope.cusCode = loginNode.cusCode;
								 $rootScope.mailID = loginNode.mailID;
								 $rootScope.sessionID = loginNode.sessionID;
								 $rootScope.welcomeErrorMessage = loginNode.errorMessage;
								 //alert(loginNode.mailID);
								 
								 //$rootScope.responseArr.push(loginNode);
									
								 
								 //Begin For source Account ********************************
								$http({
								  method: 'GET',
								  //12345678900
								  url:  $rootScope.getServerIp+'BankAndroidConnectivity/AccountNumberListSV',
								  params: {mailID: $rootScope.mailID,sessiongID:$rootScope.sessionID,imei:$cordovaDevice.getUUID()},
								  //type:'JSON',
								  headers : { 'Content-Type': 'application/json' }
								}).success(function(data, status, headers, config) {                  
									$scope.accountTagCode = data.accountTagCode; // response data
									$rootScope.accountTagCode = data.accountTagCode; // response data
									$rootScope.responseArr = [];
									angular.forEach(data.accountTagCode, function(accountTagCode, index) {
										if(data.accountTagCode[0].sErrorCode == 0) {
											//alert('sucess');

															 $http({
															  method: 'GET',									  
															  url:  $rootScope.getServerIp+'BankAndroidConnectivity/AccountListSV',
															  params: {mailID:$rootScope.mailID,sessiongID:$rootScope.sessionID},
															  //type:'JSON',
															  headers : { 'Content-Type': 'application/json' }
															}).success(function(data, status, headers, config) {                  
																//$scope.accountListDescription = data.accountListDescription; // response data
																$rootScope.accountStatementNumberListDescription = data.accountListDescription; // response data
																$rootScope.responseArr = [];
																angular.forEach(data.accountStatementNumberListDescription, function(accountStatementNumberListDescription, index) {
																		//alert(data.accountListDescription[0].sAccountNumber);
																		//alert(accountListDescription);
																		 $ionicLoading.hide();
																		 $rootScope.responseArr.push(accountStatementNumberListDescription); 
																		 
																		
																});   
																//alert($rootScope.responseArr.toString);
															}).error(function(data, status, headers, config) {
															 $ionicLoading.hide();
																 $ionicPopup.alert({
																  title:'Unable to perform your request. Please Check your Device Internet Connection',
																  //template:'From date'
																  })
																
															});  						
											//second prorame
													
										}else{
										$ionicLoading.hide();				
									 $ionicPopup.alert({
									  title: data.accountTagCode[0].sSrrorMessage,
									  //template:'From date'
									  })
									
										}
									});   
									//alert($rootScope.responseArr.toString);
								}).error(function(data, status, headers, config) {
								$ionicLoading.hide();          
								  $ionicPopup.alert({
									  title:'Unable to perform your request. Please Check your Device Internet Connection',
									  //template:'From date'
									  })
								});   
								 //End Account Statement soutce Account***************************
								 
								 //Begin Source Account List*********************
								 
								 
							 $http({
							  method: 'GET',
							
							  url:  $rootScope.getServerIp+'BankAndroidConnectivity/AccountNumberTransferCode',
							  params: {mailID:$rootScope.mailID,sessiongID:$rootScope.sessionID,sDate:$filter("date")(Date.now(), 'dd/MM/yyyy')},
							  //type:'JSON',
							  headers : { 'Content-Type': 'application/json' }
							   }).success(function(data, status, headers, config) {
								//alert("success");
									
									   if(data.accountTagCode[0].sErrorCode == 0) {
									   
									   //Second Request Begin
										 $http({
											 method: 'GET',									  
											url:  $rootScope.getServerIp+'BankAndroidConnectivity/AccountListTransferSV',
											params: {mailID:$rootScope.mailID,sessiongID:$rootScope.sessionID},
															  //type:'JSON',
											headers : { 'Content-Type': 'application/json' }
											}).success(function(data, status, headers, config) {                  
												 $ionicLoading.hide();				 //alert('sucess');
											$scope.accountListDescription = data.accountListDescription; // response data
											$rootScope.accountListDescription = data.accountListDescription; // response data
											$rootScope.responseArr = [];
											angular.forEach(data.accountListDescription, function(accountListDescription, index) {
												$ionicLoading.hide();
												$rootScope.responseArr.push(accountListDescription);
																	//aler(accountListDescription);
																	//$state.go('accBalance');
													
													});   
												}).error(function(data, status, headers, config) {
													 $ionicLoading.hide();
													$ionicPopup.alert({
														 title:'Unable to perform your request. Please Check your Device Internet Connection',
																  //template:'From date'
														})
												});  
									
									//Second Request End
													
									}else{
										$ionicLoading.hide();
										//alert(data.accountTagCode[0].sSrrorMessage);
										
										$ionicPopup.alert({
										  title:data.accountTagCode[0].sSrrorMessage,
										  //template:'From date'
										  })
										
									}
								
								}).error(function(data, status, headers, config) {
								$ionicLoading.hide();
								$ionicPopup.alert({
								 title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
								})
							}); 
												
													 
							//	$state.go('app.welcome');
								
								//Begin Save User ID Sencond
									 	//	alert("Insert Login");
			 	
    		db.transaction(function(tx) {       
			tx.executeSql("select user_id from user_info where user_id=? ;", [user.uname], function(tx, res) {
				 if(res.rows.length > 0) {
				// alert("Found");
			  $state.go('app.welcome');
			 
			  }else{
			  
				tx.executeSql("delete from user_info ;", [], function(tx, res) {
			//	alert("Deleted");
			  
					tx.executeSql("INSERT INTO user_info (user_id) VALUES (?)", [user.uname], function(tx, res) {
				 //alert("Insert successfully");
				  $state.go('app.welcome');
				 
				}, function(e) {
				 
				  alert("ERROR:");
				});
			
            });
			
			  }
			})       
      });
      
								//End Save USER ID Second
								
								
								/*
								//*************Begin Save User ID************
							
										 var query = "SELECT user_id FROM useridinfo where user_id=?";
										  $cordovaSQLite.execute(db, query,[user.uname]).then(function(res) {
											if(res.rows.length > 0) {			
												for(var i=0; i<res.rows.length; i++){
													
												//$scope.branch_code_values=	res.rows.item(i).branch_code;				
												// $scope.results.push(res.rows.items(i));
												$state.go('app.welcome');	

												} 
												
											} else {
												
												
											 
														//Begin Else Query
														var queryUserID = "SELECT user_id FROM useridinfo";
												 
													$cordovaSQLite.execute(db, queryUserID).then(function(res) {
														if(res.rows.length > 0) {			
															for(var i=0; i<res.rows.length; i++){
															var uid=res.rows.item(i).user_id;
															
															//Begin Update
															 var queryUserIDUpdate = "UPDATE useridinfo set user_id=? where user_id=?";
																 $cordovaSQLite.execute(db, queryUserIDUpdate,[user.uname,uid]).then(function(res) {
																  alert("Updated Successfully");
																	$state.go('app.welcome');																  
																}, function (err) {
																   // console.error(err);
																	 alert("Error Method");
																});
															//End Update

															} 
															
														} else {
														 
															//Begin For Insert
																var insertqQuery = "INSERT INTO useridinfo (user_id) VALUES (?)";
																	 $cordovaSQLite.execute(db, insertqQuery,[user.uname]).then(function(res) {
																alert("Insert successfully !");
																$state.go('app.welcome');
																}, function (err) {
																   // console.error(err);
																	 alert("Error Method");
																	 
																});
															//End For Inser
														}
													}, function (err) {
													   // console.error(err);
														 alert("Error Method");
													});
													//End Else Query
											}
										}, function (err) {
										   // console.error(err);
											 alert("Error Method");
										});
								
								//***********End Save User ID****************
								*/
								
								
												});  
						}else if(data.loginNodes[0].errorCode ==11){

								$rootScope.cusCode = data.loginNodes[0].cusCode;									
								 $rootScope.mailID = data.loginNodes[0].mailID;
								 $rootScope.sessionID = data.loginNodes[0].sessionID
								 $rootScope.welcomeErrorMessage = data.loginNodes[0].errorMessage
								 $state.go('changePasswordWithErrorCode');
						
						}else {
							$ionicPopup.alert({
							title: data.loginNodes[0].errorMessage,
						  //template:'From date'
						  })
						}
								
					}).error(function(data, status, headers, config) {
					$ionicLoading.hide();
						$ionicPopup.alert({
						  title: "Unable to perform your request. Please Check your Device Internet Connection",
						  //template:'From date'
						  })
					}); 
					//Begin inside Button
					$timeout(function() {
				 $ionicLoading.hide();
			   }, 5000);
			   //End inside Button

		}
		

//		
    }
	
 
})

.controller('LocationsCtrl', function($scope,$state,Chats, $http, $rootScope, $ionicPopup, $ionicLoading, $timeout) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
$scope.branchLocationsData='';
$scope.listItems=[];
/*Begin Latlng*/
//ng-click="branchLocationLatLng(category)"
  $scope.branchLocationLatLng = function(category) {
  	alert("branch name :"+category.branch_name);
  }
/*End LatLng*/


/*
 if($scope.branChcategories !=''){
 }else{
 
  }*/
  //serach
  
  // Begin For sync alert
  
            //$scope.message = "Timeout called!";
            db.transaction(function(tx) {
            tx.executeSql("SELECT * from branch_location;", [], function(tx, res) {
                 var len = res.rows.length;
                 if(len>0){
                  
                 	 }else {
                 	  $ionicPopup.alert({
		  title: 'Please Sync Branch Info',
		  //template:'From date'
		  })	
                 	 }
                 })
            });
       
  
  //End sync alert
   	
			  $scope.btnSyncBranchLocation1 = function() {
			  //	alert("show");
			  
			$rootScope.branChcategories = [];
	  db.transaction(function(tx) {
            tx.executeSql("SELECT * from branch_location;", [], function(tx, res) {
             
                 var len = res.rows.length;
                 if(len>0){
                 	 for (var i = 0; i < len; i++) {
                 	 //	alert("res.rows.item(0).branch_code: " + res.rows.item(i).branch_code + "Branch Name :"+res.rows.item(i).branch_name);
                 	 //listItems.push(res.rows.item(i).branch_code);
                 	  $scope.branChcategories.push({
                 	  	slno: res.rows.item(i).slno, 
                 	  	branch_code: res.rows.item(i).branch_code,
                 	  	branch_name: res.rows.item(i).branch_name,
                 	  	branch_address: res.rows.item(i).branch_address,
                 	  	phone: res.rows.item(i).phone,
                 		 fax: res.rows.item(i).fax,
                 		 logitude: res.rows.item(i).logitude,
                 		 latitude: res.rows.item(i).latitude
                 	
                 		 
                 	  });
                 	  // Make sure to apply scope change so that ng-repeat updates
        		$scope.$apply();
                 	//$scope.categories.push({slno: res.rows.item(i).slno, branch_name: res.rows.item(i).branch_name});
                 	 }
                 	 	
                 	 }
                 })
            });
        
	
    
}
  //Search
  //Begin Local Storage******************
  $scope.btnSyncBranchLocation = function() {

	db.transaction(function(tx) {           
            tx.executeSql("INSERT INTO branch_location (slno,branch_code,branch_name,branch_address,longitude,latitude,phone,fax) VALUES (?,?,?,?,?,?,?,?)", ["1","Branccc","dd","dd","dd","dd","dd","dd"], function(tx, res) {    
			//	alert("Insert Successfully");
			});
         }, function(e) {
        console.log("ERROR:");
    });
}

  //Begin siync
  $scope.btnSyncBranchLocation2=function(){
  		if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device. Please Connect Internet"
                    })
                    
                }else{
                 $ionicLoading.show({
                template: 'Please Wait..'
            });
  
        $http({
          method: 'GET',
          
          url:  $rootScope.getServerIp+'BankAndroidConnectivity/BranchLocation',
         // params: {cusCode:cusCode},
          //type:'JSON',
          headers : { 'Content-Type': 'application/json' }
        }).success(function(data, status, headers, config) {
            //alert("success..."+data.accountBalanceNodes.length);  
				 //$ionicLoading.hide();
				  //$scope.branchLocationsData=data;
		//Begin delete
		
		db.transaction(function(tx) {
            tx.executeSql("DELETE from branch_location;", [], function(tx, res) {
                
                 })
            });
		//End Delete
				  //Being Sink
		angular.forEach(data.branchLocationNodes, function(branchLocationNodes, index) {
							
				var lslno=branchLocationNodes.sl;
				var lbranchCode=branchLocationNodes.branchCode;
				var lbranchName=branchLocationNodes.branchName;
				var lbranchAddress=branchLocationNodes.branchAddress;
				var lphone=branchLocationNodes.phone;
				var lfax=branchLocationNodes.fax;
				var llogitude=branchLocationNodes.logitude;
				var llatitude=branchLocationNodes.latitude;
							
					db.transaction(function(tx) {  
				
             tx.executeSql("INSERT INTO branch_location (slno,branch_code,branch_name,branch_address,longitude,latitude,phone,fax) VALUES (?,?,?,?,?,?,?,?)", [lslno,lbranchCode,lbranchName,lbranchAddress,llogitude,llatitude,lphone,lfax], function(tx, res) {    
			//	alert("Insert Successfully");
			});
         }, function(e) {
        console.log("ERROR:");
    });								
				});   
				  //End Sink
			//Being show branch Locations
				$rootScope.branChcategories = [];
	 db.transaction(function(tx) {
            tx.executeSql("SELECT * from branch_location;", [], function(tx, res) {
              // alert("res.rows.length: " + res.rows.length + " -- should be 1");
                //alert("res.rows.item(0).branch_code: " + res.rows.item(0).branch_code + " -- should be 100");
               // var branch_code=res.rows.item(0).branch_code;
                //alert("branch_code :"+branch_code);
                 //var listItems= [];
                 var len = res.rows.length;
                 if(len>0){
                 	 for (var i = 0; i < len; i++) {
                 	 //	alert("res.rows.item(0).branch_code: " + res.rows.item(i).branch_code + "Branch Name :"+res.rows.item(i).branch_name);
                 	 //listItems.push(res.rows.item(i).branch_code);
                 	  $scope.branChcategories.push({
                 	  	slno: res.rows.item(i).slno, 
                 	  	branch_code: res.rows.item(i).branch_code,
                 	  	branch_name: res.rows.item(i).branch_name,
                 	  	branch_address: res.rows.item(i).branch_address,
                 	  	phone: res.rows.item(i).phone,
                 		 fax: res.rows.item(i).fax
                 	  });
                 	  // Make sure to apply scope change so that ng-repeat updates
        		$scope.$apply();
                 	//$scope.categories.push({slno: res.rows.item(i).slno, branch_name: res.rows.item(i).branch_name});
                 	 }
                 	 	
                 	 }
                 })
            });
        
			//End Branch Location
				  
				  $ionicLoading.hide();
			
        }).error(function(data, status, headers, config) {
			 $ionicLoading.hide();
         
		   $ionicPopup.alert({
		  title: 'Unable to perform your request. Please Check your Device Internet Connection',
		  //template:'From date'
		  })
			
        });  
		
                }
            }
 	
		  $timeout(function() {
     $ionicLoading.hide();
   }, 10000);
  
  }
  
  //End snc
  
 /* 
  $scope.branchCode2=function(category){
 
 // $rootScope.branchMapLongitude=item.logitude;
   //$rootScope.branchMapLatitude=item.latitude;
   $rootScope.branchMapBranchName=category.branchName;
   $rootScope.branchMapLatitude=category.latitude;
   //branchName
   alert($rootScope.branchMapBranchName);
  alert( $rootScope.branchMapLatitude);
 //  $scope.$apply();
  
  }*/

 /* 
  $scope.branchCode=function(item){
  alert(item.logitude);
  }
*/
  
  $scope.branches = [ { 
	branch: '1.Principal Office Branch',
	address: 'Address: 111-113, Motijheel C/A. Dhaka - 1000.',
	fax:'Fax: 880-2-9566223',ph:'Ph: 880-2-9571450, 9571451' },   
	{
	branch: '2.Palton Branch ',
	address: 'Address: Bay s Gallaria 57, Gulshan Avenue (Ground Floor)',
	fax:'Fax: 880-2-9566223',
	ph:'Ph:880-2-8828103'  },
	{
	branch: '3.Gulshan Branch ',
	address: 'Address: Rangs Tower 68 Purana Paltan (1st Floor) Dhaka-1000',
	fax:'Fax:  880-2-8816739',
	ph:'Ph: 880-2-9571450, 9571451'  },
	{
	branch: '4.Mitford Branch ',
	address: 'Address: Bismillah Tower 147/148, Mitford Road',
	fax:'Fax:  880-2-7314999',
	ph:'Ph: 880-2-7320620 - 1'  }
	
	];

 	/*$scope.branches = [ { 
	id:0,
	name: '1.Principal Office Branch',
	lastText: 'Address: 111-113, Motijheel C/A. Dhaka - 1000.',
	face:'Fax: 880-2-9566223',ph:'Ph: 880-2-9571450, 9571451' }	
	];
	*/
})





.controller('MapCtrl', function($scope, $state, $http,$ionicLoading,$timeout, $ionicHistory, $stateParams, Chats) {
$scope.chat = Chats.get($stateParams.chatId);

  
 $scope.mapCreated = function(map) {
 
    $scope.map = map;
	// alert(map);
	
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }
	
	$ionicLoading.show({
                template:'Getting current location...'
            });

  

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
   $ionicLoading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
	
	
	 $timeout(function() {
     $ionicLoading.hide();
   }, 2000);
  };
  
	  $timeout(function() {
     $ionicLoading.hide();
   }, 5000);
})


.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('AppCtrl', function($scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter, $ionicHistory,$window) {

	$scope.btnLogOut = function() {	
	
		var confirmPopup = $ionicPopup.confirm({
			 title: 'Log out now?',
			// template: 'Log out now?'
		   });
		   confirmPopup.then(function(res) {               
			 if(res) {
				//$state.go($state.current, {}, {reload: true});
				//$state.go($state.current, {}, {reload: true});
				//$state.go('signin', null, {location: 'replace'});
				//$state.go('signin');
				//$window.location.reload(true);
				//$state.transitionTo('signin', null, {'reload':true});
				
				//$rootScope.$ionicHistory.currentView = $rootScope.$ionicHistory.backView;
				//$state.go('signin');
				//$state.go('tab.signin');
				//temporary workaround to ensure reload
					//$state.go('transition', {destination: 'signin'});
					/*
					$state.transitionTo('signin', $state.$current.params, { 
					  reload: true, inherit: true, notify: true 
					});
					*/
					//$state.go('signin');
					  $state.go('tabs.signin', {});
			 
			 } else {
			   //console.log('You are not sure');
			 }
		   });
		   
		   
	 }
	 
	 $scope.changePassword = function() {
	 $state.go('app.changePassword');
	 }	
	 		
			
	// href="#/app/changePassword"
		
})

.controller('welcomeCtrl', function($scope, $state) {
//href="#/app/accBalance"
  $scope.btnAccountBalance = function () {
	 $state.go('app.accBalance');
  }
  
   $scope.btnAccountStatement = function () {
	 $state.go('app.accStatement');
  }

   $scope.btnFundTransfer = function () {
	 //$state.go('app.fundTranster');
	 $state.go('app.fundTranster');
  }

   $scope.btnFundTransferRequest = function () {
	 $state.go('app.fundTransterRequest');
  }
  
   $scope.btnTopUp = function () {
	 $state.go('app.talkTimeRecharge');
  }

     $scope.btnStopChequeLeaf = function () {
	 $state.go('app.stopChequeLeaf');
  }

  
     $scope.btnStopChequeStatusInquiry = function () {
	 $state.go('app.chequeStatusInquiry');
	 
  }
   $scope.btnElecticityBillPay=function(){
    $state.go('app.descobill');
   }

})

// **************************************Account Balance*******************************************************
// **************************************Account Balance*******************************************************
// **************************************Account Balance*******************************************************
// **************************************Account Balance*******************************************************

.controller('AccBalanceCtrl', function($scope, $state, $http, $rootScope, $ionicLoading,$timeout,$ionicHistory, $ionicScrollDelegate) {
$scope.responseArr = [];



        cusCode = $rootScope.cusCode;
		
		//mailID = $rootScope.mailID;
		//alert(mailID);
        //alert("cusCode: "+cusCode);
		
		$ionicLoading.show({
                template: 'Please Wait..'
            });
        $http({
          method: 'GET',
          
          url:  $rootScope.getServerIp+'BankAndroidConnectivity/AccountBalnaceSV',
          params: {cusCode:cusCode},
          //type:'JSON',
          headers : { 'Content-Type': 'application/json' }
        }).success(function(data, status, headers, config) {
            //alert("success..."+data.accountBalanceNodes.length);  
				 $ionicLoading.hide();
				
				
				  $scope.orig=data;
				 /*
            $scope.accountBalanceNodes = data.accountBalanceNodes; // response data
            $rootScope.accountBalanceNodes = data.accountBalanceNodes; // response data
           
            angular.forEach(data.accountBalanceNodes, function(accountBalanceNode, index) {
				$scope.accountTitle=accountBalanceNode.accountTitle;
               $scope.responseArr.push(accountBalanceNode);                
               // $state.go('accBalance');
				
            });   
			*/
            //alert($rootScope.responseArr.toString);
        }).error(function(data, status, headers, config) {
			 $ionicLoading.hide();
         
		   $ionicPopup.alert({
		  title: 'Unable to perform your request. Please Check your Device Internet Connection',
		  //template:'From date'
		  })
			
        });  

		
		
		$scope.$on('$ionicView.beforeLeave', function(){
   // alert("Before Leaving");
  
  $scope.orig='';

  });
  
  var adjusting = false;
    $scope.scrollMirror = function(from, to) {
    if (adjusting) {
      adjusting = false;
    } else {
      // Mirroring zoom level
      var zoomFrom = $ionicScrollDelegate.$getByHandle(from).getScrollView().getValues().zoom;
      var zoomTo = $ionicScrollDelegate.$getByHandle(to).getScrollView().getValues().zoom;

      if (zoomFrom != zoomTo) {
        $ionicScrollDelegate.$getByHandle(to).getScrollView().zoomTo(zoomFrom);
      }

      // Mirroring left position
      $ionicScrollDelegate.$getByHandle(to).scrollTo($ionicScrollDelegate.$getByHandle(from).getScrollPosition().left,
      $ionicScrollDelegate.$getByHandle(to).getScrollPosition().top);

      adjusting = true;
    }
  }
	
 $timeout(function() {
     $ionicLoading.hide();
   }, 6000);
		
})

// **************************************Account Statement*******************************************************
// **************************************Account Statement*******************************************************
// **************************************Account Statement*******************************************************
// **************************************Account Statement*******************************************************

.controller('AccStatementCtrl', function($scope, $state, $http, $rootScope,$ionicLoading,$ionicPopup,$timeout,$ionicPopup,$filter,$ionicScrollDelegate) {
		
		
		
		//cusCode = $rootScope.cusCode;
		mailID = $rootScope.mailID;
		//alert(mailID);
		sessionID = $rootScope.sessionID;
		//alert(sessionID);
				
		
		
		
	 $scope.SearchAction = function(search){
	 //alert(search.acToDate);
	 
		if( $scope.sourceAccount==null){
		
		 $ionicPopup.alert({
		  title: 'Please Enter Source Account',
		  //template:'From date'
		  })
		}else if(!search || ! search.acFromDate){
		//alert($scope.sourceAccount);
		//alert("From date required");
				 $ionicPopup.alert({
		  title: 'From date required',
		  //template:'From date'
		  })
		
		}else if(!search || ! search.acToDate){
		//alert("To date required");
		 $ionicPopup.alert({
		  title: 'To date required',
		  //template:'To date'
		  })
		}else{
		$scope.accountStatmentList='';
	//	alert(	(new Date(search.acToDate),'dd/MM/yyyy'));
		var f_from_date = $filter('date')(new Date(search.acFromDate), 'dd/MM/yyyy');
		 var f_to_date = $filter('date')(new Date(search.acToDate),'dd/MM/yyyy');
							//  alert(f_from_date);
  
		
		$ionicLoading.show({
                template: 'Please Wait..'
            });
						$http({
					  method: 'GET',
					  
					  url:  $rootScope.getServerIp+'BankAndroidConnectivity/AccountStatementTagCode',
					  params: {accountno: $scope.sourceAccount,fromDate:f_from_date,toDate:f_to_date,mailID:mailID,sessiongID:sessionID,companyCode:'001'},
					  //type:'JSON',
					  headers : { 'Content-Type': 'application/json' }
					}).success(function(data, status, headers, config) {
					
									//alert("success..."+data.loginNodes[0].errorCode);
							if(data.accountStatementTagCodeNodes[0].errorCode== 0) {
								//alert(data.accountStatementTagCodeNodes[0].errorMesage);
								//second request Begin
										 $http({
										  method: 'GET',									  
										  url:  $rootScope.getServerIp+'BankAndroidConnectivity/AccountBalanceStatement',
										  params: {mailID:mailID,sessiongID:sessionID},
										  //type:'JSON',
										  headers : { 'Content-Type': 'application/json' }
										}).success(function(data, status, headers, config) { 
											 $ionicLoading.hide();
											 $scope.accountStatmentList=data;
											 //alert('sucess');
										/*	$scope.accountStatementNodes = data.accountStatementNodes; // response data
											$rootScope.accountStatementNodes = data.accountStatementNodes; // response data
											$rootScope.responseArr = [];
											angular.forEach(data.accountStatementNodes, function(accountStatementNodes, index) {
												 $ionicLoading.hide();
												$rootScope.responseArr.push(accountStatementNodes);
												//aler(accountStatementNodes);
												//$state.go('accBalance');
												
											}); */  
										}).error(function(data, status, headers, config) {
											 $ionicLoading.hide();
										$ionicPopup.alert({
										  title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
										  })
											
										});  	
								
								//Second request End
								
								
								
							} else {
								$ionicLoading.hide();
								
							$ionicPopup.alert({
							  title:data.accountStatementTagCodeNodes[0].errorMesage,
							  //template:'From date'
							  })
							} 
										
						//alert($rootScope.responseArr.toString);
					}).error(function(data, status, headers, config) {
					 $ionicLoading.hide();
					$ionicPopup.alert({
					  title:'Unable to perform your request. Please Check your Device Internet Connection',
					  //template:'From date'
					  })
						
					});            
					// end 0
					
							
		
					
				$timeout(function() {
				 $ionicLoading.hide();
			   }, 3000);
		
		}
	 }
    
		$scope.$on('$ionicView.beforeLeave', function(){
				// alert("Before Leaving");	  
					$scope.accountStatmentList='';

		  });
	
	  var adjusting1 = false;
    $scope.scrollMirror1 = function(from1, to1) {
    if (adjusting1) {
      adjusting1 = false;
    } else {
      // Mirroring zoom level
      var zoomFrom1 = $ionicScrollDelegate.$getByHandle(from1).getScrollView().getValues().zoom;
      var zoomTo1 = $ionicScrollDelegate.$getByHandle(to1).getScrollView().getValues().zoom;

      if (zoomFrom1 != zoomTo1) {
        $ionicScrollDelegate.$getByHandle(to1).getScrollView().zoomTo1(zoomFrom1);
      }

      // Mirroring left position
      $ionicScrollDelegate.$getByHandle(to1).scrollTo($ionicScrollDelegate.$getByHandle(from1).getScrollPosition().left,
      $ionicScrollDelegate.$getByHandle(to1).getScrollPosition().top);

      adjusting1 = true;
    }
  }
	
	
	
   
                
        
$scope.update = function(sa) {
   $scope.sourceAccount = sa.item;
   // use $scope.selectedItem.code and $scope.selectedItem.name here
   // for other stuff ...
   //alert($scope.item);
}

	
	$timeout(function() {
     $ionicLoading.hide();
   }, 3000);
        
})



		
//***************Fund Transfer**********************************************************************************************************************************
//***************Fund Transfer**********************************************************************************************************************************
//***************Fund Transfer**********************************************************************************************************************************
//***************Fund Transfer**********************************************************************************************************************************


.controller('FundTransterCtrl', function($scope, $state, $http, $rootScope,$ionicLoading,$filter,$ionicPopup, $timeout) {
		//alert("Fund Transfer");
		
		//cusCode = $rootScope.cusCode;
		mailID = $rootScope.mailID;
		//alert(mailID);
		sessionID = $rootScope.sessionID;
		//alert(sessionID);
		
	
		 $scope.fundtransfer = { selectSourceAccount: "-Select One-" };
		 	// $scope.fundtransferDestrinatnionAccount = { selectDestrinationAccount: "-Select One-" }
		
	//************* Begin For Populate field Selecting by Source Account//****************
	        
		$scope.update = function(sa) {
		   $scope.sourceAccount = sa.item;
		   // use $scope.selectedItem.code and $scope.selectedItem.name here
		   // for other stuff ...
		   //alert($scope.item);
		   
		   $ionicLoading.show({
                template: 'Please Wait..'
            });
			$http({
				  method: 'GET',
				 
				  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDetailsSelectByAccountSV',
				  params: {mailID:mailID,sessiongID:sessionID,companyCode:'001',accountNo:$scope.sourceAccount},
				  //type:'JSON',				  
				  headers : { 'Content-Type': 'application/json' }
				}).success(function(data, status, headers, config) {
					//alert(data.accountDetailsSelectedByAccountNodes[0].accountTitle);   
						$scope.accountDetailsSelectedByAccountNodes = data.accountDetailsSelectedByAccountNodes; // response data
						$rootScope.accountDetailsSelectedByAccountNodes = data.accountDetailsSelectedByAccountNodes; // response data
						$rootScope.responseArr = [];
						angular.forEach(data.accountDetailsSelectedByAccountNodes, function(accountDetailsSelectedByAccountNodes, index) {
							$scope.accountTitle = accountDetailsSelectedByAccountNodes.accountTitle;
							$scope.availableBalance = accountDetailsSelectedByAccountNodes.availableBalance;
							$scope.currencyCode = accountDetailsSelectedByAccountNodes.currencyCode;
							//$ionicLoading.show();
									//$rootScope.responseArr.push(accountDetailsSelectedByAccountNodes);
												//alert(accountDetailsSelectedByAccountNodes);
												//$state.go('accBalance');
												
										//************For Begin Destintion Account **************
																				 $http({
											  method: 'GET',											  
											  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDestinationDetailsErrorCodeTagSV2',
											 // params: {cusCode:cusCode},
											  //type:'JSON',
											   params: {mailID:mailID,sessionID:sessionID,companyCode:'001',accountNo:$scope.sourceAccount,productCode:'FTR'},
											  headers : { 'Content-Type': 'application/json' }
											}).success(function(data, status, headers, config) {
												//alert(ata.fundTransferDestrianationDeatailsErrorCodeNodes[0].sErrorCode); 
													 if(data.fundTransferDestrianationDeatailsErrorCodeNodes[0].sErrorCode == 0) {
														//alert("success...");
														//*************** for Begin Destination Account List***********************
														$http({
															 method: 'GET',									  
															url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDestinationDetailsAccountListSV',
															params: {mailID:mailID,sessionID:sessionID},
																			  //type:'JSON',
															headers : { 'Content-Type': 'application/json' }
															}).success(function(data, status, headers, config) {                  
																				 //alert('sucess');
																 $ionicLoading.hide();
															$scope.destrinationaAccountListNodes = data.destrinationaAccountListNodes; // response data
															$rootScope.destrinationaAccountListNodes = data.destrinationaAccountListNodes; // response data
															$rootScope.responseArr = [];
															angular.forEach(data.destrinationaAccountListNodes, function(destrinationaAccountListNodes, index) {
																$ionicLoading.hide();
																$rootScope.responseArr.push(destrinationaAccountListNodes);
																					//aler(accountListDescription);
																					//$state.go('accBalance');
																	
																	});   
																}).error(function(data, status, headers, config) {
																	 $ionicLoading.hide();
																	$ionicPopup.alert({
																		 title:'Unable to perform your request. Please Check your Device Internet Connection',
																				  //template:'From date'
																		})
																});  
														//*************** for End Destination Account List***********************
													}else{
													$ionicLoading.hide();
													//alert(data.fundTransferDestrianationDeatailsErrorCodeNodes[0].sEerrorMessage);
													$ionicPopup.alert({
													 title:data.fundTransferDestrianationDeatailsErrorCodeNodes[0].sEerrorMessage,
															  //template:'From date'
													})
													
												}
																					
												//alert($rootScope.responseArr.toString);
											}).error(function(data, status, headers, config) {
												 $ionicLoading.hide();
													$ionicPopup.alert({
													 title:'Unable to perform your request. Please Check your Device Internet Connection',
															  //template:'From date'
													})
											});  
										//********** For End Destrination Account***************
								
								});   
						
					//alert($rootScope.responseArr.toString);
				}).error(function(data, status, headers, config) {
					 $ionicLoading.hide();
					$ionicPopup.alert({
						 title:'Unable to perform your request. Please Check your Device Internet Connection',
								  //template:'From date'
						})
			});  

			
			//Begin OTP
				$http({
							  method: 'GET',							 
							  url:  $rootScope.getServerIp+'BankAndroidConnectivity/OtpSendSV',
							   params: {mailID:mailID,sessionID:sessionID},
							 // params: {cusCode:cusCode},
							  //type:'JSON',
							  headers : { 'Content-Type': 'application/json' }
							}).success(function(data, status, headers, config) {
								//alert("success...");
									$ionicLoading.hide();
									$ionicPopup.alert({
													 title:data.otpBONodes[0].errorMessage,
															  //template:'From date'
													})
									
								//alert($rootScope.responseArr.toString);
							}).error(function(data, status, headers, config) {
								 $ionicLoading.hide();
								$ionicPopup.alert({
								 title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
								})
							}); 
							
							//End Otp
			
				$timeout(function() {
				 $ionicLoading.hide();
			   }, 3000);
		}
		
		
		//************* End For Populate field Selecting by Source Account  *************************
		
		// ****************Begin For Populate field Selecting by Destination Account***************
				$scope.DestinationUpdate = function(da) {
				//alert(da.destitionItem);
				 $scope.destinationAccount = da.destitionItem;
				 $ionicLoading.show({
                template: 'Please Wait..'
            });
				 
					   $http({
				  method: 'GET',
			
				  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDestrinationaAccountDestailsSelectByDestrinationAccount',
				 params: {mailID:mailID,sessionID:sessionID,destrinationAccountNo: $scope.destinationAccount},
				  //type:'JSON',
				  headers : { 'Content-Type': 'application/json' }
				}).success(function(data, status, headers, config) {
					//alert("success...");
					$ionicLoading.hide();
						$scope.destrinationAccountDetailsSelectByDestrinationAccount = data.destrinationAccountDetailsSelectByDestrinationAccount; // response data
						//$rootScope.destrinationAccountDetailsSelectByDestrinationAccount = data.destrinationAccountDetailsSelectByDestrinationAccount; // response data
											//$rootScope.responseArr = [];
						angular.forEach(data.destrinationAccountDetailsSelectByDestrinationAccount, function(destrinationAccountDetailsSelectByDestrinationAccount, index) {
						 $ionicLoading.hide();
						$scope.destinationAccountTitle=destrinationAccountDetailsSelectByDestrinationAccount.accountTitle;
						$scope.destinationCurrency=destrinationAccountDetailsSelectByDestrinationAccount.accountDescription;
							
												
					});   
						
					//alert($rootScope.responseArr.toString);
				}).error(function(data, status, headers, config) {
					 $ionicLoading.hide();
					$ionicPopup.alert({
					 title:'Unable to perform your request. Please Check your Device Internet Connection',
							  //template:'From date'
					})
				}); 
				
						$timeout(function() {
					 $ionicLoading.hide();
				   }, 3000);
				}
		
		// ****************End For Populate field Selecting by Destination Account***************

		
			// ****************Begin Fund Transfer Submit Execution***************
				$scope.DoSubmitAction = function(fundtransfer){
					if( $scope.sourceAccount==null){
					$ionicPopup.alert({
					  title: 'Source Account required',
					  //template:'To date'
					  })
					}else if(!fundtransfer || !fundtransfer.amount){
						$ionicPopup.alert({
					  title: 'Amount required',
					  //template:'To date'
					  })
					}else if($scope.destinationAccount==null){
						$ionicPopup.alert({
						  title: 'Destination Account required',
						  //template:'To date'
						  })
					}else if(!fundtransfer || !fundtransfer.pinCode){
						$ionicPopup.alert({
						  title: 'Pin Code required',
						  //template:'To date'
						  })
					}else{
						//alert("succcc");
						$ionicLoading.show({
							template: 'Please Wait..'
						});
						$http({
							  method: 'GET',							 
							  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferExecuteTagCodeSV',
							   params: {mailID:mailID,sessionID:sessionID,password:fundtransfer.pinCode,companyCode:'001',sourceAccountNo:$scope.sourceAccount,amount:fundtransfer.amount,destrinationAcountNo:$scope.destinationAccount,remarks:fundtransfer.remarks},
							 // params: {cusCode:cusCode},
							  //type:'JSON',
							  headers : { 'Content-Type': 'application/json' }
							}).success(function(data, status, headers, config) {
								//alert("success...");
									$ionicLoading.hide();
									 if(data.fundTransferExecuteTagCodeNodes[0].errorCode == 0) {
									 
										//Begin Clear
										$ionicLoading.hide();
										$scope.accountTitle = '';
										$scope.availableBalance = '';
										$scope.currencyCode = '';
										fundtransfer.amount='';
										fundtransfer.pinCode='';
										fundtransfer.remarks='';
										$scope.destinationAccountTitle='';
										$scope.destinationCurrency='';
										//fundtransfer.item=0;
										$scope.sourceAccount=null;
										 $scope.destinationAccount=null;
										 $scope.fundtransfer = { selectSourceAccount: "-Select One-" };
										
										
										//fundtransfer.destitionItem=0;
										//End Clear
									  $ionicPopup.alert({
										 title:data.fundTransferExecuteTagCodeNodes[0].errorMesage,
												  //template:'From date'
										})
									 }else {
									  $ionicLoading.hide();									 
									 $ionicPopup.alert({
										 title:data.fundTransferExecuteTagCodeNodes[0].errorMesage,
												  //template:'From date'
										})
									 }
									
								//alert($rootScope.responseArr.toString);
							}).error(function(data, status, headers, config) {
								 $ionicLoading.hide();
								$ionicPopup.alert({
								 title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
								})
							});  
							
									$timeout(function() {
							 $ionicLoading.hide();
						   }, 3000);
					}
				}
			// ****************End Fund Transfer End Submit Execution***************
			
				         $scope.$on('$ionicView.beforeLeave', function(fundtransfer){
			             // alert("Before Leaving");			  
									$scope.accountTitle = '';
										$scope.availableBalance = '';
										$scope.currencyCode = '';
										fundtransfer.amount='';
										fundtransfer.pinCode='';
										fundtransfer.remarks='';
										$scope.destinationAccountTitle='';
										$scope.destinationCurrency='';
										//fundtransfer.item=0;
										$scope.sourceAccount=null;
										 $scope.destinationAccount=null;
										 $scope.fundtransfer = { selectSourceAccount: "-Select One-" };
			                             });
				
			 $timeout(function() {
     $ionicLoading.hide();
   }, 5000);
})


// ***************************************Fund transfer request************************************************************************
.controller('fundTransterRequestCtrl', function($scope, $state, $http, $rootScope,$ionicLoading,$filter,$ionicPopup, $timeout) {
	//alert("Fund Transfer");
		
				 
		//cusCode = $rootScope.cusCode;
		mailID = $rootScope.mailID;
		//alert(mailID);
		sessionID = $rootScope.sessionID;
		//alert(sessionID);
		
		 $scope.fundtransfer = { selectSourceAccount: "-Select One-" };
		
			//************* Begin For Populate field Selecting by Source Account//****************
	        
		$scope.update = function(sa) {
		   $scope.sourceAccount = sa.item;
		   // use $scope.selectedItem.code and $scope.selectedItem.name here
		   // for other stuff ...
		   //alert($scope.item);
		   
		   $ionicLoading.show({
                template: 'Please Wait..'
            });
			$http({
				  method: 'GET',
				 
				  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDetailsSelectByAccountSV',
				  params: {mailID:mailID,sessiongID:sessionID,companyCode:'001',accountNo:$scope.sourceAccount},
				  //type:'JSON',				  
				  headers : { 'Content-Type': 'application/json' }
				}).success(function(data, status, headers, config) {
					//alert(data.accountDetailsSelectedByAccountNodes[0].accountTitle);   
						$scope.accountDetailsSelectedByAccountNodes = data.accountDetailsSelectedByAccountNodes; // response data
						$rootScope.accountDetailsSelectedByAccountNodes = data.accountDetailsSelectedByAccountNodes; // response data
						$rootScope.responseArr = [];
						angular.forEach(data.accountDetailsSelectedByAccountNodes, function(accountDetailsSelectedByAccountNodes, index) {
							$scope.accountTitle = accountDetailsSelectedByAccountNodes.accountTitle;
							$scope.availableBalance = accountDetailsSelectedByAccountNodes.availableBalance;
							$scope.currencyCode = accountDetailsSelectedByAccountNodes.currencyCode;
							//$ionicLoading.show();
									//$rootScope.responseArr.push(accountDetailsSelectedByAccountNodes);
												//alert(accountDetailsSelectedByAccountNodes);
												//$state.go('accBalance');
												
										//************For Begin Destintion Account **************
																				 $http({
											  method: 'GET',											  
											  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDestinationDetailsErrorCodeTagSV2',
											 // params: {cusCode:cusCode},
											  //type:'JSON',
											   params: {mailID:mailID,sessionID:sessionID,companyCode:'001',accountNo:$scope.sourceAccount,productCode:'FTR'},
											  headers : { 'Content-Type': 'application/json' }
											}).success(function(data, status, headers, config) {
												//alert(ata.fundTransferDestrianationDeatailsErrorCodeNodes[0].sErrorCode); 
													 if(data.fundTransferDestrianationDeatailsErrorCodeNodes[0].sErrorCode == 0) {
														//alert("success...");
														//*************** for Begin Destination Account List***********************
														$http({
															 method: 'GET',									  
															url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDestinationDetailsAccountListSV',
															params: {mailID:mailID,sessionID:sessionID},
																			  //type:'JSON',
															headers : { 'Content-Type': 'application/json' }
															}).success(function(data, status, headers, config) {                  
																				 //alert('sucess');
																 $ionicLoading.hide();
															$scope.destrinationaAccountListNodes = data.destrinationaAccountListNodes; // response data
															$rootScope.destrinationaAccountListNodes = data.destrinationaAccountListNodes; // response data
															$rootScope.responseArr = [];
															angular.forEach(data.destrinationaAccountListNodes, function(destrinationaAccountListNodes, index) {
																$ionicLoading.hide();
																$rootScope.responseArr.push(destrinationaAccountListNodes);
																					//aler(accountListDescription);
																					//$state.go('accBalance');
																	
																	});   
																}).error(function(data, status, headers, config) {
																	 $ionicLoading.hide();
																	$ionicPopup.alert({
																	 title:'Unable to perform your request. Please Check your Device Internet Connection',
																			  //template:'From date'
																	})
																});  
														//*************** for End Destination Account List***********************
													}else{
													$ionicLoading.hide();
													
													$ionicPopup.alert({
													 title:data.fundTransferDestrianationDeatailsErrorCodeNodes[0].sEerrorMessage,
															  //template:'From date'
													})
													
												}
																					
												//alert($rootScope.responseArr.toString);
											}).error(function(data, status, headers, config) {
												 $ionicLoading.hide();
													$ionicPopup.alert({
												 title:'Unable to perform your request. Please Check your Device Internet Connection',
														  //template:'From date'
												})
											});  
										//********** For End Destrination Account***************
								
								});   
						
					//alert($rootScope.responseArr.toString);
				}).error(function(data, status, headers, config) {
					 $ionicLoading.hide();
					$ionicPopup.alert({
						title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
					})
			}); 


				
			//Begin OTP
				$http({
							  method: 'GET',							 
							  url:  $rootScope.getServerIp+'BankAndroidConnectivity/OtpSendSV',
							   params: {mailID:mailID,sessionID:sessionID},
							 // params: {cusCode:cusCode},
							  //type:'JSON',
							  headers : { 'Content-Type': 'application/json' }
							}).success(function(data, status, headers, config) {
								//alert("success...");
									$ionicLoading.hide();
									$ionicPopup.alert({
													 title:data.otpBONodes[0].errorMessage,
															  //template:'From date'
													})
									
								//alert($rootScope.responseArr.toString);
							}).error(function(data, status, headers, config) {
								 $ionicLoading.hide();
								$ionicPopup.alert({
								 title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
								})
							}); 
							
							//End Otp

				$timeout(function() {
				 $ionicLoading.hide();
			   }, 3000);
		}
		
		
		//************* End For Populate field Selecting by Source Account  *************************
		
		// ****************Begin For Populate field Selecting by Destination Account***************
				$scope.DestinationUpdate = function(da) {
				//alert(da.destitionItem);
				 $scope.destinationAccount = da.destitionItem;
					$ionicLoading.show({
						template: 'Please Wait..'
					});
				 
					   $http({
				  method: 'GET',
			
				  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDestrinationaAccountDestailsSelectByDestrinationAccount',
				 params: {mailID:mailID,sessionID:sessionID,destrinationAccountNo: $scope.destinationAccount},
				  //type:'JSON',
				  headers : { 'Content-Type': 'application/json' }
				}).success(function(data, status, headers, config) {
					//alert("success...");
					$ionicLoading.hide();
						$scope.destrinationAccountDetailsSelectByDestrinationAccount = data.destrinationAccountDetailsSelectByDestrinationAccount; // response data
						//$rootScope.destrinationAccountDetailsSelectByDestrinationAccount = data.destrinationAccountDetailsSelectByDestrinationAccount; // response data
											//$rootScope.responseArr = [];
						angular.forEach(data.destrinationAccountDetailsSelectByDestrinationAccount, function(destrinationAccountDetailsSelectByDestrinationAccount, index) {
						 $ionicLoading.hide();
						$scope.destinationAccountTitle=destrinationAccountDetailsSelectByDestrinationAccount.accountTitle;
						$scope.destinationCurrency=destrinationAccountDetailsSelectByDestrinationAccount.accountDescription;
							
												
					});   
						
					//alert($rootScope.responseArr.toString);
				}).error(function(data, status, headers, config) {
					 $ionicLoading.hide();
					$ionicPopup.alert({
						title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
					})
				}); 
						$timeout(function() {
					 $ionicLoading.hide();
				   }, 3000);
				   
				}
		
		// ****************End For Populate field Selecting by Destination Account***************

			// ****************Begin Fund Transfer Submit Execution***************
				$scope.DoSubmitAction = function(fundtransfer){
				if(!fundtransfer || !fundtransfer.requestDate){
				$ionicPopup.alert({
					  title: 'Request Date required',
					  //template:'To date'
					  })
				}else if( $scope.sourceAccount==null){
					$ionicPopup.alert({
					  title: 'Source Account required',
					  //template:'To date'
					  })
					}else if(!fundtransfer || !fundtransfer.amount){
						$ionicPopup.alert({
					  title: 'Amount required',
					  //template:'To date'
					  })
					}else if($scope.destinationAccount==null){
						$ionicPopup.alert({
						  title: 'Destination Account required',
						  //template:'To date'
						  })
					}else if(!fundtransfer || !fundtransfer.pinCode){
						$ionicPopup.alert({
						  title: 'Pin Code required',
						  //template:'To date'
						  })
					}else{
						//alert("succcc");
						$ionicLoading.show({
							template: 'Please Wait..'
						});
						 var requestDate = $filter('date')(new Date(fundtransfer.requestDate), 'dd/MM/yyyy');
						//**********Begin First Execution *********
						$http({
							  method: 'GET',							 
							  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferRequestExecuteTagCodeSV',
							   params: {mailID:mailID,sessionID:sessionID,password:fundtransfer.pinCode,companyCode:'001',requestDate:requestDate,sourceAccountNo:$scope.sourceAccount,amount:fundtransfer.amount,destrinationAcountNo:$scope.destinationAccount,remarks:fundtransfer.remarks},
							 // params: {cusCode:cusCode},
							  //type:'JSON',
							  headers : { 'Content-Type': 'application/json' }
							}).success(function(data, status, headers, config) {
								//alert("success...");  
									 $ionicLoading.hide();
									if(data.fundTransferExecuteTagCodeNodes[0].errorCode == 0) {
									$ionicLoading.hide();
										//Begin Clear
											$scope.accountTitle = '';
											$scope.availableBalance = '';
											$scope.currencyCode ='';
											fundtransfer.amount='';
											fundtransfer.pinCode='';
											fundtransfer.remarks='';
											$scope.destinationAccountTitle='';
											$scope.destinationCurrency='';
											//fundtransfer.item=0;
											//fundtransfer.destitionItem=0;
											$scope.sourceAccount=null;
											$scope.destinationAccount=null;
											 $scope.fundtransfer = { selectSourceAccount: "-Select One-" };
											
										//End Clear
										$ionicPopup.alert({
											title:data.fundTransferExecuteTagCodeNodes[0].errorMesage,
															  //template:'From date'
										})
									}else{
									$ionicLoading.hide();										
											$ionicPopup.alert({
											title:data.fundTransferExecuteTagCodeNodes[0].errorMesage,
															  //template:'From date'
										})
									}
										
								//alert($rootScope.responseArr.toString);
							}).error(function(data, status, headers, config) {
								 $ionicLoading.hide();
								$ionicPopup.alert({
									title:'Unable to perform your request. Please Check your Device Internet Connection',
													  //template:'From date'
								})
							});            
										
					//**********End First Execution *********
						$timeout(function() {
						 $ionicLoading.hide();
					   }, 3000);
						 
					}
				}
			// ****************End Fund Transfer End Submit Execution***************
			
						$scope.$on('$ionicView.beforeLeave', function(fundtransfer){
			             // alert("Before Leaving");			  
											$scope.accountTitle = '';
											$scope.availableBalance = '';
											$scope.currencyCode ='';
											fundtransfer.amount='';
											fundtransfer.pinCode='';
											fundtransfer.remarks='';
											$scope.destinationAccountTitle='';
											$scope.destinationCurrency='';
											//fundtransfer.item=0;
											//fundtransfer.destitionItem=0;
											$scope.sourceAccount=null;
											$scope.destinationAccount=null;
											 $scope.fundtransfer = { selectSourceAccount: "-Select One-" };
			                      });
	 $timeout(function() {
     $ionicLoading.hide();
   }, 5000);
})

//********************************Talk Time Reacharge************************************************************************************************************
//********************************Talk Time Reacharge************************************************************************************************************
//********************************Talk Time Reacharge************************************************************************************************************
//********************************Talk Time Reacharge************************************************************************************************************

.controller('talkTimeRechargetCtrl', function($scope, $state, $http, $rootScope,$ionicLoading,$filter,$ionicPopup,$timeout) {
		
		
				 
		//cusCode = $rootScope.cusCode;
		mailID = $rootScope.mailID;
		//alert(mailID);
		sessionID = $rootScope.sessionID;
		//alert(sessionID);
		
		 $scope.talkTime = { selectSelectOption: "-Select One-" };
	
	
	//************* Begin For Populate field Selecting by Source Account//****************
	        
		$scope.update = function(sa) {
		   $scope.sourceAccount = sa.item;
		   // use $scope.selectedItem.code and $scope.selectedItem.name here
		   // for other stuff ...
		   //alert($scope.item);
		   
		   $ionicLoading.show({
                template: 'Please Wait..'
            });
			$http({
				  method: 'GET',
				 
				  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDetailsSelectByAccountSV',
				  params: {mailID:mailID,sessiongID:sessionID,companyCode:'001',accountNo:$scope.sourceAccount},
				  //type:'JSON',				  
				  headers : { 'Content-Type': 'application/json' }
				}).success(function(data, status, headers, config) {
					//alert(data.accountDetailsSelectedByAccountNodes[0].accountTitle);   
						$scope.accountDetailsSelectedByAccountNodes = data.accountDetailsSelectedByAccountNodes; // response data
						$rootScope.accountDetailsSelectedByAccountNodes = data.accountDetailsSelectedByAccountNodes; // response data
						$rootScope.responseArr = [];
						angular.forEach(data.accountDetailsSelectedByAccountNodes, function(accountDetailsSelectedByAccountNodes, index) {
							 $ionicLoading.hide();
							$scope.accountTitle = accountDetailsSelectedByAccountNodes.accountTitle;
							$scope.availableBalance = accountDetailsSelectedByAccountNodes.availableBalance;
							$scope.currencyCode = accountDetailsSelectedByAccountNodes.currencyCode;
							//$ionicLoading.show();
									//$rootScope.responseArr.push(accountDetailsSelectedByAccountNodes);
												//alert(accountDetailsSelectedByAccountNodes);
												//$state.go('accBalance');
												
										//************For Begin Destintion Account **************
											
										//********** For End Destrination Account***************
								
								});   
						
					//alert($rootScope.responseArr.toString);
				}).error(function(data, status, headers, config) {
					 $ionicLoading.hide();
					$ionicPopup.alert({
						title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
					})
			});  

						$timeout(function() {
				 $ionicLoading.hide();
			   }, 3000);
		}
		
		
		//************* End For Populate field Selecting by Source Account  *************************
		
		
		//*****************for Operator Begin***************
		   $http({
          method: 'GET',
          
          url:  $rootScope.getServerIp+'BankAndroidConnectivity/MobileOperatorsSV',
         // params: {cusCode:cusCode},
          //type:'JSON',
          headers : { 'Content-Type': 'application/json' }
        }).success(function(data, status, headers, config) {
            //alert("success...");            
				$scope.mobileOperatorsNamesAndCodesNodes = data.mobileOperatorsNamesAndCodesNodes; // response data
						$rootScope.mobileOperatorsNamesAndCodesNodes = data.mobileOperatorsNamesAndCodesNodes; // response data
						$rootScope.responseArr = [];
						angular.forEach(data.mobileOperatorsNamesAndCodesNodes, function(mobileOperatorsNamesAndCodesNodes, index) {
							$ionicLoading.hide();
							$rootScope.responseArr.push(mobileOperatorsNamesAndCodesNodes);
												//aler(accountListDescription);
												//$state.go('accBalance');
												
								
								});   
            //alert($rootScope.responseArr.toString);
        }).error(function(data, status, headers, config) {
            $ionicLoading.hide();
			$ionicPopup.alert({
			 title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
			})
        });            
		//*****************End Operator Begin***************
		
		//*************Begin Radio Button Value ********************
		/* $scope.radioSubmit = function(i) {
						 $scope.radioValue=i;						
				 // alert($scope.radioValue);
		}*/
		//*************End Radio Button Value ********************
		
		
		
		//*************Begin Mobile Operator Value ********************
		$scope.updateMoileOperator = function(mobileoperator) {
		   $scope.mobileoperator = mobileoperator.operator;
		   //alert($scope.mobileoperator);
				$http({
						  method: 'GET',
						 
						  url:  $rootScope.getServerIp+'BankAndroidConnectivity/MobileOperatorCodeSelectByMobileOperatorNameSV',
						  params: {operatorName: $scope.mobileoperator},
						  //type:'JSON',
						  headers : { 'Content-Type': 'application/json' }
						   }).success(function(data, status, headers, config) {
							
							$scope.mobileOperatorCode= data.mobileOperatorsCodesNodes[0].mobileOperatorCode
								
							
							
							}).error(function(data, status, headers, config) {
						   //$ionicLoading.hide();
							$ionicPopup.alert({
								 title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
								})
						}); 
		   
		   }
		//*************Begin Mobile Operator Value ********************
	
	//******************* Begin Talk Time Execution**********************
		$scope.DoSubmitAction = function(talkTime){
			if($scope.sourceAccount==null){
				$ionicPopup.alert({
						  title: 'Please Select Source Account',
						  //template:'To date'
						  })
			}else if($scope.mobileoperator==null){
					$ionicPopup.alert({
					title: 'Please Select Operator',
						  //template:'To date'
				})
			}else if($scope.radioValue==null){
				$ionicPopup.alert({
					title: 'Please Select Mobile Type',
						  //template:'To date'
				})
			}else if(!talkTime || ! talkTime.mobileNo){
				$ionicPopup.alert({
					title: 'Mobile Number Required',
						  //template:'To date'
				})
			}else if(!talkTime || ! talkTime.amount){
				$ionicPopup.alert({
					title: 'Amount Required',
						  //template:'To date'
				})
			}else if(!talkTime || ! talkTime.pinCode){
				$ionicPopup.alert({
					title: 'Pin Code Required',
						  //template:'To date'
				})
			}else {
					$ionicLoading.show({
						template: 'Please Wait..'
					});
											
						
						$http({
						  method: 'GET',
						 
						  url:  $rootScope.getServerIp+'BankAndroidConnectivity/MobileRechargeExecuteSV',
						  params: {mailID:mailID,sessionID:sessionID,pinCode:talkTime.pinCode,companyCode:'001',sourceAccount:$scope.sourceAccount,amount:talkTime.amount,mobileOperatorCode:$scope.mobileOperatorCode,selectedMobileType:$scope.radioValue,mobileNumber:talkTime.mobileNo},
						  //type:'JSON',
						  headers : { 'Content-Type': 'application/json' }
						   }).success(function(data, status, headers, config) {
							//alert("success");
								//Second Request Begin
								$ionicLoading.hide();
								   if(data.submitExecuteNodes[0].sumitExecuteErrorCode == 0) {
									
								//Second Request End
									$ionicLoading.hide();
									
									//Begin Clear
										$scope.accountTitle = '';
										$scope.availableBalance = '';
										$scope.currencyCode = '';
										talkTime.mobileNo='';
										talkTime.amount='';
										talkTime.pinCode='';
										$scope.sourceAccount=null;
										$scope.mobileoperator=null;
										 $scope.talkTime = { selectSelectOption: "-Select One-" };
									
									//End Clear
									
									$ionicPopup.alert({
										title: data.submitExecuteNodes[0].sumitExecuteErrorMessage,
											  //template:'To date'
									})
												
								}else{
									$ionicLoading.hide();									
									$ionicPopup.alert({
										title: data.submitExecuteNodes[0].sumitExecuteErrorMessage,
											  //template:'To date'
									})
									
								}
							
							}).error(function(data, status, headers, config) {
						   $ionicLoading.hide();
							$ionicPopup.alert({
								 title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
								})
						}); 
				$timeout(function() {
				 $ionicLoading.hide();
			   }, 3000);	
			}
			
		}
	//********************End Talk Time Execution******************
	
			$scope.$on('$ionicView.beforeLeave', function(talkTime){
			    // alert("Before Leaving");		  
				$scope.accountTitle = '';
				$scope.availableBalance = '';
				$scope.currencyCode = '';
			    talkTime.mobileNo='';
				talkTime.amount='';
				talkTime.pinCode='';
				$scope.sourceAccount=null;
				$scope.mobileoperator=null;
				$scope.talkTime = { selectSelectOption: "-Select One-" };		
							
			 });
			 
	$scope.radioGroupCheckvalue = [
    { text: "Prepaid", value: "PRE" },
    { text: "Post Paid", value: "PST" } ];
	
	  $scope.getSelectRadioButtonValue = function(item) {
    //console.log("Selected Serverside, text:", item.text, "value:", item.value);
	//alert( item.value);
	 $scope.radioValue=item.value;
  };
  
  
	 $timeout(function() {
     $ionicLoading.hide();
   }, 5000);
	
	
})


//*******************************Stop Cheque Leaf*********************************************
//*******************************Stop Cheque Leaf*********************************************
//*******************************Stop Cheque Leaf*********************************************
//*******************************Stop Cheque Leaf*********************************************

.controller('stopChequeLeafCtrl', function($scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter) {


 
				$ionicLoading.show({
						template: 'Please Wait..'
					});
							

	//Begin Account Number
	$http({
			 method: 'GET',
								  
			url:  $rootScope.getServerIp+'BankAndroidConnectivity/StopChequeLeafAccountTagCodeSV',
			params: {mailID: $rootScope.mailID,sessionID:$rootScope.sessionID},
								  //type:'JSON',
			 headers : { 'Content-Type': 'application/json' }
			}).success(function(data, status, headers, config) {                  
			//$scope.accountTagCode = data.accountTagCode; // response data
					//$rootScope.accountTagCode = data.accountTagCode; // response data
					//$rootScope.responseArr = [];
					angular.forEach(data.stopChequeAccountTagCode, function(stopChequeAccountTagCode, index) {
					if(data.stopChequeAccountTagCode[0].errorCode == 0) {
											//alert('sucess');
						
										 $http({
											 method: 'GET',									  
												url:  $rootScope.getServerIp+'BankAndroidConnectivity/StopChequeAccountList',
												params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID},
																	  //type:'JSON',
														headers : { 'Content-Type': 'application/json' }
														}).success(function(data, status, headers, config) {
																$rootScope.stopChequeAccountListNodes = [];
															angular.forEach(data.stopChequeAccountListNodes, function(stopChequeAccountListNodes, index) {
																$ionicLoading.hide();
																
																//alert(data.stopChequeAccountListNodes[0].accountNum);
																$rootScope.stopChequeAccountListNodes.push(stopChequeAccountListNodes);
																					//aler(accountListDescription);
																					//$state.go('accBalance');
																	
																	});  
																
															}).error(function(data, status, headers, config) {
															 $ionicLoading.hide();
																 $ionicPopup.alert({
																  title:'Unable to perform your request. Please Check your Device Internet Connection',
																  //template:'From date'
																  })
																
															});  						
											//second prorame
													
										}else{
										$ionicLoading.hide();				
									 $ionicPopup.alert({
									  title: data.stopChequeAccountTagCode[0].errorMessage,
									  //template:'From date'
									  })
									
										}
									});   
									//alert($rootScope.responseArr.toString);
								}).error(function(data, status, headers, config) {
								$ionicLoading.hide();          
								  $ionicPopup.alert({
									  title:'Unable to perform your request. Please Check your Device Internet Connection',
									  //template:'From date'
									  })
								}); 
	//End Account Number
	
		$scope.update = function(sa) {
		   $scope.accountNoChnageAccount = sa.item;
		   //alert($scope.ss);
		   
				 $ionicLoading.show({
						template: 'Please Wait..'
					});
					
					   $http({
				  method: 'GET',
			
				  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDetailsSelectByAccountSV',
				 params: {mailID:$rootScope.mailID,sessiongID:$rootScope.sessionID,companyCode:'001',accountNo: $scope.accountNoChnageAccount},
				  //type:'JSON',
				  headers : { 'Content-Type': 'application/json' }
				}).success(function(data, status, headers, config) {
					//alert("success...");
					$ionicLoading.hide();
						
						angular.forEach(data.accountDetailsSelectedByAccountNodes, function(accountDetailsSelectedByAccountNodes, index) {
						 $ionicLoading.hide();
						$scope.accountTitleselectByAccount=accountDetailsSelectedByAccountNodes.accountTitle;
						
							});   
							
							
							//For Leaves Begin************************
							$http({
									  method: 'GET',
								
									  url:  $rootScope.getServerIp+'BankAndroidConnectivity/StopChequeLeafLeavesTagCodeSV',
									 params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID,accountNo: $scope.accountNoChnageAccount},
									  //type:'JSON',
									  headers : { 'Content-Type': 'application/json' }
									}).success(function(data, status, headers, config) {
										
											if(data.stopChequeLeavesTagCodeNodes[0].errorCode == 0) {
												//Begin leaves List second
										
											$scope.leavesList = [];
												$http({
												  method: 'GET',
											
												  url:  $rootScope.getServerIp+'BankAndroidConnectivity/StopChequeLeafLeavesListSV',
												 params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID},
												  //type:'JSON',
												  headers : { 'Content-Type': 'application/json' }
												}).success(function(data, status, headers, config) {
													//alert("succcee");
													//leavesList=data;
													$rootScope.stopChequeLeavesListNodes = [];
														angular.forEach(data.stopChequeLeavesListNodes, function(stopChequeLeavesListNodes, index) {
														 $ionicLoading.hide();
														//$scope.accountTitleselectByAccount=accountDetailsSelectedByAccountNodes.accountTitle;
															$rootScope.stopChequeLeavesListNodes.push(stopChequeLeavesListNodes);
														
															});   
													
												}).error(function(data, status, headers, config) {
													 $ionicLoading.hide();
													$ionicPopup.alert({
													 title:'Unable to perform your request. Please Check your Device Internet Connection',
															  //template:'From date'
													})
												}); 
												
												//Edn Leaves List Second
												
												
												
											}else{
											 $ionicLoading.hide();
												$ionicPopup.alert({
												 title:data.stopChequeLeavesTagCodeNodes[0].errorMessage,
														  //template:'From date'
												})
											}
										
									}).error(function(data, status, headers, config) {
										 $ionicLoading.hide();
										$ionicPopup.alert({
										 title:'Unable to perform your request. Please Check your Device Internet Connection',
												  //template:'From date'
										})
									}); 
							//For Leaves End********************
												
					
						
					//alert($rootScope.responseArr.toString);
				}).error(function(data, status, headers, config) {
					 $ionicLoading.hide();
					$ionicPopup.alert({
					 title:'Unable to perform your request. Please Check your Device Internet Connection',
							  //template:'From date'
					})
				}); 
				
			 $timeout(function() {
				 $ionicLoading.hide();
			   }, 3000);
		   }
		   
		   //Reason Load Begin
		 $http({
			 method: 'GET',									  
				url:  $rootScope.getServerIp+'BankAndroidConnectivity/StopChequeLeafReasonSV',
				//params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID},
									  //type:'JSON',
						headers : { 'Content-Type': 'application/json' }
						}).success(function(data, status, headers, config) {
								$scope.stopChequeResaonListNodes = [];
							angular.forEach(data.stopChequeResaonListNodes, function(stopChequeResaonListNodes, index) {
								$ionicLoading.hide();
								
								//alert(data.stopChequeAccountListNodes[0].accountNum);
								$scope.stopChequeResaonListNodes.push(stopChequeResaonListNodes);
													//aler(accountListDescription);
													//$state.go('accBalance');
									
									});  
								
							}).error(function(data, status, headers, config) {
							 $ionicLoading.hide();
								 $ionicPopup.alert({
								  title:'Unable to perform your request. Please Check your Device Internet Connection',
								  //template:'From date'
								  })
								
							});
		   //Reason Load End
		   
		   //Begin getChequeNumberSelectByLeaves Code
		   
		   $scope.getChequeNumberSelectByLeaves = function(sa) {
		    $scope.ChequeNumberDescrioption=sa.selectedleaf;
		  // alert($scope.ChequeNumberDescrioption);
			 $http({
			 method: 'GET',									  
				url:  $rootScope.getServerIp+'BankAndroidConnectivity/StopChequeLeafChequeNoSelectByChequeDes',
				params: {chequeDes: $scope.ChequeNumberDescrioption},
									  //type:'JSON',
						headers : { 'Content-Type': 'application/json' }
						}).success(function(data, status, headers, config) {
							
									$scope.leafNo=data.stopChequeLeavesNumberNodes[0].chequeNumber;
									//alert($scope.chequeNumber);
									
								
							}).error(function(data, status, headers, config) {
							 $ionicLoading.hide();
								 $ionicPopup.alert({
								  title:'Unable to perform your request. Please Check your Device Internet Connection',
								  //template:'From date'
								  })
								
							});
		   }
		   
		    //End getChequeNumberSelectByLeaves
			
			//Begin Reason Code
				 $scope.getChequeResonCode = function(sa) {
		   $scope.reasonDescrioption=sa.selectedReason;
		 //  alert( $scope.reasonDescrioption);
			 $http({
			 method: 'GET',									  
				url:  $rootScope.getServerIp+'BankAndroidConnectivity/StopChequeLeafCodeSelectByReason',
				params: {resonDescription: $scope.reasonDescrioption},
									  //type:'JSON',
						headers : { 'Content-Type': 'application/json' }
						}).success(function(data, status, headers, config) {
							
									$scope.reasonCode=data.stopChequeResaonListNodes[0].reason;
									//alert($scope.ResonCode);
									
								
							}).error(function(data, status, headers, config) {
							 $ionicLoading.hide();
								 $ionicPopup.alert({
								  title:'Unable to perform your request. Please Check your Device Internet Connection',
								  //template:'From date'
								  })
								
							});
		   }
		   
			//End Reason Code
			
			//Begin Execution
			 $scope.btnExecution = function(stopChequeLeaf) {
				if( $scope.accountNoChnageAccount==null){
				$ionicPopup.alert({
					  title: 'Please Select Accont No',
					  //template:'To date'
					  })
				}else if($scope.ChequeNumberDescrioption==null){
					$ionicPopup.alert({
					  title: 'Please Select Leaf',
					  //template:'To date'
					  })
				}else if( $scope.reasonDescrioption==null){
				$ionicPopup.alert({
					  title: 'Please Select Reason',
					  //template:'To date'
					  })
				}else if(!stopChequeLeaf || !stopChequeLeaf.pinCode){
				$ionicPopup.alert({
					  title: 'Please Enter Your Pin Code',
					  //template:'To date'
					  })
				}else{
					//
					
					$ionicLoading.show({
						template: 'Please Wait..'
					});
							
					
				$http({
				 method: 'GET',									  
					url:  $rootScope.getServerIp+'BankAndroidConnectivity/StopChequeLeafExecutionSV',
					params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID,pinCode:stopChequeLeaf.pinCode,accountNumber:$scope.accountNoChnageAccount,leafNo:$scope.leafNo,reasonCode:$scope.reasonCode},
										  //type:'JSON',
							headers : { 'Content-Type': 'application/json' }
							}).success(function(data, status, headers, config) {
							$ionicLoading.hide();
								if(data.stopChequeLeafExecutionNodes[0].errorCode==0){
									//Begin Clear
									
									//$scope.accountTitleselectByAccount='';
									stopChequeLeaf.pinCode='';
										//$scope.accountNoChnageAccount=null;
										$scope.ChequeNumberDescrioption=null;
										 $scope.reasonDescrioption=null;
										 stopChequeLeaf.selectedleaf=0;
										 stopChequeLeaf.selectedReason=0;
										// $scope.stopChequeLeaf = { selectSelectOption: "-Select One-" };
									//End Clear
									$ionicPopup.alert({
									  title:data.stopChequeLeafExecutionNodes[0].errorMessage,
									  //template:'To date'
									  })
									
								}else{
										$ionicPopup.alert({
									  title:data.stopChequeLeafExecutionNodes[0].errorMessage,
									  //template:'To date'
									  })
								}
									
								}).error(function(data, status, headers, config) {
								 $ionicLoading.hide();
									 $ionicPopup.alert({
									  title:'Unable to perform your request. Please Check your Device Internet Connection',
									  //template:'From date'
									  })
									
								});
								
						 $timeout(function() {
					 $ionicLoading.hide();
				   }, 3000);
				}
			 }
			//End Execution
			
				$scope.$on('$ionicView.beforeLeave', function(stopChequeLeaf){
			    // alert("Before Leaving");		  
				stopChequeLeaf.pinCode='';
					//$scope.accountNoChnageAccount=null;
					$scope.ChequeNumberDescrioption=null;
					 $scope.reasonDescrioption=null;
					stopChequeLeaf.selectedleaf=0;
					 stopChequeLeaf.selectedReason=0;	
							
			 });
		 $timeout(function() {
     $ionicLoading.hide();
   }, 5000);

})


//******************************Cheque Status Inquiry*****************************************************************
//******************************Cheque Status Inquiry*****************************************************************
//******************************Cheque Status Inquiry*****************************************************************
//******************************Cheque Status Inquiry*****************************************************************

.controller('chequeStatusInquiryCtrl', function($scope,$ionicScrollDelegate, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter) {
 $scope.chequeInquiry = { selectSelectOption: "-Select One-" };
			$ionicLoading.show({
				template: 'Please Wait..'
				});
		
//Begin Account Number
	$http({
			 method: 'GET',
								  
			url:  $rootScope.getServerIp+'BankAndroidConnectivity/StopChequeLeafAccountTagCodeSV',
			params: {mailID: $rootScope.mailID,sessionID:$rootScope.sessionID},
								  //type:'JSON',
			 headers : { 'Content-Type': 'application/json' }
			}).success(function(data, status, headers, config) {                  
			//$scope.accountTagCode = data.accountTagCode; // response data
					//$rootScope.accountTagCode = data.accountTagCode; // response data
					//$rootScope.responseArr = [];
					angular.forEach(data.stopChequeAccountTagCode, function(stopChequeAccountTagCode, index) {
					if(data.stopChequeAccountTagCode[0].errorCode == 0) {
											//alert('sucess');
						
										 $http({
											 method: 'GET',									  
												url:  $rootScope.getServerIp+'BankAndroidConnectivity/StopChequeAccountList',
												params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID},
																	  //type:'JSON',
														headers : { 'Content-Type': 'application/json' }
														}).success(function(data, status, headers, config) {
																$rootScope.stopChequeAccountListNodes = [];
															angular.forEach(data.stopChequeAccountListNodes, function(stopChequeAccountListNodes, index) {
																$ionicLoading.hide();
																
																//alert(data.stopChequeAccountListNodes[0].accountNum);
																$rootScope.stopChequeAccountListNodes.push(stopChequeAccountListNodes);
																					//aler(accountListDescription);
																					//$state.go('accBalance');
																	
																	});  
																
															}).error(function(data, status, headers, config) {
															 $ionicLoading.hide();
																 $ionicPopup.alert({
																  title:'Unable to perform your request. Please Check your Device Internet Connection',
																  //template:'From date'
																  })
																
															});  						
											//second prorame
													
										}else{
										$ionicLoading.hide();				
									 $ionicPopup.alert({
									  title: data.stopChequeAccountTagCode[0].errorMessage,
									  //template:'From date'
									  })
									
										}
									});   
									//alert($rootScope.responseArr.toString);
								}).error(function(data, status, headers, config) {
								$ionicLoading.hide();          
								  $ionicPopup.alert({
									  title:'Unable to perform your request. Please Check your Device Internet Connection',
									  //template:'From date'
									  })
								}); 
	//End Account Number
	
	//Begin Set account Titlle On Change Account No
		 	$scope.update = function(sa) {
			
				$ionicLoading.show({
						template: 'Please Wait..'
					});
		
		   $scope.accountNoChnageAccount = sa.item;
					   $http({
				  method: 'GET',
			
				  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDetailsSelectByAccountSV',
				 params: {mailID:$rootScope.mailID,sessiongID:$rootScope.sessionID,companyCode:'001',accountNo: $scope.accountNoChnageAccount},
				  //type:'JSON',
				  headers : { 'Content-Type': 'application/json' }
				}).success(function(data, status, headers, config) {
					//alert("success...");
					$ionicLoading.hide();
						
						angular.forEach(data.accountDetailsSelectedByAccountNodes, function(accountDetailsSelectedByAccountNodes, index) {
						 $ionicLoading.hide();
						$scope.accountTitleselectByAccount=accountDetailsSelectedByAccountNodes.accountTitle;
						
						
							});   
							
								
												
					
						
					//alert($rootScope.responseArr.toString);
				}).error(function(data, status, headers, config) {
					 $ionicLoading.hide();
					$ionicPopup.alert({
					 title:'Unable to perform your request. Please Check your Device Internet Connection',
							  //template:'From date'
					})
				}); 
		   }
		   
	//Begin Set account Titlle On Change Account No
	
	//Begin Leaf Type
		 $http({
				method: 'GET',									  
				url:  $rootScope.getServerIp+'BankAndroidConnectivity/ChequeStatuInquiryTypeSV',
				//params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID},
									  //type:'JSON',
						headers : { 'Content-Type': 'application/json' }
						}).success(function(data, status, headers, config) {
								$rootScope.chqueStatusInquiryTypNodes = [];
							angular.forEach(data.chqueStatusInquiryTypNodes, function(chqueStatusInquiryTypNodes, index) {
								$ionicLoading.hide();							
								
								$rootScope.chqueStatusInquiryTypNodes.push(chqueStatusInquiryTypNodes);
													//aler(accountListDescription);
													//$state.go('accBalance');
									
									});  
								
			}).error(function(data, status, headers, config) {
				 $ionicLoading.hide();
				 $ionicPopup.alert({
				title:'Unable to perform your request. Please Check your Device Internet Connection',
								  //template:'From date'
				 })
								
		});  	
	//End Leaf Type
	
	//Begin Leaf Type Code
		$scope.getInquiryLeafTypCode = function(sa) {
		   $scope.leafTypeDescription = sa.item;
					   $http({
				  method: 'GET',
			
				  url:  $rootScope.getServerIp+'BankAndroidConnectivity/ChequeStatusTypCodeSelectByChequeStatusType',
				 params: {chequeStatusType: $scope.leafTypeDescription},
				  //type:'JSON',
				  headers : { 'Content-Type': 'application/json' }
				}).success(function(data, status, headers, config) {
					//alert("success...");
					$ionicLoading.hide();
					 $scope.leafTypeCode=data.chqueStatusInquiryTypCodeNodes[0].accountType;
					// alert( $scope.leafTypeCode);
					
					//alert($rootScope.responseArr.toString);
				}).error(function(data, status, headers, config) {
					 $ionicLoading.hide();
					$ionicPopup.alert({
					 title:'Unable to perform your request. Please Check your Device Internet Connection',
							  //template:'From date'
					})
				}); 
		   }
		   
	//End Leaf Type Code
	
	//Begin Execution
		$scope.btnChequeStatusInquiryExecution= function(chequeInquiry) {
				if( $scope.accountNoChnageAccount==null){
					$ionicPopup.alert({
				  title: 'Please Select Account No',
				  //template:'From date'
				  })
				}else if( $scope.leafTypeDescription==null){
						$ionicPopup.alert({
				  title: 'Please Select Leaf Type',
				  //template:'From date'
				  })
				}else if(!chequeInquiry || ! chequeInquiry.chFromDate){
						$ionicPopup.alert({
				  title: 'Please Enter Your From Date',
				  //template:'From date'
				  })
				}else if(!chequeInquiry || ! chequeInquiry.chToDate){
						$ionicPopup.alert({
				  title: 'Please Enter Your To Date',
				  //template:'From date'
				  })
				}else {
				
					$ionicLoading.show({
						template: 'Please Wait..'
					});
		
					 var f_from_date = $filter('date')(new Date(chequeInquiry.chFromDate), 'dd/MM/yyyy');
					 var f_to_date = $filter('date')(new Date(chequeInquiry.chToDate),'dd/MM/yyyy');
					 //alert(f_from_date);
					 // alert(f_to_date);
					 
					 
						//Begin Execution 
											
							 $http({
									method: 'GET',									  
									url:  $rootScope.getServerIp+'BankAndroidConnectivity/ChequeStatusExecutionSV',
									params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID,accountNumber:$scope.accountNoChnageAccount,chequeStatusTypeCode:$scope.leafTypeCode,fromDate: f_from_date,toDate:f_to_date},
														  //type:'JSON',
											headers : { 'Content-Type': 'application/json' }
											}).success(function(data, status, headers, config) {
												if(data.chequeStatusExecuteErrorCodeNodes[0].errorCode==0){
													
													//Begin Second program For View
															$scope.chequeStatusViewListNodes = [];			
														 $http({
																method: 'GET',									  
																url:  $rootScope.getServerIp+'BankAndroidConnectivity/ChequeStatusViewSV',
																params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID},
																					  //type:'JSON',
																		headers : { 'Content-Type': 'application/json' }
																		}).success(function(data, status, headers, config) {
																			//alert(data.chequeStatusViewListNodes[0].leafNo);
																			
																			angular.forEach(data.chequeStatusViewListNodes, function(chequeStatusViewListNodes, index) {
																				$ionicLoading.hide();							
																				
																				$scope.chequeStatusViewListNodes.push(chequeStatusViewListNodes);
																									//aler(accountListDescription);
																									//$state.go('accBalance');
																					
																					});  
																				
																		}).error(function(data, status, headers, config) {
																			 $ionicLoading.hide();
																			 $ionicPopup.alert({
																			title:'Unable to perform your request. Please Check your Device Internet Connection',
																							  //template:'From date'
																			 })
																				
														});
																				//End Second program For View
												
												}else{
												 $ionicLoading.hide();
												 $ionicPopup.alert({
													title:data.chequeStatusExecuteErrorCodeNodes[0].errorMessage,
																	  //template:'From date'
													 })
												}
													
								}).error(function(data, status, headers, config) {
									 $ionicLoading.hide();
									 $ionicPopup.alert({
									title:'Unable to perform your request. Please Check your Device Internet Connection',
													  //template:'From date'
									 })
													
							});  	
						//End Execution 
					 $timeout(function() {
					 $ionicLoading.hide();
				   }, 3000);
								 
				}
		
		}
	//End Execution
	
	
	 var adjusting = false;
    $scope.scrollMirror = function(from, to) {
    if (adjusting) {
      adjusting = false;
    } else {
      // Mirroring zoom level
      var zoomFrom = $ionicScrollDelegate.$getByHandle(from).getScrollView().getValues().zoom;
      var zoomTo = $ionicScrollDelegate.$getByHandle(to).getScrollView().getValues().zoom;

      if (zoomFrom != zoomTo) {
        $ionicScrollDelegate.$getByHandle(to).getScrollView().zoomTo(zoomFrom);
      }

      // Mirroring left position
      $ionicScrollDelegate.$getByHandle(to).scrollTo($ionicScrollDelegate.$getByHandle(from).getScrollPosition().left,
      $ionicScrollDelegate.$getByHandle(to).getScrollPosition().top);

      adjusting = true;
    }
  }
	
		$scope.$on('$ionicView.beforeLeave', function(chequeInquiry){
			    // alert("Before Leaving");		  
					$scope.chequeInquiry = { selectSelectOption: "-Select One-" };	
					chequeInquiry.chFromDate='';
					chequeInquiry.chToDate='';
					$scope.accountTitleselectByAccount='';
					$scope.chequeStatusViewListNodes = [];	
							
			 });
	
		 $timeout(function() {
     $ionicLoading.hide();
   }, 5000);
   
   $scope.chequeInquiry = { selectSelectOption: "-Select One-" };
	
})


// *****************Change Password********************************************************************************************************
// *****************Change Password********************************************************************************************************
// *****************Change Password********************************************************************************************************
// *****************Change Password********************************************************************************************************

.controller('changePasswordCtrl', function($scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter) {
			$scope.submitChangePassword = function(changePassword) {
			//alert("c");
					if(!changePassword || ! changePassword.oldPassword){
				 $ionicPopup.alert({
				  title: 'Old Password Required !',
				  //template:'From date'
				  })
				}else if(!changePassword || ! changePassword.newPassword){
					 $ionicPopup.alert({
					  title: 'New Password Required !',
					  //template:'From date'
					  })
				}else if(!changePassword || ! changePassword.confirmPassword){
				 $ionicPopup.alert({
					  title: 'Confirm Password Required !',
					  //template:'From date'
					  })
				
				}else if(!changePassword || ! changePassword.expiredDays){
					$ionicPopup.alert({
					  title: 'Expired Days Required!',
					  //template:'From date'
					  })
				}else {
				//alert("else");
				
				$ionicLoading.show({
						template: 'Please Wait..'
					});
		
				var newPassword  =changePassword.newPassword;
				var confirmPassword =changePassword.confirmPassword;
				
					if(newPassword==confirmPassword){
						//operatorName: $rootScope.userChangeID
								$http({
									  method: 'GET',									 
									  url:  $rootScope.getServerIp+'BankAndroidConnectivity/ChangePasswordSV',
									  params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID,oldPassword:changePassword.oldPassword,newPassword:newPassword,conFirmPassword:confirmPassword,expiredDays:changePassword.expiredDays},
									  //type:'JSON',
									  headers : { 'Content-Type': 'application/json' }
									   }).success(function(data, status, headers, config) {
										
										 $ionicLoading.hide();
									if(data.changePasswordNodes[0].sErrorCode == 2) {
									$ionicLoading.hide();										
										$ionicPopup.alert({
											title:data.changePasswordNodes[0].sErrorMessage,
															  //template:'From date'
										})
									}else{
									$ionicLoading.hide();										
											$ionicPopup.alert({
											title:data.changePasswordNodes[0].sErrorMessage,
															  //template:'From date'
										})
									}
											
										
										
										}).error(function(data, status, headers, config) {
									   $ionicLoading.hide();
										$ionicPopup.alert({
											 title:'Unable to perform your request. Please Check your Device Internet Connection',
													  //template:'From date'
											})
									}); 
					   
						
						
					}else{
					alert("New Password Not Match ");
					
					}
							
						$timeout(function() {
						 $ionicLoading.hide();
					   }, 3000);
				
				}
			
			}
			
		
		 $timeout(function() {
     $ionicLoading.hide();
   }, 2000);
   
   		$scope.$on('$ionicView.beforeLeave', function(changePassword){
			    // alert("Before Leaving");		  
				changePassword.oldPassword='';
				changePassword.newPassword='';
				changePassword.confirmPassword='';
				changePassword.expiredDays='';
				
					
			 });
			
})
.controller('RegistrationCtrl', function($scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter,$cordovaDevice) {
	//**********Begin Execute Registration***************************

		
	 $scope.DoRegistrationAction = function(reg) {
		if(!reg || ! reg.fullname){
			 $ionicPopup.alert({
			  title: 'Full Name Required !',
			  //template:'From date'
			  })
			//alert("Please Enter Your User ID");
			}else if(!reg || ! reg.userid){
				 $ionicPopup.alert({
			  title: 'User ID Required !',
			  //template:'From date'
			  })
			}else if(!reg || ! reg.customerid){
				 $ionicPopup.alert({
			  title: 'Customer ID Required !',
			  //template:'From date'
			  })
			}else if(!reg || ! reg.mobile){
				 $ionicPopup.alert({
			  title: 'Mobile No. Required !',
			  //template:'From date'
			  })
			}else if(navigator.connection.type == Connection.NONE){
			   $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device. Please Connect Internet"
                    })
	/*		
		if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device. Please Connect Internet"
                    })
                    
                }
            }	
		*/	}else {
			
			//alert("succcc");
						$ionicLoading.show({
							template: 'Please Wait..'
						});
						$http({
							  method: 'GET',							 
							  url:  $rootScope.getServerIp+'BankAndroidConnectivity/RegistrationSV',
							   params: {userId:reg.userid,uniqueID:$cordovaDevice.getUUID(),customerID:reg.customerid,customerName:reg.fullname,mobileNo:reg.mobile,email:reg.email},
							 // params: {cusCode:cusCode},
							  //type:'JSON',
							  headers : { 'Content-Type': 'application/json' }
							}).success(function(data, status, headers, config) {
								//alert("success...");
									$ionicLoading.hide();
									 if(data.registrationNodes[0].errorCode == 0) {
									 
										//Begin Clear
									
										reg.userid='';
										reg.customerid='';
										reg.fullname='';
										reg.mobile='';
										reg.email='';
										
										
										
										//fundtransfer.destitionItem=0;
										//End Clear
									  $ionicPopup.alert({
										 title:data.registrationNodes[0].errorMessage,
												  //template:'From date'
										})
									 }else {
									  $ionicLoading.hide();									 
									 $ionicPopup.alert({
										 title:data.registrationNodes[0].errorMessage,
												  //template:'From date'
										})
									 }
									
								//alert($rootScope.responseArr.toString);
							}).error(function(data, status, headers, config) {
								 $ionicLoading.hide();
								$ionicPopup.alert({
								 title:'Unable to perform your request. Please Check your Device Internet Connection',
										  //template:'From date'
								})
							});  
							
									$timeout(function() {
							 $ionicLoading.hide();
						   }, 3000);
			
			}
  };
	
	//**********End Execute Registration***************************
	
		$scope.$on('$ionicView.beforeLeave', function(reg){
			    //alert("Before Leaving");	
					
				reg.fullname='';
				reg.customerid='';
				reg.fullname='';
				reg.mobile='';
				reg.email='';
				
					
			 });
	
	 $timeout(function() {
     $ionicLoading.hide();
   }, 3000);
})


.controller('ChangePasswordWithErrorCodeCtrl', function($scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter) {
		$scope.goBack=function(){
		 $state.go('tabs.signin', {});
		}
		
			$scope.submitChangePassword = function(changePassword) {
			//alert("c");
					if(!changePassword || ! changePassword.oldPassword){
				 $ionicPopup.alert({
				  title: 'Old Password Required !',
				  //template:'From date'
				  })
				}else if(!changePassword || ! changePassword.newPassword){
					 $ionicPopup.alert({
					  title: 'New Password Required !',
					  //template:'From date'
					  })
				}else if(!changePassword || ! changePassword.confirmPassword){
				 $ionicPopup.alert({
					  title: 'Confirm Password Required !',
					  //template:'From date'
					  })
				
				}else if(!changePassword || ! changePassword.expiredDays){
					$ionicPopup.alert({
					  title: 'Expired Days Required!',
					  //template:'From date'
					  })
				}else {
				//alert("else");
				
				$ionicLoading.show({
						template: 'Please Wait..'
					});
		
				var newPassword  =changePassword.newPassword;
				var confirmPassword =changePassword.confirmPassword;
				
					if(newPassword==confirmPassword){
						//operatorName: $rootScope.userChangeID
								$http({
									  method: 'GET',									 
									  url:  $rootScope.getServerIp+'BankAndroidConnectivity/ChangePasswordSV',
									  params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID,oldPassword:changePassword.oldPassword,newPassword:newPassword,conFirmPassword:confirmPassword,expiredDays:changePassword.expiredDays},
									  //type:'JSON',
									  headers : { 'Content-Type': 'application/json' }
									   }).success(function(data, status, headers, config) {
										
										 $ionicLoading.hide();
									if(data.changePasswordNodes[0].sErrorCode == 2) {
									changePassword.oldPassword='';
									changePassword.newPassword='';
									changePassword.confirmPassword='';
									changePassword.expiredDays='';
									$ionicLoading.hide();										
										$ionicPopup.alert({
											title:data.changePasswordNodes[0].sErrorMessage,
															  //template:'From date'
										})
										 $state.go('tabs.signin', {});
										
									}else{
									$ionicLoading.hide();										
											$ionicPopup.alert({
											title:data.changePasswordNodes[0].sErrorMessage,
															  //template:'From date'
										})
									}
											
										
										
										}).error(function(data, status, headers, config) {
									   $ionicLoading.hide();
										$ionicPopup.alert({
											 title:'Unable to perform your request. Please Check your Device Internet Connection',
													  //template:'From date'
											})
									}); 
					   
						
						
					}else{
					alert("New Password Not Match ");
					
					}
							
						$timeout(function() {
						 $ionicLoading.hide();
					   }, 3000);
				
				}
			
			}
			
		
		 $timeout(function() {
     $ionicLoading.hide();
   }, 3000);
   
   		$scope.$on('$ionicView.beforeLeave', function(changePassword){
			    // alert("Before Leaving");		  
				changePassword.oldPassword='';
				changePassword.newPassword='';
				changePassword.confirmPassword='';
				changePassword.expiredDays='';
				
					
			 });
})


.controller('descoBilltCtrl', function($scope, $state, $http, $rootScope,$ionicLoading,$filter,$ionicPopup,$timeout) {
      $scope.fundtransfer = { selectSourceAccount: "-Select One-" };
	 
	 
	 
		$scope.update = function(sa) {
		   $scope.sourceAccount = sa.item;
		   // use $scope.selectedItem.code and $scope.selectedItem.name here
		   // for other stuff ...
		   //alert($scope.item);
		   
		  
		   
		   $ionicLoading.show({
                template: 'Please Wait..'
            });
			$http({
				  method: 'GET',
				 
				  url:  $rootScope.getServerIp+'BankAndroidConnectivity/FundTransferDetailsSelectByAccountSV',
				  params: {mailID: $rootScope.mailID,sessiongID:$rootScope.sessionID,companyCode:'001',accountNo:$scope.sourceAccount},
				  //type:'JSON',				  
				  headers : { 'Content-Type': 'application/json' }
				}).success(function(data, status, headers, config) {
					//alert(data.accountDetailsSelectedByAccountNodes[0].accountTitle);   
						$scope.accountDetailsSelectedByAccountNodes = data.accountDetailsSelectedByAccountNodes; // response data
						$rootScope.accountDetailsSelectedByAccountNodes = data.accountDetailsSelectedByAccountNodes; // response data
						$rootScope.responseArr = [];
						angular.forEach(data.accountDetailsSelectedByAccountNodes, function(accountDetailsSelectedByAccountNodes, index) {
							$scope.descoAccountTitle = accountDetailsSelectedByAccountNodes.accountTitle;
							$scope.descoAvailableBalance = accountDetailsSelectedByAccountNodes.availableBalance;
							$scope.descoCurrencyCode1 = accountDetailsSelectedByAccountNodes.currencyCode;
							//$ionicLoading.show();
									//$rootScope.responseArr.push(accountDetailsSelectedByAccountNodes);
												//alert(descoCurrencyCode);
												//$state.go('accBalance');
												
										//************For Begin Destintion Account **************
										
								
								});   
							$ionicLoading.hide();
						
					//alert($rootScope.responseArr.toString);
					
				}).error(function(data, status, headers, config) {
					 $ionicLoading.hide();
					$ionicPopup.alert({
						 title:'Unable to perform your request. Please Check your Device Internet Connection',
								  //template:'From date'
						})
			});  
			
			
						
			
				$timeout(function() {
				 $ionicLoading.hide();
			   }, 10000);
		}
		
		$scope.btnSearch=function(desco){
		if(!desco || ! desco.billNo){
		 $ionicPopup.alert({
					  title: 'Please Enter Bill No And Search',
					  //template:'From date'
					  })
		}else{
			  $ionicLoading.show({
                template: 'Please Wait..'
            });
			$http({
				  method: 'GET',
				 
				  url:  $rootScope.getServerIp+'BankAndroidConnectivity/ElectricityBillDetailsSV',
				  params: {mailID: $rootScope.mailID,sessionID:$rootScope.sessionID,billNo:desco.billNo},
				  //type:'JSON',				  
				  headers : { 'Content-Type': 'application/json' }
				}).success(function(data, status, headers, config) {
					//alert(data.accountDetailsSelectedByAccountNodes[0].accountTitle);   
						//$scope.accountDetailsSelectedByAccountNodes = data.accountDetailsSelectedByAccountNodes; // response data
						//$rootScope.accountDetailsSelectedByAccountNodes = data.accountDetailsSelectedByAccountNodes; // response data
						$rootScope.responseArr = [];
						angular.forEach(data.electricityBillDetailsNodes, function(electricityBillDetailsNodes, index) {
							$scope.customerAccount = electricityBillDetailsNodes.customerAccount;
							$scope.customerName = electricityBillDetailsNodes.customerName;
							$scope.meterNo = electricityBillDetailsNodes.meterNo;
							$scope.monthBill = electricityBillDetailsNodes.monthBill;
							$scope.dueDate = electricityBillDetailsNodes.dueDate;
							//$scope.billNo = electricityBillDetailsNodes.billNo;
							$scope.billAmount = electricityBillDetailsNodes.billAmount;
							$scope.vat = electricityBillDetailsNodes.vat;
							$scope.totalAmount = electricityBillDetailsNodes.totalAmount;
							$scope.errorCode = electricityBillDetailsNodes.errorCode;
							$scope.errorMessage = electricityBillDetailsNodes.errorMessage;						
												
										//************For Begin Destintion Account **************
										
								
								});   
							$ionicLoading.hide();
							
								$ionicPopup.alert({
											title:data.electricityBillDetailsNodes[0].errorMessage,
															  //template:'From date'
										})
						
					//alert($rootScope.responseArr.toString);
				}).error(function(data, status, headers, config) {
					 $ionicLoading.hide();
					$ionicPopup.alert({
						 title:'Unable to perform your request. Please Check your Device Internet Connection',
								  //template:'From date'
						})
			});  
			
			
						
			
				$timeout(function() {
				 $ionicLoading.hide();
			   }, 10000);
		}
		
		}
		
		$scope.DoSubmitDescoBill=function(desco){
		if($scope.sourceAccount==null){
		$ionicPopup.alert({
					  title: 'Please Select Source A/c',
					  //template:'From date'
					  })
		}else if(!desco || ! desco.billNo){
		 $ionicPopup.alert({
					  title: 'Please Enter Bill No And Search',
					  //template:'From date'
					  })
			}else if(!desco || ! desco.pineCode){
			 $ionicPopup.alert({
					  title: 'Plesse Enter Pine Code',
					  //template:'From date'
					  })
			}else{
			 
			 $http({
									  method: 'GET',									 
									  url:  $rootScope.getServerIp+'BankAndroidConnectivity/ElectricityBillExecuteSV',
									  params: {mailID:$rootScope.mailID,sessionID:$rootScope.sessionID,password:desco.pineCode,accountNo:$scope.sourceAccount,billNo:desco.billNo},
									  //type:'JSON',
									  headers : { 'Content-Type': 'application/json' }
									   }).success(function(data, status, headers, config) {
										
										 $ionicLoading.hide();
									if(data.electricityBillExecuteNodes[0].errorCode == 0) {
											$scope.descoAccountTitle = '';
							$scope.descoAvailableBalance = '';
							$scope.descoCurrencyCode1 = '';	
							desco.billNo='';							
							$scope.customerAccount = '';
							$scope.customerName = '';
							$scope.meterNo = '';
							$scope.monthBill = '';
							$scope.dueDate = '';							
							$scope.billAmount ='';
							$scope.vat = '';
							$scope.totalAmount = '';
							$scope.sourceAccount=null;
							 $scope.fundtransfer = { selectSourceAccount: "-Select One-" };
							 desco.pineCode='';
									$ionicLoading.hide();										
										$ionicPopup.alert({
											title:data.electricityBillExecuteNodes[0].errorMessage,
															  //template:'From date'
										})
									}else{
									$ionicLoading.hide();										
											$ionicPopup.alert({
												title:data.electricityBillExecuteNodes[0].errorMessage,
															  //template:'From date'
										})
									}
											
										
										
										}).error(function(data, status, headers, config) {
									   $ionicLoading.hide();
										$ionicPopup.alert({
											 title:'Unable to perform your request. Please Check your Device Internet Connection',
													  //template:'From date'
											})
									}); 
					   
						
			}
		
		}
		
		
		$scope.$on('$ionicView.beforeLeave', function(desco){
							
							
							$scope.descoAccountTitle = '';
							$scope.descoAvailableBalance = '';
							$scope.descoCurrencyCode1 = '';	
							desco.billNo='';							
							$scope.customerAccount = '';
							$scope.customerName = '';
							$scope.meterNo = '';
							$scope.monthBill = '';
							$scope.dueDate = '';							
							$scope.billAmount ='';
							$scope.vat = '';
							$scope.totalAmount = '';
							$scope.sourceAccount=null;
							 $scope.fundtransfer = { selectSourceAccount: "-Select One-" };
							 desco.pineCode='';
							
			 });
		
		
})



