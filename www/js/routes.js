angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('photoSurveyApp', {
    url: '/main',
    templateUrl: 'templates/photoSurveyApp.html',
    controller: 'photoSurveyAppCtrl'
  })

  .state('propertyAddress', {
    url: '/address',
    templateUrl: 'templates/propertyAddress.html',
    controller: 'propertyAddressCtrl'
  })

  .state('photosOne', {
    url: '/photos1',
    templateUrl: 'templates/photosOne.html',
    controller: 'photosOneCtrl'
  })

  .state('photosTwo', {
    url: '/photos2',
    templateUrl: 'templates/photosTwo.html',
    controller: 'photosTwoCtrl'
  })

  .state('photosThree', {
    url: '/photos3',
    templateUrl: 'templates/photosThree.html',
    controller: 'photosThreeCtrl'
  })

  .state('questionnaire', {
    url: '/questionnaire',
    templateUrl: 'templates/questionnaire.html',
    controller: 'questionnaireCtrl'
  })

  .state('otherNotes', {
    url: '/notes',
    templateUrl: 'templates/otherNotes.html',
    controller: 'otherNotesCtrl'
  })

  .state('finished', {
    url: '/finsihed',
    templateUrl: 'templates/finished.html',
    controller: 'finishedCtrl'
  })

  .state('camera', {
    url: '/camera',
    templateUrl: 'templates/camera.html',
    controller: 'cameraCtrl'
  })

$urlRouterProvider.otherwise('/main')

  

});