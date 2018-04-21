import { mmAngularModule } from '../../AngularModuleBootstraper';

export class PostsLinkComponent implements ng.IComponentOptions {
    public template: string;
    public bindings: any;
    constructor() {
        this.bindings = {
            post: '<'
        };
        this.template = `<div class="post-link-component">
                <a ng-href="#!/post/{{$ctrl.post.id}}">{{$ctrl.post.title}}</a>
            </div>`;
    }
}
mmAngularModule.component('postLinkComponent', new PostsLinkComponent());
