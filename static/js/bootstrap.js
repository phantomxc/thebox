require.config({ 
    // THIS IS TO MAKE SURE NOTHING IS CACHED FOR TESTING
    urlArgs: "bust=" +  (new Date()).getTime(),
    'paths':{ 
        'jquery':'lib/jquery-1.8.2.min', 
        'backbone':'lib/backbone-min', 
        'underscore':'lib/underscore-min' 
    }, 

    // SINCE BACKBONE AND UNDERSCORE ARE NOT AMD COMPATIBLE WE HAVE TO EXPORT THEM
    shim:{ 
        underscore:{ 
            exports:'_' 
        },
        backbone: { 
            deps:['underscore', 'jquery'], 
            exports:'Backbone' 
        }, 
    } 
}); 

require(['views/mainapp'], function(MainApp) {
    $(function() {
        window.app = new MainApp();
        Backbone.history.start();
    });
});

