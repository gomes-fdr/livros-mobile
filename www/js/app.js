// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'firebase','app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    //~ fb = new Firebase("https://project-2644857297739104734.firebaseio.com");
    
    // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAhsc8Pmy1oMm3-edOCZ2Tupf2Z-Zi_nkM",
        authDomain: "project-2644857297739104734.firebaseapp.com",
        databaseURL: "https://project-2644857297739104734.firebaseio.com",
        storageBucket: "project-2644857297739104734.appspot.com",
      };
      
      firebase.initializeApp(config);
      
      
      

  });
})
