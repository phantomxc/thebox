define([
    'backbone',
    'underscore'
], function(Backbone, _) {
    return Backbone.Router.extend({
        routes: {
            '':'index'
        },

        index: function() {
            console.log('index route');        
        }
    });
});
