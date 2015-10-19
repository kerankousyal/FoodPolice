angular.module('starter.controllers', ['leaflet-directive'])

.controller('AlertsCtrl', function($scope) {

console.log('AlertsCtrl');

})
  .controller('ReportCtrl', function($scope, $state) {

    console.log('ReportCtrl');
  })
  .controller('FeedCtrl', function($scope, $state) {

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
          lat: -37.8839,
          lng: 175.3745188667,
          zoom: 18
        },
        events: {
          map: {
            enable: ['moveend', 'popupopen'],
            logic: 'emit'
          },
          marker: {
            enable: [],
            logic: 'emit'
          }
        },
        layers: {
          baselayers: {
            osm: {
              name: 'OpenStreetMap',
              type: 'xyz',
              url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
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



   /* $ionicModal.fromTemplateUrl('templates/addLocation.html', {
    scope: $scope,
    animation: 'slide-in-up'
    }).then(function(modal) {
    $scope.modal = modal;
    });

    /!**
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
