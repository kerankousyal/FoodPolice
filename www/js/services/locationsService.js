angular.module('starter.services').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Washington D.C., USA",
      lat : 38.8951100,
      lng : -77.0363700
    },
    {
      name : "New York",
      lat : 40.7033127,
      lng : -73.979681
    },
    {
      name : "Boston",
      lat : 42.3133735,
      lng : -71.0571571
    },
    {
      name : "Los Angeles",
      lat : 34.0204989,
      lng : -118.4117325
    },
    {
      name : "Chicago",
      lat : 41.8337329,
      lng : -87.7321555
    },
    {
      name : "Las Vegas",
      lat : 36.125,
      lng : -115.175
    }

  ];

  return locationsObj;

}]);
