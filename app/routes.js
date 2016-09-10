var express = require('express')
var request = require('request')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index')
})

router.get('/orgs/view/:charity_id', function(req, res) {
    var requesturl = 'http://django.tyndyll.net/charities/organisations/' + req.params.charity_id + '?format=json';
    request(requesturl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var charity = JSON.parse(response.body);
            console.log(charity.clients);
            charity.followers = [{ "name": "Jim Deadly" },{ "name": "Maria Helpful" }];
            res.render('orgs/view', { 'charity': charity })
        } else {
            res.render('ohsnap/404')
        }
    });
})

router.get('/orgs/view/', function(req, res) {
    // This is where we'd make a request to an API
    request('http://django.tyndyll.net/charities/organisations?format=json', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var detail = JSON.parse(body);
            var charities = detail.results;
            var count = detail.count;
            // console.log(charities);
            res.render('orgs/list', { 'charities': charities, 'total': count })
        } else {
            res.render('ohsnap/404')
        }
    });
    // res.render('orgs/list', { 'charities': charities })
})

router.post('/orgs/follow', function(req, res) {
    console.log(req.body);
    res.render('ohsnap/yourock')
})

// add your routes here
router.get('/volunteers/:id', function(req, res) {
    res.render('volunteers/view')
})

module.exports = router
