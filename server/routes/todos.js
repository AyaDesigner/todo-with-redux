const express = require('express');
const router = express.Router();


/* GET todos listing. */

router.get('/', function(req, res, next) {
    res.send([{
        id:5,
        name: "to sleep"
    }]);
});


router.post('/', function(req, res, next) {
    console.log("post : " + req.body.name);
    // save the todo received in the 
    console.log(req.body);
    res.status(200).send(req.body);

});





module.exports = router;

