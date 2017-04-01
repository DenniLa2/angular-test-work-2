/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 31.03.17.
 */
"use strict";

angular.module('app')
  .component('poster', {
    templateUrl: './js/components/poster/poster.html',
    bindings: {
      data: '<posterData',
      isLike: '<',
      onLike: '='
    },
    controller: function ($rootScope, $timeout) {
      const $ctrl = this;
      $ctrl.$onInit = function () {
      };

      $ctrl.$onChanges = function () {

      };


      $ctrl.like = function () {
        $ctrl.onLike({id: $ctrl.data.id, state: 'active'});
        $timeout(() => {
          $ctrl.onLike({id: $ctrl.data.id, state: true});
        }, 250);
      }

    }
  });