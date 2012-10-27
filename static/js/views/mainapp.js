Milky.Views.MainApp = Backbone.View.extend({

    initialize: function() {

        this.appList = new Milky.Collections.AppCollection();
        this.dashboard = new Milky.Views.DashboardView({
            'collection':this.appList
        });

        this.appList.fetch();

        var router = this.router = new Milky.Router;

    }

});
