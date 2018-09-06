let express = require('express');
let router = express.Router();
let db = require('./../models');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/create', function(req, res){
    
    res.render('create', {
    })
})
router.post('/create', (req,res) => {

    db.project.create({projectName: req.body.Nname, teamLead: req.body.Nowner, startDate: req.body.NSdate, endDate: req.body.NEdate, budget: req.body.Nbudget, description: req.body.Ndescription})
    .then(() => {
        // success;
        res.redirect('/tasks');
    })
    .catch(error => {
        // error;
        alert(error)
    });
  
    //save to database
    
    
  });
module.exports = router;