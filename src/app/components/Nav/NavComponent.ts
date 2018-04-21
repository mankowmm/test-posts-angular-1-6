import { mmAngularModule } from '../../AngularModuleBootstraper';
import { IComponentOptions, IController } from 'angular';

export class NavController implements IController {
    public static $inject = [] as any;
}

export class NavComponent implements IComponentOptions {
    public controller: any;
    public template: string;
    constructor() {
        this.controller = NavController;
        this.template = require('./NavComponent.html');
    }
}

mmAngularModule.component('navComponent', new NavComponent());
