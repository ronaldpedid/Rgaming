var mongojs = require('mongojs');


function mongoMiddleware(options) {
    return function mongoMiddleware(req, res, next) {
        req.db = req.app.db;
        req.rg = req.app.db.collection("rg");
        next();
    };
}

module.exports = mongoMiddleware;
