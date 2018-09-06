let express = require('express');
let router = express.Router();
let db = require('./../models');
const LocalStrategy = require('passport-local').Strategy
let passport = require('passport');
const bcrypt = require('bcryptjs');
var cookieParser = require('cookie-Parser');
var bodyParser = require('body-parser');
var session = require('express-session');
const Sequelize = require('sequelize');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(cookieParser());

var myStore = new SequelizeStore({
    db: db.sequelize
});

router.use(session({
    secret: 'keyboard cat',
    store: myStore,
    resave: false,
    proxy: true
}));

myStore.sync();

router.use(passport.initialize());
router.use(passport.session());


router.get('/login', (req, res) => {
    res.render('login', {
        pageTitle: 'Log In'
    })
});

router.post('/login',
  passport.authenticate('local', { successRedirect: '/dashboard',
                                    failureRedirect: '/login'})
);


passport.use(new LocalStrategy((userName, password, done) => {
    console.log('Im in passport');
    db.user.findAll({where: {userName: userName}}).then ((results) => {
       
        if(results != null) {
            const data = results[0];
            bcrypt.compare(password, data.password, function(err, res) {
                if(res) {
                    console.log("Hello world")
                    console.log(data)
                    done(null, { id: data.id, userName: data.userName})
                } else {
                    console.log("Returned nothing")
                    done(null, false)
                }
            })
        } else {
            console.log("just out there")
            done(null, false)
        }

        // done(null, false)

        // console.log(username)
    } //end of callback
    
    
)//end of then promise  

    
}))



passport.serializeUser((user, done) => {
    done(null, user.id)
    
})

passport.deserializeUser((id, done) => {
    db.user.findById(parseInt(id, 10)).then( (data) => {
        
       
        done(null, data)
    }//end of callback
    )//end of promise
    
})






module.exports = router;