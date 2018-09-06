let express = require('express');
let router = express.Router();
let db = require('./../models');
var bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));



router.get('/register', (req, res) => {
    res.render('register', {
        pageTitle: 'Register'
    })
});


router.post('/register', (req,res) => {

    // let username = req.body.username;
    console.log('username');
   
    // res.send(req.body.username);
    
    // hashing the password
    let password = bcrypt.hashSync(req.body.password,8);

    db.user.create({name: req.body.name, userName: req.body.userName, email: req.body.email, password: password, phoneNum: req.body.phoneNum})
    .then(() => {
        // success;
        res.redirect('/login');
    })
    .catch(error => {
        // error;
    });
  
    //save to database
    
    
  });

module.exports = router;