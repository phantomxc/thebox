define([
    'backbone',
    'underscore',
    'collections/apps',
    'views/dashboard',
    'router'
], function(Backbone, _, AppCollection, DashboardView, Router) {

    return Backbone.View.extend({

        initialize: function() {

            this.appList = new AppCollection();
            this.dashboard = new DashboardView({
                'collection':this.appList
            });

            this.appList.fetch();

            var router = this.router = new Router;

        }
    });
});
