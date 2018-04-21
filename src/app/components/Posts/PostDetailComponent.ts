import { mmAngularModule } from '../../AngularModuleBootstraper';

export class PostsDetailComponent {
    public template: string;
    public bindings: any;
    constructor() {
        this.bindings = {
            id: '@'
        };
        this.template = `<div>
                <div id="post-detail-header">Detail of post: {{$ctrl.id}}</div>
            </div>`;
    }
}

mmAngularModule.component('postDetailComponent', new PostsDetailComponent());
