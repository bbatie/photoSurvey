//TODO
//Edit PHP to create a unique directory for each location, must dynamically create on the server... in upload.php file
//

// Destination URL for PHP uploading
var phpUrl = "http://www.cincyplanet.com/testupload/upload.php";

var watch = null; //water for the magnetic heading

angular.module('app.controllers', [])

.controller('photoSurveyAppCtrl', function($scope,$rootScope,$cordovaGeolocation,$ionicPopup) {

    //Variables for the data we will capture
    // using rootScope to make it available to any controller
    $rootScope.fields = {
      myAddress: '',
      myCity: '',
      myState: '',
      myZip: '',
      structure: '',
      overgrown: '',
      foundationType: '',
      roofDamage: '',
      exteriorDamage: '',
      graffiti: '',
      boardedUp: '',
      otherNotes: ''
    };

    $rootScope.myPhotoIndex = null;

    $rootScope.myImage1 = '';
    $rootScope.myImage2 = '';
    $rootScope.myImage3 = '';
    $rootScope.myImage4 = '';
    $rootScope.myImage5 = '';
    $rootScope.myImage6 = '';
    $rootScope.myImage7 = '';
    $rootScope.myImage8 = '';
    $rootScope.myImage9 = '';
    $rootScope.myImage10 = '';
    $rootScope.myImage11 = '';
    $rootScope.myImage12 = '';

    $rootScope.myPhotoButton = true;
    $rootScope.myHeading = '124';
    $rootScope.myLat = '';
    $rootScope.myLng = '';







  })

.controller('propertyAddressCtrl', function($scope, $rootScope) {



})

.controller('photosOneCtrl', function($scope,$state,$rootScope,$ionicModal) {

    $rootScope.myPhotoIndex = 0;



    $rootScope.camStart = function(index) {
      $rootScope.myPhotoIndex = index;
        $state.go('camera');
    };

    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.openModal = function(myImage) {
      $rootScope.imageSrc = myImage;
      $scope.modal.show();
    };

})

.controller('photosTwoCtrl', function($scope,$rootScope,$ionicModal) {

    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.openModal = function(myImage) {
      $rootScope.imageSrc = myImage;
      $scope.modal.show();
    };

})

.controller('photosThreeCtrl', function($scope,$rootScope,$ionicModal) {

    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.openModal = function(myImage) {
      $rootScope.imageSrc = myImage;
      $scope.modal.show();
    };

})

.controller('questionnaireCtrl', function($scope,$rootScope) {

})

