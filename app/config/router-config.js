'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/landing');
  $urlRouterProvider.when('/', '/landing');

  let states = [
    {
      name: 'landing',
      url: '/landing',
      controllerAs: 'landingCtrl',
      controller: 'LandingController',
      template: require ('../view/landing/landing.html'),
    },
    {
      name: 'projects',
      url: '/projects',
      controllerAs: 'projectCtrl',
      controller: 'ProjectController',
      template: require('../view/projects/projects.html'),
    },
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}
