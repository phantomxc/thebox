window.Milky = {
    Models: {},
    Collections: {},
    Views: {},
    Templates: {},

    boot:function(base_url) {
        window.app = new Milky.Views.MainApp();
        Backbone.history.start();
    }
};
