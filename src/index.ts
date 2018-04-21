/**
 * Import the polyfills and vendor files
 */
import './polyfills';
import './vendor';

/**
 * Import the global styles
 */
import './index.scss';

/**
 * Temporary Import angular
 * see: https://github.com/Microsoft/TypeScript/issues/10178
 */
import * as angular from 'angular';

/**
 *  Import module to be bootstrapped
 */
import { mmAngularModuleName, mmAngularModule, bootstrapNgApp } from './app/AngularModuleBootstraper';

/**
 * Bootstrap the application using the imported moduleName
 */
/* const bootstrapModuleName = angular.module('mmtestapp', [
  mmAngularModuleName
]); */


/**
 * import components etc..
 */
import './app/services/PostsService';
import './app/components/Nav/NavComponent';
import './app/views/HomePage/HomePageController';
import './app/components/Posts/PostListComponent';
import './app/components/Posts/PostLinkComponent';
import './app/components/Posts/PostDetailComponent';

/**
 * Define angular routing
 */
mmAngularModule.config(['$routeProvider', ($routeProvider: any) => {
  $routeProvider
  .when('/home', {
      controller: 'homePageController',
      template: require('./app/views/HomePage/HomePageTemplate.html')
  })
  .when('/posts', {
      template: '<post-list-component></post-list-component>'
  })
  .when('/post/:id', {
      template: '<post-detail-component id="{{ $resolve.postId }}"></post-detail-component>',
      resolve: {
          postId: ['$route', ($route: any) =>  {
              const currentId = $route.current.params.id;
              return currentId;
          }]
      }
  })
  .otherwise({redirectTo: '/home'});
}]);


bootstrapNgApp();

