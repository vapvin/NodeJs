'use strict'

API.prototype.get = function(resource) {
    var self = this;
    return new Promise(function(resolve, reject){
        http.get(self.uri + resource, function(data){
            resolve(data);
        });
    });
};