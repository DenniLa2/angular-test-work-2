/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 31.03.17.
 */
"use strict";

angular.module('app')
  .factory('API', function ($http, $q) {

    function getOffers() {
      const deferred = $q.defer();
      const url = './js/offers.json';

      $http({ method: 'GET', url: url })
        .then(function (data) {
          deferred.resolve({
            data: data.data
          });
        });

      return deferred.promise;
    }


    return {
      getOffers: getOffers
    }

  });