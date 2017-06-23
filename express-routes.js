var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    req.genericRestApi.model
    .findAll()
    .then(function(records) {
        if (records) return res.json(records);
        return next();
    })
    .catch(function(err, status){
      res.json({error: err.toString()});
    });
});

router.post('/', function(req, res, next) {
    req.genericRestApi.model
    .create(req.body)
    .then(function(record) {
        if (record) return res.json(record);
        return next();
    })
    .catch(function(err){
      res.json({error: err});
    });
});

router.get('/:id', function(req, res, next) {
    req.genericRestApi.model
    .findById(req.params.id)
    .then(function(record) {
        if (record) return res.json(record);
        return next();
    })
    .catch(function(err){
      res.json({error: err.toString()});
    });
});

router.get('/:id/:relation', function(req, res, next) {
    var query = {};
    query[req.genericRestApi.modelName] = req.params.id;

    req.genericRestApi.models[req.params.relation]
    .findAll({
        where: query
    })
    .then(function(records) {
        if (records) return res.json(records);
        return next();
    })
    .catch(function(err){
      res.json({error: err.toString()});
    });
});

router.put('/:id', function(req, res, next) {
    req.genericRestApi.model
    .findById(req.params.id)
    .then(function(record) {
        Object.assign(record, req.body);
        record.save();
        if (record) return res.json(record);
        return next();
    })
    .catch(function(err){
      res.json({error: err.toString()});
    });
});

router.delete('/:id', function(req, res, next) {
    req.genericRestApi.model
    .findById(req.params.id)
    .then(function(record) {
        record.destroy();
        res.json({message: req.params.model+" destroyed"});
    })
    .catch(function(err){
      res.json({error: err.toString()});
    });
});

module.exports = router;
