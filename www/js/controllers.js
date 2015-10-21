angular.module('starter.controllers', ['leaflet-directive'])

.controller('AlertsCtrl', function($scope) {

console.log('AlertsCtrl');

})
  .controller('ReportCtrl', function($scope, $cordovaCamera, $cordovaFile) {

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

.controller('SettingsCtrl', function($scope) {
    console.log('SettingsCtrl');
})

.controller('MapController',
  [ '$scope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    'InstructionsService',
    '$location',
    '$http',
    function(
      $scope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService,
      InstructionsService,
      $location,
      $http
    ) {

      var addressPointsToMarkers = function(points) {
        return points.map(function(ap) {
          return {
            layer: 'realworld',
            lat: ap[0],
            lng: ap[1]
          };
        });
      };

      angular.extend($scope, {
        center: {
          lat: 43.7181557,
          lng: -79.5181422,
          zoom: 11
        },
        events: {
          map: {
            enable: ['moveend', 'popupopen', 'tap'],
            logic: 'emit'
          },
          marker: {
            enable: [],
            logic: 'emit'
          }
        },
        layers: {
          baselayers: {
            mapbox_light: {
              name: 'Mapbox Light',
              url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
              type: 'xyz',
              layerOptions: {
                apikey: 'pk.eyJ1IjoiYnVmYW51dm9scyIsImEiOiJLSURpX0pnIn0.2_9NrLz1U9bpwMQBhVk97Q',
                mapid: 'bufanuvols.lia22g09'
              },
              layerParams: {
                showOnSelector: false
              }
            }
          },
            layerParams: {
              showOnSelector: false
            },
          overlays: {
            realworld: {
              name: "Real world data",
              type: "markercluster",
              visible: true
            },
            search: {
              name: 'search',
              type: 'group',
              visible: true,
              layerParams: {
                showOnSelector: false
              }
            }
          },
          controls: {},
          markers: {}
        }
      });

      $http.get("data/address.json").success(function(data) {
        $scope.markers = addressPointsToMarkers(data);
      });



    /*$ionicModal.fromTemplateUrl('templates/addLocation.html', {
    scope: $scope,
    animation: 'slide-in-up'
    }).then(function(modal) {
    $scope.modal = modal;
    });
*/
    /*/!**
       * Center map on user's current position
       *!/
      $scope.locate = function(){

        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.map.center.lat  = position.coords.latitude;
            $scope.map.center.lng = position.coords.longitude;
            $scope.map.center.zoom = 15;

            $scope.map.markers.now = {
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message: "You Are Here",
              focus: true,
              draggable: false
            };

          }, function(err) {
            // error
            console.log("Location error!");
            console.log(err);
          });

      };*/

    }]);
