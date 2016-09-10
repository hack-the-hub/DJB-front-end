var express = require('express')
var request = require('request')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index')
})

router.get('/orgs/view/:charity_id', function(req, res) {  
    // This is where we'd make a request to an API
    // request('url for aPI goes here' + req.params.charity_id, function(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         // var postcode = JSON.parse(body).result;
    //         console.log(postcode);
    //         res.render('orgs/view', { 'charity': charity })
    //     }
    //     else{
    //     res.render('ohsnap/404', { 'charity': charity })
    //     }
    // });

    var charity = {
        "charity_id": "12345",
        "name": "Awesome Badger Charity",
        "registered": "19790201",
        "address": "1, the street, the town, the world, BT1XXp",
        "website": "http://example.org",
        "email": "blah@example.org",
        "phone": "28949128741",
        "mission": "to save all the badgers from guns"
    };

    res.render('orgs/view', { 'charity': charity })

})

router.get('/orgs/view/', function(req, res) {  
    // This is where we'd make a request to an API
    // request('url for aPI goes here' + req.params.charity_id, function(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         // var postcode = JSON.parse(body).result;
    //         console.log(postcode);
    //         res.render('orgs/view', { 'charity': charity })
    //     }
    //     else{
    //     res.render('ohsnap/404', { 'charity': charity })
    //     }
    // });

    var charities = [{
        "charity_id": "12345",
        "name": "Awesome Badger Charity",
        "registered": "19790201",
        "address": "1, the street, the town, the world, BT1XXp",
        "website": "http://example.org",
        "email": "blah@example.org",
        "phone": "28949128741",
        "mission": "to save all the badgers from guns"
    },{
        "charity_id": "54321",
        "name": "Coding for a Purpose",
        "registered": "19790201",
        "address": "1, the street, the town, the world, BT1XXp",
        "website": "http://example.org",
        "email": "blah@example.org",
        "phone": "28949128741",
        "mission": "Writing code to make the world a better place. For Free."
    }];

    res.render('orgs/list', { 'charities': charities })

})

router.post('/orgs/follow', function(req, res) {  

    // This is where we'd make a request to POST API
    // request('url for aPI goes here' + req.params.charity_id, function(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         // var postcode = JSON.parse(body).result;
    //         console.log(postcode);
    //         res.render('orgs/view', { 'charity': charity })
    //     }
    //     else{
    //     res.render('ohsnap/404', { 'charity': charity })
    //     }
    // });

    var charity = {
        "charity_id": "12345",
        "name": "Awesome Badger Charity",
        "registered": "19790201",
        "address": "1, the street, the town, the world, BT1XXp",
        "website": "http://example.org",
        "email": "blah@example.org",
        "phone": "28949128741",
        "mission": "to save all the badgers from guns"
    };

    console.log(req.body);

    res.render('orgs/view', { 'charity': charity })
})
// add your routes here
router.get('/volunteers/:id', function(req, res) {  
    res.render('volunteers/view')
})

module.exports = router
