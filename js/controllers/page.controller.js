/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 31.03.17.
 */
"use strict";

angular.module('app')
  .controller('PageController', function ($locale, $scope, API) {

    $locale.NUMBER_FORMATS.GROUP_SEP = ' ';

    $scope.offers = {
      raw: [],
      data: [],

      filter: '',

      get: function () {
        const _this = this;
        API.getOffers()
          .then(function (data) {
            _this.raw = data.data;
            _this.resetHearts();
          });
      },
      resetHearts: function () {
        this.data = this.raw.map((el) => {
          el.isLike = false;
          return el;
        })
      },
      onFilter: function (filter) {
        $scope.offers.filter = filter;
      },
      doFilter: function (el) {
        const filter = $scope.offers.filter.toLowerCase();
        const address = el.address.toLowerCase();

        return (address.indexOf(filter) === 0) && el.isLike !== true
      },
      onClear: function () {
        $scope.offers.resetHearts();
        $scope.offers.filter = '';
      },
      onLike: function ({ id, state }) {
        $scope.offers.data.forEach(function (el) {
          if (el.id === id) {
            el.isLike = state;
          }
        })
      }
    };

    $scope.offers.get();

  });