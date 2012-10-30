define([
    'require',
    'backbone',
    'underscore',
    'views/app'
], function(require, Backbone, _, AppView) {

    return Backbone.View.extend({

        initialize: function() {
            this.model.bind('add', this.render, this);
        },

        render: function() {
            $(this.el).html('');
            _.each(this.model.models, function(app) {
                // THIS IS REQUIRED BECAUSE IT'S A CIRCULAR DEPENDENCY
                var AppView = require("views/app");
                $(this.el).append(new AppView({model:app}).render().el);
            }, this)
            return this
        }

    });
});

