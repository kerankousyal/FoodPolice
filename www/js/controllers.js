angular.module('starter.controllers', ['leaflet-directive'])

.controller('AlertsCtrl', function($scope,$http,  $cordovaSocialSharing,$ionicPlatform, $ionicLoading) {

console.log('AlertsCtrl');

    $scope.init = function() {

      $ionicLoading.show({
        noBackdrop: true,
        template: '<p class="item-icon-left">Loading Alerts...<ion-spinner icon="lines"/></p>'
      });

      $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0", "q": "http://active.inspection.gc.ca/eng/util/newrsse.asp?cid=40" ,"num" : 10} })
        .success(function(data) {

          $ionicLoading.hide();


          $scope.rssTitle = data.responseData.feed.title;
          $scope.rssUrl = data.responseData.feed.feedUrl;
          $scope.rssSiteUrl = data.responseData.feed.link;
          $scope.entries = data.responseData.feed.entries;
        })
        .error(function(data) {
          console.log("ERROR: " + data);
        });
    }

    $scope.browse = function(v) {
      window.open(v, "_blank", "location=yes,clearcache=yes");
    }

    //social sharing
    $ionicPlatform.ready(function() {

      $scope.shareAnywhere = function(title, link) {
        $cordovaSocialSharing.share(link, title, "", "");
      }


    });

})
  .controller('ReportCtrl', function($scope,$ionicPlatform, $cordovaCamera, $cordovaFile, $cordovaSocialSharing,$ionicLoading,$ionicScrollDelegate, $timeout, $q,UploadService, $cordovaToast) {

    console.log('ReportCtrl');

    $scope.takePhoto = function () {

      $ionicScrollDelegate.scrollTop();

      $ionicPlatform.ready(function() {
        var options = {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.PNG,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
        };
        $cordovaCamera.getPicture(options).then(function (imageData) {
          $ionicLoading.show({
            template: 'Processing Image',
            duration: 2000
          });
          $scope.image = "data:image/png;base64," + imageData;

        }, function (err) {
          console.log(err);
        });
      }, false);
    };

    $scope.UploadDoc = function (user) {
      console.log('upload...');

      var imageData= { "imageURL": $scope.image, "name" : user.name, "content" : user.content } ;

      /*$ionicLoading.show({
        noBackdrop: true,
        template: '<p class="item-icon-left">Submitting report...<ion-spinner icon="lines"/></p>'
      });*/

      $cordovaToast.showShortCenter('Report submitted successfully!');

      UploadImage();

      function UploadImage() {

        UploadService.UploadAndNofity(imageData)
          .then(function (response) {
            if (response.success=true) {

              $ionicLoading.hide();

              $cordovaToast.showShortCenter('Report submitted successfully!');
            } else {
              $cordovaToast.showShortCenter('Report failed! try again!');
            }
          });

      }


    };



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
  .controller('FeedCtrl', function($scope,$ionicPlatform, $cordovaSocialSharing, NewsFeedService, $ionicLoading) {

    $ionicLoading.show({
      noBackdrop: true,
      template: '<p class="item-icon-left">Loading News...<ion-spinner icon="lines"/></p>'
    });

    getAllNewsFeeds();

      function getAllNewsFeeds() {

        NewsFeedService.getAllFeeds()
          .then(function (feeds) {

            $ionicLoading.hide();

            $scope.feedList = feeds.data;

          });
      }


    //social sharing
    $ionicPlatform.ready(function() {

      $scope.shareAnywhere = function(title, link) {
        $cordovaSocialSharing.share("ionic test", "Test subject", "", "");
      }


    });

  })
  .controller('AboutCtrl', function($scope) {

    console.log('AboutCtrl');
  })
  .controller('ContactCtrl', function($scope) {

    console.log('ContactCtrl');
  })

  .controller('HomeCtrl', function($scope, FacilityService) {
    console.log('HomeCtrl');
    $scope.strsearch = '';
    $scope.facilitylist = FacilityService.all();
    $scope.searchFacility = function(strsearch) {
      console.log('Hello' + strsearch);
      if (strsearch !='' & strsearch.length >1) {
        $scope.facilitylist = FacilityService.search(strsearch);
        $scope.strsearch = '';
      }else if(strsearch =='')
      {
        $scope.facilitylist = FacilityService.all();
      }
    };



  })

.controller('FacilityDetailCtrl', function($scope, $stateParams, FacilityService, $cordovaSocialSharing, $ionicPlatform) {

    console.log('FacilityDetailCtrl');
    $scope.facility = FacilityService.get($stateParams.FacilityId);

    $scope.shareAnywhere = function() {
      $cordovaSocialSharing.share("ionic test", "Test subject", "", "");
    }
})

.controller('SettingsCtrl', function($scope, $cordovaPush, $cordovaDialogs, $cordovaMedia, $cordovaToast, ionPlatform, $http) {
    console.log('SettingsCtrl');

    $scope.notifications = [];


    $scope.pushNotificationChange = function() {
      console.log('Push Notification Change', $scope.pushNotification.checked);

      if($scope.pushNotification.checked) {

        // call to register automatically upon device ready
        ionPlatform.ready.then(function (device) {
           $scope.register();
        });
      } else {

        // call to register automatically upon device ready
        ionPlatform.ready.then(function (device) {
           $scope.unregister();
        });
      }
    };
    $scope.pushNotification = { checked: false };


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
          storeDeviceToken("A");
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
      var user = {  createdMode: 'API', deviceId: 'user' + Math.floor((Math.random() * 10000000) + 1), platform: type, token: $scope.regId };
      console.log("Post token for registered device with data " + JSON.stringify(user));

      $http.post('https://mobile.ng.bluemix.net/imfpush/v1/apps/b2b33425-6f1f-4fa7-852f-0041599a1149/devices?mfpPushEnableBroadcast=true', JSON.stringify(user))
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
      $http.post('https://mobile.ng.bluemix.net/imfpush/v1/apps/b2b33425-6f1f-4fa7-852f-0041599a1149/devices/', JSON.stringify(tkn))
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
  [ "$scope", "LocationsService", function($scope, LocationsService) {
    console.log('MapController');

    var restaurant500 = LocationsService.all();

    console.log('after rest...');

    var map = L.map('map', {
      zoom: 12,
      center: new L.latLng(  restaurant500.coordinates[0],  restaurant500.coordinates[1]), //Default Location
      layers: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
      events: {
        map: {
          enable: ['context'],
          logic: 'emit'
        }
      }
    });

    console.log('after map...');

    var restLayers = L.geoJson(restaurant500, {
      pointToLayer: function(feature, latlng) {

        var props = L.Util.extend({
            'name': '',
            'cuisine': '',
            'website': '',
            'phone': ''
          },feature.properties),
          textPopup = L.Util.template(feature.properties.popuptext, props),

          style = {
            radius: 10,
            opacity: 0.8,
            fillColor: feature.properties.status == "Pass" ? '#33cd5f' : (feature.properties.status == "Multi" ? '#0000FF' :'#ffc900'),
            fillOpacity: 0.8
          };

        return L.circleMarker(latlng, style).bindPopup(textPopup);
      }
    }).addTo(map);

    //L.control.locate.addTo(map);

    var fuse = new Fuse(restaurant500.features, {
      keys: ['properties.tags']
    });

    L.control.search({
      zoom: 15,
      layer: restLayers,
      propertyName: 'tags',
      filterData: function(text, records) {
        var jsons = fuse.search(text),
          ret = {}, key;

        for(var i in jsons) {
          key = jsons[i].properties.tags;
          ret[ key ]= records[key];
        }

        console.log(jsons,ret);
        return ret;
      }
    })
      .on('search_locationfound', function(e) {
        e.layer.openPopup();
      })
      .addTo(map);

  }]);
