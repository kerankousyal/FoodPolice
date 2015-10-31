(function () {
  'use strict';

  angular
    .module('starter.services')
    .factory('NewsFeedService', NewsFeedService);

  NewsFeedService.$inject = ['$timeout', '$filter', '$q', '$http'];

  function NewsFeedService($timeout, $filter, $q, $http) {

    var service = {};

    service.getAllFeeds = getAllFeeds;

    return service;

    function getAllFeeds() {

      var deferred = $q.defer();

      $timeout(function () {



        //save user to the DB
        $http.get('http://www.primeimap.com/FoodCop/rest/fprest/getfeeds')
          .success(function (response) {

            deferred.resolve({ success: true });
          });


      }, 1000);

      return deferred.promise;
    }


  }
})();
