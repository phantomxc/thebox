Milky.Collections.AppCollection = Backbone.Collection.extend({
        
    model: Milky.Models.App,

    initialize:function() {
        this.url = 'myapps';
    }
});
