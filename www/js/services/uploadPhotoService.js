(function () {
  'use strict';

  angular
    .module('starter.services')
    .factory('UploadService', UploadService);

  UploadService.$inject = ['$timeout', '$filter', '$q', '$http'];

  function UploadService($timeout, $filter, $q, $http) {

    var service = {};

    service.Upload = Upload;

    return service;

    function Upload(imageData) {
      var deferred = $q.defer();

      $timeout(function () {

                //save user to the DB
                $http.post('http://www.primeimap.com/FoodCop/rest/fprest/savereport/', imageData)
                  .success(function (response) {

                    deferred.resolve({ success: true });
                  });


      }, 1000);

      return deferred.promise;
    }


  }
})();
