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
