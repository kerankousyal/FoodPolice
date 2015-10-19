angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('facilitylist', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var facilitylist = [
    { id: 0, name: 'Papa Marios' },
    { id: 1, name: 'Jungle Jims' },
    { id: 2, name: 'Papa Jones' },
    { id: 3, name: 'Boston Pizza' },
    { id: 4, name: 'Starbucks' }
  ];

  return {
    all: function() {
      return facilitylist;
    },
    get: function(FacilityId) {
      // Simple index lookup
      return facilitylist[FacilityId];
    }
  }
});
