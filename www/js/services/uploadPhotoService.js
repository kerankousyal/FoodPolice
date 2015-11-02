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

                   /*//push this message to the notification server
                    $http.post('',{"message": {"alert": "Test"}}).then(handleSuccess, handleError('Error notifying'));
*/
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
                      console.log('notification message sent');
                      var result = response;
                    }, function errorCallback(response) {
                      // called asynchronously if an error occurs
                      // or server returns response with an error status.
                      var error = response;
                    });


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
