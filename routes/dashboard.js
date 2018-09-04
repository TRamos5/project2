let express = require('express');
let router = express.Router();
let db = require('./../models');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

  router.get('/dashboard', function(req, res){
   
    //Declare Varialbes 
    let today = new Date();
    
    //Pulls an array of Project objects 
    db.project.findAll({
        where: {
            user_id: req.user.id,
        }
    })
    .then(function(result){
        var projectName = projectName;
        // var owner = teamLead;
        var startDate = startDate;
        var endDate = endDate;

        res.render('/dashboard', {
            pageTitle: 'Dashboard',
            projectName: projectName,
            // owner: owner,
            startDate: startDate,
            endDate: endDate
        })
    })
  })


  
module.exports = router;



  
