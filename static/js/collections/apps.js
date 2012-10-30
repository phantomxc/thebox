define([
    'backbone',
    'underscore',
    'models/app'
], function(Backbone, _, AppModel) {

     return Backbone.Collection.extend({
            
        model: AppModel,

        initialize:function() {
            this.url = 'myapps';
        }
    });
});
