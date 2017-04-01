/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 31.03.17.
 */
"use strict";

angular.module('app')
  .component('finder', {
    templateUrl: './js/components/finder/finder.html',
    bindings: {
      onFilter: '=',
      onClear: '='
    },
    controller: function () {
      const $ctrl = this;
      $ctrl.$onInit = function () {

      };

      $ctrl.filter = '';

      $ctrl.reload = function () {
        $ctrl.filter = '';

        $ctrl.onClear();
      }


    }});