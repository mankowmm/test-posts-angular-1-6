import * as angular from 'angular';
import 'angular-mocks';
import { NavComponent } from './NavComponent';
import { mmAngularModuleName } from '../../AngularModuleBootstraper';


describe('NavComponent test suite', () => {

    let $compile: ng.ICompileService;
    let scope: ng.IRootScopeService;
    let compiledElement: ng.IAugmentedJQuery;

    beforeEach(angular.mock.module(mmAngularModuleName));

    beforeEach(inject(($rootScope: any, _$compile_: any) => {
        scope = $rootScope.$new();
        $compile = _$compile_;
    }));

    beforeEach(() => {
        compiledElement = $compile('<nav-component></nav-component>')(scope);
        scope.$digest();
    });

    it('test element html', () => {
        expect(compiledElement).toBeDefined();
        let navbarElement = angular.element(compiledElement[0].querySelector('.navbar'));
        expect(navbarElement).toBeDefined();
        let navbarBrand = angular.element(compiledElement[0].querySelector('.navbar-brand'));
        expect(navbarBrand.text()).toBe('MM TEST APP');
        let navList = angular.element(compiledElement[0].querySelector('.navbar-nav'));
        console.log('how many el of nav:', navList.length);
    });

});

