// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives','ngCordova'])

.run(function($ionicPlatform,$cordovaGeolocation,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);


      var posOptions = {timeout: 10000, enableHighAccuracy: false};
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
          $rootScope.myLat  = position.coords.latitude;
          $rootScope.myLng = position.coords.longitude;
          console.log($rootScope.myLat)
        }, function(err) {
          // error
        });


      if (window.DeviceOrientationEvent) {
        // Listen for the deviceorientation event and handle the raw data
        window.addEventListener('deviceorientation', function(eventData) {
          var compassdir;

          if(event.webkitCompassHeading) {
            // Apple works only with this, alpha doesn't work
            compassdir = event.webkitCompassHeading;
            $rootScope.myHeading = compassdir;
            document.getElementById("arrow").style.transform = "rotate("+ compassdir+"deg)";
          }
          else compassdir = event.alpha;
          $rootScope.myHeading = compassdir;
          document.getElementById("arrow").style.transform = "rotate("+ compassdir+"deg)";
        });
      }

//testing
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
