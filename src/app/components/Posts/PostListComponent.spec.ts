import angular = require('angular');
import { mmAngularModuleName } from '../../AngularModuleBootstraper';
import { PostListComponent } from './PostListComponent';


describe('PostsComponent test suite', () => {

    let ctrl: any;
    let scope: ng.IRootScopeService;
    let compiledElement: ng.IAugmentedJQuery;
    let $rootScope: any;
    let $compile: ng.ICompileService;
    let $componentController;
    let PostsServiceMock: any;
    let mockGetPostsMethod = (postsMock: any) => {
        return spyOn(PostsServiceMock, 'getPosts').and.callFake(function () {
            return {
                then: function (cb: any) {
                    return cb(postsMock);
                }
            };
        });
    };
    const postsMock = [
        'post1',
        'post2'
    ];

    // mock angular module
    beforeEach(angular.mock.module(mmAngularModuleName));

    // mock PostsService
    beforeEach(() => {
        PostsServiceMock = {
            getPosts: () => {
                return {
                    then: function (cb: any) {
                        return cb(postsMock);
                    }
                };
            }
        };
        angular.mock.module(($provide: any) => {
            $provide.value('postsService', PostsServiceMock);
        });
    });

    // inject the required services and instantiate the controller
    beforeEach(inject(function(_$rootScope_: any, _$compile_: any, _$componentController_: any) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        $componentController = _$componentController_;
        $compile = _$compile_;

        // prepare controller with deps
        ctrl = $componentController('postListComponent', {
            $scope: scope,
            'postsService': PostsServiceMock
        }, null);

    }));

    beforeEach(() => {
        compiledElement = $compile('<post-list-component></post-list-component>')(scope);
        scope.$digest();
    });

    it('expect ctrl to have initial loading state true', function() {
       expect(ctrl.loading).toBe(true);
    });

    it('when getPosts done expect ctrl to have loading false', function() {
        const spyCallPostsService = mockGetPostsMethod(postsMock);
        ctrl.$onInit();
        expect(ctrl.loading).toBe(false);
    });

    it('when getPosts done expect ctrl to call getPosts once', function() {
        const spyCallPostsService = mockGetPostsMethod(postsMock);
        ctrl.$onInit();
        expect(spyCallPostsService).toHaveBeenCalledTimes(1);
    });

    it('when getPosts done expect ctrl to have posts array lenght equal mocked length', function() {
        const spyCallPostsService = mockGetPostsMethod(postsMock);
        ctrl.$onInit();
        expect(ctrl.posts.length).toBe(2);
    });

    it('should display header h1', () => {
        // prepare compiled element
        expect(compiledElement).toBeDefined();
        let h1El = angular.element(compiledElement[0].querySelector('h1'));
        expect(h1El.text()).toBe('List of posts');

    });
});