.controller('otherNotesCtrl', function($scope,$rootScope,$ionicPopup,$cordovaFile,$cordovaFileTransfer, $ionicLoading,$state, $compile) {


    $rootScope.mapImage = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x600&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318 &markers=color:red%7Clabel:C%7C40.718217,-73.998284";

    $scope.show = function() {
      $ionicLoading.show({
        template: 'Uploading...'
      }).then(function(){
        console.log("The loading indicator is now displayed");
      });
    };
    $scope.hide = function(){
      $ionicLoading.hide().then(function(){
        console.log("The loading indicator is now hidden");
      });
    };


    $rootScope.writeFileData = function(){

      $scope.show();

      $scope.myDataText = "Property Address: " + $rootScope.fields.myAddress + "<br>" +
        "Property City: " + $rootScope.fields.myCity + "<br>" +
        "Property State: " + $rootScope.fields.myState + "<br>" +
        "Property Zip: " + $rootScope.fields.myZip + "<br>" +
        "Is there a structure on the property? "+ $rootScope.fields.structure + "<br>" +
        "Is the property overgrown?: "+ $rootScope.fields.overgrown + "<br>" +
        "Foundation Type? "+ $rootScope.fields.foundationType + "<br>" +
        "Is there roof damage? "+ $rootScope.fields.roofDamage + "<br>" +
        "Is there exterior damage? "+ $rootScope.fields.exteriorDamage + "<br>" +
        "Is there graffiti? "+ $rootScope.fields.graffiti + "<br>" +
        "Are windows or doors boarded up?: "+ $rootScope.fields.boardedUp + "<br>" +
        "Other notes or observations: "+ $rootScope.fields.otherNotes + "<br>" +
        $rootScope.mapImage;


      $cordovaFile.writeFile(cordova.file.dataDirectory, "propertyData.txt", $scope.myDataText.toString(), true)
        .then(function (success) {
          // success
         /* var url = "http://www.cincyplanet.com/testupload/upload.php";*/
          // File name only
          var filename = $rootScope.fields.myAddress + '_propertyData.txt';

          var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "text/txt",
            params : {'directory': $rootScope.fields.myAddress, 'fileName':filename}
          };

          $cordovaFileTransfer.upload(phpUrl, cordova.file.dataDirectory + "/propertyData.txt", options).then(function (result) {
            console.log("SUCCESS for text file: " + JSON.stringify(result.response));

            // alert('Uploaded');
          }, function (err) {
            myError = myError + " | " + JSON.stringify(err) ;
            console.log("ERRORS: " + JSON.stringify(myError));
          }, function (progress) {
            // PROGRESS HANDLING GOES HERE
            //   $cordovaProgress.showDeterminateWithLabel(true, progress, "Uploading " + (myImage+1) + " of 12")
          });


          $scope.uploadImagetoAWS(0);
          $scope.uploadImagetoAWS(1);
          $scope.uploadImagetoAWS(2);
          $scope.uploadImagetoAWS(3);
          $scope.uploadImagetoAWS(4);
          $scope.uploadImagetoAWS(5);
          $scope.uploadImagetoAWS(6);
          $scope.uploadImagetoAWS(7);
          $scope.uploadImagetoAWS(8);
          $scope.uploadImagetoAWS(9);
          $scope.uploadImagetoAWS(10);
          $scope.uploadImagetoAWS(11);
          $scope.uploadImagetoAWS(12);


          /*$ionicPopup.alert({
            title: "File Saved!",
            template: $scope.myDataText
          });*/
        }, function (error) {
          // error
        });

    }



      var myImage = 0;

     $scope.uploadImagetoAWS = function(myImage){

        var targetPath = null;

        $rootScope.myError = '';
        //for (i = 0; i < 11;i++)
        //{
        //File for Upload
       // var targetPath =  $rootScope.myImage1;//$scope.formData.image;

       // File name only
       var filename = $rootScope.fields.myAddress + '_PHOTOSURVEY_' + (myImage+1) + '.jpg';


       if(myImage == 0){targetPath =  $rootScope.myImage1;}
         if(myImage == 1){targetPath =  $rootScope.myImage2;}
         if(myImage == 2){targetPath =  $rootScope.myImage3;}
         if(myImage == 3){targetPath =  $rootScope.myImage4;}
         if(myImage == 4){targetPath =  $rootScope.myImage5;}
         if(myImage == 5){targetPath =  $rootScope.myImage6;}
         if(myImage == 6){targetPath =  $rootScope.myImage7;}
         if(myImage == 7){targetPath =  $rootScope.myImage8;}
         if(myImage == 8){targetPath =  $rootScope.myImage9;}
         if(myImage == 9){targetPath =  $rootScope.myImage10;}
         if(myImage == 10){targetPath =  $rootScope.myImage11;}
         if(myImage == 11){targetPath =  $rootScope.myImage12;}
       if(myImage == 12){
         targetPath = $rootScope.mapImage;
         filename = $rootScope.fields.myAddress + '_PHOTOSURVEY_Map_Image.jpg';
         console.log("Image target: " + myImage + " ||||" + targetPath);
       }


        var options = {
          fileKey: "file",
          fileName: filename,
          chunkedMode: false,
          mimeType: "image/jpg",
          params : {'directory': $rootScope.fields.myAddress, 'fileName':filename, 'imageNumber':myImage,'mapImage':null}
        };

        $cordovaFileTransfer.upload(phpUrl, targetPath, options).then(function (result) {
          console.log("SUCCESS for Image " + (myImage +1) + " : " + JSON.stringify(result.response));

          if(myImage == 12){
            $scope.hide();
            $state.go('finished');

            /*var alertPopup = $ionicPopup.alert({
              title: 'Finished!',
              template: 'Photos and text file have been uploaded.'
            });

            alertPopup.then(function(res) {
              console.log('Files uploaded!');

            });*/
          }

          // alert('Uploaded');
        }, function (err) {
          $rootScope.myError = $rootScope.myError + " | " + JSON.stringify(err) ;
          console.log("ERRORS: " + JSON.stringify($rootScope.myError));
          if(myImage == 12) {
            $scope.hide();
          }
         // $scope.hide();

        }, function (progress) {
          // PROGRESS HANDLING GOES HERE
       //   $cordovaProgress.showDeterminateWithLabel(true, progress, "Uploading " + (myImage+1) + " of 12")
        });


     }




///
    /////
    //

    ////
    ///

    function initialize() {
      var myLatlng = new google.maps.LatLng(43.07493,-89.381388);

      var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

      //Marker + infowindow + angularjs compiled ng-click
      var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
      var compiled = $compile(contentString)($scope);

      var infowindow = new google.maps.InfoWindow({
        content: compiled[0]
      });

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Uluru (Ayers Rock)'
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

      $scope.map = map;
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    $scope.centerOnMe = function() {
      if(!$scope.map) {
        return;
      }

      $scope.loading = $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: false
      });

      navigator.geolocation.getCurrentPosition(function(pos) {
        $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        $scope.loading.hide();
      }, function(error) {
        alert('Unable to get location: ' + error.message);
      });
    };

    $scope.clickTest = function() {
      alert('Example of infowindow with ng-click')
    };

















