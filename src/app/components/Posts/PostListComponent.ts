import { mmAngularModule } from '../../AngularModuleBootstraper';
import { PostsService } from '../../services/PostsService';

export class PostListController {

    public static $inject = ['postsService'];
    public loading: boolean = true;
    public name: string;
    public posts: any;
    constructor(private postsService: PostsService) {}

    $onInit () {
        this.postsService.getPosts().then((posts: any) => {
            this.loading = false;
            this.posts = posts;
        });
    }
}

export class PostListComponent {
    public controller: any;
    public template: string;
    constructor() {
        this.controller = PostListController;
        this.template = `<div>
                <div class="page-header">
                    <h1>List of posts</h1>
                </div>
                <div ng-if="$ctrl.loading" id="loader">Loading Posts..</div>
                <div ng-if="!$ctrl.loading" id="posts-list">
                    <ul class="list-group">
                        <li class="list-group-item" ng-repeat="post in $ctrl.posts">
                            <post-link-component post="post"></post-link-component>
                        </li>
                    </ul>

                </div>
            </div>`;
    }
}
mmAngularModule.controller('postListController', PostListController);
mmAngularModule.component('postListComponent', new PostListComponent());
