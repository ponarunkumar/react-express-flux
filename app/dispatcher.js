var guid = require('guid');

var listeners = {};
console.info('File: <<<<<<<<<<DISPATCHER>>>>>>>>');
module.exports = {
    register: function(cb){
        var id=guid.raw();
        console.info("Unique GUID:", id);
        listeners[id] = cb;
        console.info("listeners[id]:", cb);
        return id;
    },
    dispatch: function(payload){
        console.info("Dispatching...", payload);
        for (var id in listeners){
            var listener = listeners[id];
            console.info("Dispatching...", id);
            listener(payload);
        }
    }
}