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

      return $http.get('http://www.primeimap.com/FoodCop/rest/fprest/getfeeds').then(handleSuccess, handleError('Error getting feed list'));
    }


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
})();
