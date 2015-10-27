angular.module('starter.controllers', ['leaflet-directive'])

.controller('AlertsCtrl', function($scope) {

console.log('AlertsCtrl');

})
  .controller('ReportCtrl', function($scope,$ionicPlatform, $cordovaCamera, $cordovaFile, $cordovaSocialSharing) {

    console.log('ReportCtrl');

    $scope.images = [];

    $scope.addImage = function() {
      console.log("add image");

      var options = {
        destinationType : Camera.DestinationType.FILE_URI,
        sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
        allowEdit : false,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
      };


      // 3
      $cordovaCamera.getPicture(options).then(function(imageData) {

        // 4
        onImageSuccess(imageData);

        function onImageSuccess(fileURI) {
          createFileEntry(fileURI);
        }

        function createFileEntry(fileURI) {
          window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
        }

        // 5
        function copyFile(fileEntry) {
          var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
          var newName = makeid() + name;

          window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
              fileEntry.copyTo(
                fileSystem2,
                newName,
                onCopySuccess,
                fail
              );
            },
            fail);
        }

        // 6
        function onCopySuccess(entry) {
          $scope.$apply(function () {
            $scope.images.push(entry.nativeURL);
          });
        }

        function fail(error) {
          console.log("fail: " + error.code);
        }

        function makeid() {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for (var i=0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          return text;
        }

      }, function(err) {
        console.log(err);
      });
    }

    $scope.urlForImage = function(imageName) {
      var name = imageName.substr(imageName.lastIndexOf('/') + 1);
      var trueOrigin = cordova.file.dataDirectory + name;


      return trueOrigin;
    }


    //social sharing
    $ionicPlatform.ready(function() {

      $scope.shareAnywhere = function() {
          $cordovaSocialSharing.share("ionic test", "Test subject", "", "");
        }

      $scope.shareViaFacebook = function(message, image, link) {

        $cordovaSocialSharing.canShareVia("facebook", message, image, link).then(function(result) {
          $cordovaSocialSharing.shareViaFacebook(message, image, link);
        }, function(error) {
          alert("Cannot share on facebook");
        });
      }
    });
  })
  .controller('FeedCtrl', function($scope) {

    console.log('FeedCtrl');
  })
.controller('HomeCtrl', function($scope, facilitylist) {
  $scope.facilitylist = facilitylist.all();

    console.log('HomeCtrl');
})

.controller('FacilityDetailCtrl', function($scope, $stateParams, facilitylist) {

    console.log('FacilityDetailCtrl');
  $scope.facility = facilitylist.get($stateParams.FacilityId);
})

