'use strict';

module.exports = {
  template: require('./welcome.html'),
  controller: ['$log', '$location', WelcomeController],
  controllerAs: 'welcomeCtrl',
};

function WelcomeController($log, $location) {
  $log.debug('init welcomeCtrl');

  $location.path('/landing');
}
