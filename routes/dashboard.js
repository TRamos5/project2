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
            user_id: req.user.id
        }
    })
    .then(function(result){
        var projectName = project.projectName;
        var owner = project.teamLead;
        var startDate = project.startDate;
        var endDate = project.endDate;

        res.render('/dashboard', {
            projectName: projectName,
            owner: owner,
            startDate: startDate,
            endDate: endDate
        })
    })
  })


  
module.exports = router;



  
