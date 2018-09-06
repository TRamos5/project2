let express = require('express');
let router = express.Router();
let db = require('./../models');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/tasks', function(req, res){
    
    res.render('tasks', {
    })
})
router.post('/tasks', (req,res) => {

   
    
    // db.task.create({mainTask: req.body.mainTask1, description: req.body.description1})

    db.subTask.create({name: req.body.name, description: req.body.description, subTaskIndex: req.body.subTaskIndex, budget: req.body.budget, task_id: req.body.task_id, budget: req.body.budget, owner: req.body.owner})

    
    
  });
module.exports = router;