define([
    'backbone',
    'underscore',
    'views/drawer',
    'collections/apps'
], function(Backbone, _, DrawerView, AppCollection) {

    // AppView
    return Backbone.View.extend({

        tagName: 'div',

        className: 'app-container',
        
        template:_.template($('#tpl-app-view').html()),

        events: {
            'click .app-view' : "handleClick"
        },

        initialize: function() {
            if (this.model.attributes.components) {
                // A collection of app models to put in the drawers
                this.appList = new AppCollection();

                _.each(this.model.attributes.components, function(app) {
                    this.appList.add(app)
                }, this);

            }

        },

        render: function() {
            $(this.el).html(this.template(this.model.toJSON()));
            
            if (this.appList) {
                this.drawer = this.$('.drawer-container').append(new DrawerView({model:this.appList}).render().el);
            }

            return this;
        },

        handleClick: function() {
            // Has additional components
            if (this.drawer) {
                $(this.drawer).slideToggle();
            }
            return false;
        }
    });
});

