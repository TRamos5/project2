let express = require('express');
let router = express.Router();

router.get('/budget',function(req,res){
  
    res.render('budget', {
        pageTitle: 'Budget'
    })
  })



  
module.exports = router;