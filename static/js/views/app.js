console.log('wtf');
Milky.Views.AppView = Backbone.View.extend({

    tagName: 'div',

    className: 'app-container',
    
    template:_.template($('#tpl-app-view').html()),

    events: {
        'click .app-view' : "handleClick"
    },

    initialize: function() {
        console.log('appview init');
        if (this.model.attributes.components) {
            // A collection of box models to put in the drawers
            this.appList = new Milky.Collections.AppCollection();

            _.each(this.model.attributes.components, function(app) {
                this.appList.add(app)
            }, this);

        }

    },

    render: function() {
        console.log('render');
        $(this.el).html(this.template(this.model.toJSON()));
        
        if (this.appList) {
            this.drawer = this.$('.drawer-container').append(new Milky.Views.DrawerView({model:this.appList}).render().el);
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

