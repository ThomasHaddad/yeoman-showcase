(function (define) {
  /*jshint unused: vars */
  define([
    'angular',
    'route'
  ], function (angular, route)/*invoke*/ {
    'use strict';

    /**
     * @ngdoc overview
     * @name yeomanShowcaseApp
     * @description
     * # yeomanShowcaseApp
     *
     * Main module of the application.
     */
    return angular
      .module('yeomanShowcaseApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngAnimate',
        'ngTouch'
      ])
      .config(route);
  });

})(this.define);
