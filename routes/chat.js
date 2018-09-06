var express = require('express');
let app = express();
var router = express.Router();


router.get('/chat', function(req, res){
    
    res.render('chat', {
        pageTitle: "Chat",
        pageID: 'chat',
        username:'Sam',
        number:'(713)560-1449'
    })
})

module.exports = router;