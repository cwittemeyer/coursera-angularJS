(function() {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'home/home.template.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'categories/categories.template.html',
        controller: 'CategoriesController',
        controllerAs: 'list',
        resolve: {
          categories: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('categories.items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'items/items.template.html',
        controller: "ItemsController",
        controllerAs: "list",
        resolve: {
          items: ['$stateParams', 'MenuDataService', function($stateParams,MenuDataService) {
            return MenuDataService
              .getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });

  }

})();