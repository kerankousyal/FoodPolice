(function () {
  'use strict';

  angular
    .module('starter.services')
    .factory('UploadService', UploadService);

  UploadService.$inject = ['$timeout', '$filter', '$q', '$http'];

  function UploadService($timeout, $filter, $q, $http) {

    var service = {};

    service.Upload = Upload;
    service.UploadAndNofity = UploadAndNofity;

    return service;

    function Upload(imageData) {

      return $http.post('http://www.primeimap.com/FoodCop/rest/fprest/savereport/', imageData).then(handleSuccess, handleError('Error uploading image'));
    }
    function UploadAndNofity(imageData) {

      var deferred = $q.defer();

      $timeout(function () {

        Upload(imageData)
          .then(function (response) {

            console.log(response.status);
            if(response.status === 200) {

              if (response.data === 'success') {

                $http({
                  method: 'POST',
                  url: 'https://mobile.ng.bluemix.net/imfpush/v1/apps/b2b33425-6f1f-4fa7-852f-0041599a1149/messages',
                  data : '{"message": {"alert": "New message!!"}}',
                  headers: {
                    'appSecret': '7a27294f-5cbc-4f6f-a713-d41a09ec7eb2'
                  }
                }).then(function successCallback(response) {
                  // this callback will be called asynchronously
                  // when the response is available
                  var result = response;
                  deferred.resolve({ success: true });
                  console.log(response);
                }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  var error = response;
                  console.log(response);
                  deferred.resolve({ success: false, message: response.data });
                });
              }

            }
          });
      }, 1000);

      return deferred.promise;
    }

    // private functions
    function handleSuccess(data) {

      return data;
    }

    function handleError(error) {
      return function () {
        return { success: false, message: error };
      };
    }
  }

})();
