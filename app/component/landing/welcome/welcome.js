'use strict';

module.exports = {
  template: require('./welcome.html'),
  controller: ['$log', '$location', WelcomeController],
  controllerAs: 'welcomeCtrl',
};

function WelcomeController($log, $location) {
  console.log('everything is fine...');
  $location.path('/landing');
}
