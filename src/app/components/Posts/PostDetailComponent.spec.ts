import angular = require('angular');
import { mmAngularModuleName } from '../../AngularModuleBootstraper';
import { PostListComponent } from './PostListComponent';


describe('PostsDetailComponent test suite', () => {

    var $compile;
    var $rootScope;

    beforeEach(function() {
        angular.mock.module(mmAngularModuleName);
        inject(function(_$compile_: any, _$rootScope_: any) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });

    /* it('should have header', function() {
        var element = $compile('<post-detail-component></post-detail-component>')($rootScope);
        $rootScope.$digest();
        expect(element.find('#post-detail-header').text()).toBe('Detail of post');
    });
 */
});
