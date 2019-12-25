'use strict'

API.prototype.get = (resource) => {
     new Promise((resolve, reject) => {
        http.get(this.uri + resource, data => {
            resolve(data);
        });
    });
};