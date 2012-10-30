define([
    'backbone',
    'underscore',
    'views/app'
], function(Backbone, _, AppView) {

    return Backbone.View.extend({
        el:'#container',

        initialize: function() {
            console.log('dashboard view init');
            //model is passed in as an argument and is a BoxCollection instance
            this.collection.bind('reset', this.render, this);
        },

        render: function(ev) {
            _.each(this.collection.models, function(app) {
                $(this.el).append(new AppView({model:app}).render().el);
            }, this);
            return this;
        }
    });
});

