(function() {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'categories/categories.component.template.html',
      bindings: {
        items: '<'
      }
    });

})();