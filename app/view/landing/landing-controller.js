'use strict';

module.exports = ['$log', '$rootScope', '$location', LandingController];

function LandingController($log, $rootScope, $location) {
  $log.debug('init landingCtrl');

  $location.url('/landing');
}
