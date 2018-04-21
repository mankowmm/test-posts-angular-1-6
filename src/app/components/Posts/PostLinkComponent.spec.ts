import angular = require('angular');
import { mmAngularModuleName } from '../../AngularModuleBootstraper';
import { PostsLinkComponent } from './PostLinkComponent';

describe('PostsLinkComponent test suite', () => {

    let $compile: any;
    let $rootScope: any;
    let ctrl: any;
    let scope: any;
    let $componentController: any;

    // prepare mocked module
    beforeEach(function() {
        angular.mock.module(mmAngularModuleName);
    });
        // inject the required services and instantiate the controller
     beforeEach(inject(function(_$rootScope_: any, _$compile_: any, _$componentController_: any) {
        $rootScope = _$rootScope_;
        $componentController = _$componentController_;
        $compile = _$compile_;
        scope = $rootScope.$new();
        // prepare controller
        ctrl = $componentController('postLinkComponent', { $scope: scope }, null);
    }));

    it('should have header', function() {
        var element = $compile('<post-link-component></post-link-component>')($rootScope);
        $rootScope.$digest();
        expect(element.find('.post-link-component')).toBeDefined();
    });

});