//
///
///
///
//

//END CTRL
})

.controller('finishedCtrl', function($scope,$rootScope,$cordovaFileTransfer) {

})

.controller('cameraCtrl', function($scope,$state,$rootScope,$cordovaDeviceOrientation,$cordovaGeolocation,$cordovaFileTransfer) {



    //Start watching heading:
    var options = {
      frequency: 100
    };

    watch = $cordovaDeviceOrientation.watchHeading(options).then(
      null,
      function(error) {
        // An error occurred
      },
      function(result) {   // updates constantly (depending on frequency value)
        // var magneticHeading = result.magneticHeading;
        //$rootScope.myHeading = Math.round(result.magneticHeading);
        //console.log($rootScope.myHeading);



        //document.getElementById("arrow").style.transform = "rotate("+ $rootScope.myHeading+"deg)";

        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function (position) {
            $rootScope.myLat  = position.coords.latitude;
            $rootScope.myLng = position.coords.longitude;


          }, function(err) {
            // error
          });

      });


$scope.cancelSnap = function(){
  switch ( $rootScope.myPhotoIndex ) {
    case 1:
      $state.go('photosOne');
      break;
    case 2:
      $state.go('photosOne');
      break;
    case 3:
     $state.go('photosOne');
      break;
    case 4:
     $state.go('photosOne');
      break;
    case 5:
     $state.go('photosTwo');
      break;
    case 6:
      $state.go('photosTwo');
      break;
    case 7:
      $state.go('photosTwo');
      break;
    case 8:
      $state.go('photosTwo');
      break;
    case 9:
      $state.go('photosThree');
      break;
    case 10:
      $state.go('photosThree');
      break;
    case 11:
      $state.go('photosThree');
      break;
    case 12:
      $state.go('photosThree');
      break;
  }
};

  ezar.initializeVideoOverlay(
      function() {

        ezar.getBackCamera().start();
      },
      function(error) {
        alert("ezar initialization failed");
      });

    $scope.takeSnap = function(){
      $rootScope.myPhotoButton = false;
     // var myGetGps = $interval( function(){ $scope.getGPS(); }, 1000);
      ezar.snapshot(
        function(base64EncodedImage) {
          switch ( $rootScope.myPhotoIndex ) {
            case 1:
              $rootScope.myImage1 = base64EncodedImage;
              $state.go('photosOne');
                  break;
            case 2:
              $rootScope.myImage2 = base64EncodedImage;
              //do something with snapshot image here
              $state.go('photosOne');
              break;
            case 3:
              $rootScope.myImage3 = base64EncodedImage;
              //do something with snapshot image here
              $state.go('photosOne');
              break;
            case 4:
              $rootScope.myImage4 = base64EncodedImage;
              //do something with snapshot image here
              $state.go('photosOne');
              break;
            case 5:
              $rootScope.myImage5 = base64EncodedImage;
              //do something with snapshot image here
              $state.go('photosTwo');
              break;
            case 6:
              $rootScope.myImage6 = base64EncodedImage;
              //do something with snapshot image here
              $state.go('photosTwo');
              break;
            case 7:
              $rootScope.myImage7 = base64EncodedImage;
              //do something with snapshot image here
              $state.go('photosTwo');
              break;
            case 8:
              $rootScope.myImage8 = base64EncodedImage;
              //do something with snapshot image here
              $state.go('photosTwo');
              break;
            case 9:
              $rootScope.myImage9 = base64EncodedImage;
              //do something with snapshot image here
              $state.go('photosThree');
              break;
            case 10:
              $rootScope.myImage10 = base64EncodedImage;
              //do something with snapshot image here
              $state.go('photosThree');
              break;
            case 11:
              $rootScope.myImage11 = base64EncodedImage;
              //do something with snapshot image here
              $state.go('photosThree');
              break;
            case 12:
              $rootScope.myImage12 = base64EncodedImage;
              //do something with snapshot image here
              $state.go('photosThree');
              break;
          }
          $rootScope.myPhotoButton = true;
          //watch.clearWatch();
         $cordovaDeviceOrientation.clearWatch(watch.watchId)
            .then(function(result) {
              // Success!
            }, function(err) {
              // An error occurred
            });

        //  $interval.cancel(myGetGps);
          //

        },
        function(error) {
          alert("ezar snapshot failed");
        },
        {"saveToPhotoAlbum": false,
          "encoding": ezar.ImageEncoding.PNG
        }
      );

    }



})

