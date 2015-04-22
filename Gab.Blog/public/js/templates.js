'use strict';angular.module('app.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('/views/partials/newpost.html','<div>\r\n    <div>\r\n        <label>Título:</label>\r\n        <input type=\'text\' ng-model=\'post.title\' size=\'100px\'/>\r\n    </div>\r\n    <div>\r\n        <label>Body:</label>\r\n        <wysiwyg textarea-id=\'body\'\r\n                 textarea-class=\'form-control\'\r\n                 textarea-height=\'180px\'\r\n                 textarea-name=\'body\'\r\n                 textarea-required\r\n                 ng-model=\'post.body\'\r\n                 enable-bootstrap-title=\'true\'>\r\n        </wysiwyg>\r\n    </div>\r\n    <br/>\r\n    <input class=\'btn btn-primary\' type=\'Button\' value=\'Guardar Post\' ng-click=\'addPost(post)\'/>\r\n</div>\r\n');
$templateCache.put('/views/partials/post-detail.html','<div ng-show=\'contentLoaded\'>\r\n    <div class=\'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\'>\r\n        <div class=\'post-preview\'>\r\n            <h2 class=\'post-title\'>\r\n                {{post.title}}\r\n            </h2>\r\n            <span ng-bind-html=\'obtenerBodyHtml(post.body)\'>\r\n                {{post.body}}\r\n            </span>\r\n            <div class=\'post-meta\'>\r\n                Posteado por xxx el <b>{{post.createdAt | date:\'dd/MM/yyyy h:mma\'}}</b>.\r\n            </div>\r\n        </div>\r\n        <hr />\r\n        <div class=\'section-comment\'>Comentarios</div>\r\n        <div ng-repeat=\'comment in post.comments\'>\r\n            <div>\r\n                <div>\r\n                    {{comment.user}} <span class=\'post-comment-date\'> {{post.createdAt | date:\'dd/MM/yyyy h:mma\'}}</span>\r\n                </div>\r\n                <div>\r\n                    {{comment.body}}\r\n                </div>\r\n            </div>\r\n            <hr />\r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n');
$templateCache.put('/views/partials/posts-list.html','<div class=\'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\' ng-show=\'contentLoaded\' ng-repeat=\'post in posts\'>\r\n    <div class=\'post-preview\'>\r\n        <a href=\'/#post/{{post.id}}\'>\r\n            <h2 class=\'post-title\'>\r\n                {{post.title}}\r\n            </h2>\r\n            <span ng-bind-html=\'obtenerBodyHtmlLimitado(post.body)\'>\r\n                {{post.body}}\r\n            </span>\r\n        </a>\r\n        <div class=\'post-meta\'>\r\n            Posteado por xxx el <b>{{post.createdAt | date:\'dd/MM/yyyy h:mma\'}}</b>.\r\n            Comentarios <b>({{post.comments.length}})</b>\r\n        </div>\r\n    </div>\r\n    <hr />\r\n</div>\r\n<div class=\'clear\'></div>\r\n<div ng-show=\'contentLoaded\' class=\'newPostBtn\'>\r\n    <a class=\'btn btn-primary\' href=\'/#newpost\'>Nuevo Post</a>\r\n</div>\r\n\r\n');}]);