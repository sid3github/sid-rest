const express = require('express');
const router = express.Router();
const Htl = require('../models/data');


router.get('/hotel',function(req,res) {
    res.send({type: 'Get'});   
});

router.post('/hotel',function(req,res) {
   Htl.create(req.body).then(function(restro){
        res.send(restro);
   });
});

router.put('/hotel/:id',function(req,res) {
    res.send({type: 'put'});   
});

router.delete('/hotel/:id',function(req,res) {
    res.send({type: 'delete'});   
});


module.exports = router;