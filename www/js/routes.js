angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

    .state('listaDeLivros', {
    url: '/page2',
    templateUrl: 'templates/listaDeLivros.html',
    controller: 'listaDeLivrosCtrl'
  })

  .state('autenticaO', {
    url: '/page3',
    templateUrl: 'templates/autenticaO.html',
    controller: 'autenticaOCtrl'
  })

  .state('detalhesDoLivro', {
    url: '/page5',
    templateUrl: 'templates/detalhesDoLivro.html',
    controller: 'detalhesDoLivroCtrl'
  })

  .state('negociaODoLivro', {
    url: '/page6',
    templateUrl: 'templates/negociaODoLivro.html',
    controller: 'negociaODoLivroCtrl'
  })

  .state('meusLivros', {
    url: '/page7',
    templateUrl: 'templates/meusLivros.html',
    controller: 'meusLivrosCtrl'
  })

  .state('livro', {
    url: '/page8',
    templateUrl: 'templates/livro.html',
    controller: 'livroCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});