.controller('SettingsCtrl', function($scope, $cordovaPush, $cordovaDialogs, $cordovaMedia, $cordovaToast, ionPlatform, $http) {
    console.log('SettingsCtrl');

    $scope.notifications = [];

    // call to register automatically upon device ready
    ionPlatform.ready.then(function (device) {
      $scope.register();
    });

    // Register
    $scope.register = function () {
      var config = null;


      if (ionic.Platform.isIOS()) {
        config = {
          "badge": "true",
          "sound": "true",
          "alert": "true"
        }
      }

      $cordovaPush.register(config).then(function (result) {
        console.log("Register success " + result);

        $cordovaToast.showShortCenter('Registered for push notifications');
        $scope.registerDisabled=true;
        // ** NOTE: Android regid result comes back in the pushNotificationReceived, only iOS returned here
        if (ionic.Platform.isIOS()) {
          $scope.regId = result;
          //storeDeviceToken("ios");
        }
      }, function (err) {
        console.log("Register error " + err)
      });

    }

    // Notification Received
    $scope.$on('$cordovaPush:notificationReceived', function (event, notification) {
      console.log(JSON.stringify([notification]));
      if (ionic.Platform.isAndroid()) {
        handleAndroid(notification);
      }
      else if (ionic.Platform.isIOS()) {
        handleIOS(notification);
        $scope.$apply(function () {
          $scope.notifications.push(JSON.stringify(notification.alert));
        })
      }
    });

    // IOS Notification Received Handler
    function handleIOS(notification) {
      // The app was already open but we'll still show the alert and sound the tone received this way. If you didn't check
      // for foreground here it would make a sound twice, once when received in background and upon opening it from clicking
      // the notification when this code runs (weird).
      if (notification.foreground == "1") {
        // Play custom audio if a sound specified.
        if (notification.sound) {
          var mediaSrc = $cordovaMedia.newMedia(notification.sound);
          mediaSrc.promise.then($cordovaMedia.play(mediaSrc.media));
        }

        if (notification.body && notification.messageFrom) {
          $cordovaDialogs.alert(notification.body, notification.messageFrom);
        }
        else $cordovaDialogs.alert(notification.alert, "Push Notification Received");

        if (notification.badge) {
          $cordovaPush.setBadgeNumber(notification.badge).then(function (result) {
            console.log("Set badge success " + result)
          }, function (err) {
            console.log("Set badge error " + err)
          });
        }
      }
      // Otherwise it was received in the background and reopened from the push notification. Badge is automatically cleared
      // in this case. You probably wouldn't be displaying anything at this point, this is here to show that you can process
      // the data in this situation.
      else {
        if (notification.body && notification.messageFrom) {
          $cordovaDialogs.alert(notification.body, "(RECEIVED WHEN APP IN BACKGROUND) " + notification.messageFrom);
        }
        else $cordovaDialogs.alert(notification.alert, "(RECEIVED WHEN APP IN BACKGROUND) Push Notification Received");
      }
    }

    // Stores the device token in a db using node-pushserver (running locally in this case)
    //
    // type:  Platform type (ios, android etc)
    function storeDeviceToken(type) {
      // Create a random userid to store with it
      var user = { user: 'user' + Math.floor((Math.random() * 10000000) + 1), type: type, token: $scope.regId };
      console.log("Post token for registered device with data " + JSON.stringify(user));

      $http.post('http://mobile.ng.bluemix.net/imfpushdashboard/?appGuid=0c6a21ba-aff4-40b3-9baf-89929d2976e3', JSON.stringify(user))
        .success(function (data, status) {
          console.log("Token stored, device is successfully subscribed to receive push notifications.");
        })
        .error(function (data, status) {
          console.log("Error storing device token." + data + " " + status)
        }
      );
    }

    // Removes the device token from the db via node-pushserver API unsubscribe (running locally in this case).
    // If you registered the same device with different userids, *ALL* will be removed. (It's recommended to register each
    // time the app opens which this currently does. However in many cases you will always receive the same device token as
    // previously so multiple userids will be created with the same token unless you add code to check).
    function removeDeviceToken() {
      var tkn = {"token": $scope.regId};
      $http.post('http://192.168.1.16:8000/unsubscribe', JSON.stringify(tkn))
        .success(function (data, status) {
          console.log("Token removed, device is successfully unsubscribed and will not receive push notifications.");
        })
        .error(function (data, status) {
          console.log("Error removing device token." + data + " " + status)
        }
      );
    }

    // Unregister - Unregister your device token from APNS or GCM
    // Not recommended:  See http://developer.android.com/google/gcm/adv.html#unreg-why
    //                   and https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplication_Class/index.html#//apple_ref/occ/instm/UIApplication/unregisterForRemoteNotifications
    //
    // ** Instead, just remove the device token from your db and stop sending notifications **
    $scope.unregister = function () {
      console.log("Unregister called");
      removeDeviceToken();
      $scope.registerDisabled=false;
      //need to define options here, not sure what that needs to be but this is not recommended anyway
//        $cordovaPush.unregister(options).then(function(result) {
//            console.log("Unregister success " + result);//
//        }, function(err) {
//            console.log("Unregister error " + err)
//        });
    }



})

.controller('MapController',
  [ "$scope", "leafletData", function($scope, leafletData) {
//sample data values for populate map
    var data = [
      {"loc":[41.575330,13.102411], "title":"aquamarine"},
      {"loc":[41.575730,13.002411], "title":"black"},
      {"loc":[41.807149,13.162994], "title":"blue"},
      {"loc":[41.507149,13.172994], "title":"chocolate"},
      {"loc":[41.847149,14.132994], "title":"coral"},
      {"loc":[41.219190,13.062145], "title":"cyan"},
      {"loc":[41.344190,13.242145], "title":"darkblue"},
      {"loc":[41.679190,13.122145], "title":"darkred"},
      {"loc":[41.329190,13.192145], "title":"darkgray"},
      {"loc":[41.379290,13.122545], "title":"dodgerblue"},
      {"loc":[41.409190,13.362145], "title":"gray"},
      {"loc":[41.794008,12.583884], "title":"green"},
      {"loc":[41.805008,12.982884], "title":"greenyellow"},
      {"loc":[41.536175,13.273590], "title":"red"},
      {"loc":[41.516175,13.373590], "title":"rosybrown"},
      {"loc":[41.506175,13.173590], "title":"royalblue"},
      {"loc":[41.836175,13.673590], "title":"salmon"},
      {"loc":[41.796175,13.570590], "title":"seagreen"},
      {"loc":[41.436175,13.573590], "title":"seashell"},
      {"loc":[41.336175,13.973590], "title":"silver"},
      {"loc":[41.236175,13.273590], "title":"skyblue"},
      {"loc":[41.546175,13.473590], "title":"yellow"},
      {"loc":[41.239190,13.032145], "title":"white"}
    ];

    var map = new L.Map('map', {zoom: 9, center: new L.latLng(data[0].loc) });	//set center from first location

    map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));	//base layer

    var markersLayer = new L.LayerGroup();	//layer contain searched elements
    map.addLayer(markersLayer);

    map.addControl( new L.Control.Search({
      container: 'findbox',
      layer: markersLayer,
      initial: false,
      collapsed: false
    }) );
    //inizialize search control

    ////////////populate map with markers from sample data
    for(i in data) {
      var title = data[i].title,	//value searched
        loc = data[i].loc,		//position found
        marker = new L.Marker(new L.latLng(loc), {title: title} );//se property searched
      marker.bindPopup('title: '+ title );
      markersLayer.addLayer(marker);
    }

  }]);
