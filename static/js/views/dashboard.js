Milky.Views.DashboardView = Backbone.View.extend({
    el:'#container',

    initialize: function() {
        console.log('dashboard view init');
        //model is passed in as an argument and is a BoxCollection instance
        this.collection.bind('reset', this.render, this);
    },

    render: function(ev) {
        _.each(this.collection.models, function(app) {
            console.log(app);
            console.log(Milky.Views.AppView);
            $(this.el).append(new Milky.Views.AppView({model:app}).render().el);
        }, this);
        return this;
    }
});

