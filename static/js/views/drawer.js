Milky.Views.DrawerView = Backbone.View.extend({

    initialize: function() {
        this.model.bind('add', this.render, this);
    },

    render: function() {
        $(this.el).html('');
        _.each(this.model.models, function(app) {
            $(this.el).append(new Milky.Views.AppView({model:app}).render().el);
        }, this)
        return this
    }

});

