'use strict';

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$location', NavbarController],
  controllerAs: 'navbarCtrl',
};

function NavbarController($log, $location) {
  $log.debug('init navbarCtrl');
}
