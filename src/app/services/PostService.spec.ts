import angular = require('angular');
import { mmAngularModuleName } from '../AngularModuleBootstraper';
import { PostsService } from './PostsService';

describe('PostService test suite', () => {

    let service: PostsService;
    let $httpBackend: any;

    // prepare mocked module
    beforeEach(function() {
        angular.mock.module(mmAngularModuleName);
    });

    beforeEach(inject(function($injector: any) {
        service = $injector.get('postsService');
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', 'https://jsonplaceholder.typicode.com/posts').respond(['post1', 'post2']);
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('getPosts - should return 2 mocked posts', function () {
        service.getPosts().then(function(response: any) {
            expect(response.length).toEqual(2); // the response is null
        });
        $httpBackend.flush();
    });

});
