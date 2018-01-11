const express = require('express');
const router = express.Router();
const File = require('../models/files');

router.get('/filelist', (req, res, next) => {
  var data = File.getDrivelist(File.path,function(){    
  });
  res.json(data);
});
//getimage rotes
router.get('/listimages', (req, res, next) => {
  var data = File.getImagelist(File.path,function(){    
  });
  res.json(data);
});
//getaudio rotes
router.get('/listaudios', (req, res, next) => {
  var data = File.getAudiolist(File.path,function(){    
  });
  res.json(data);
});
//getimage rotes
router.get('/listvideos', (req, res, next) => {
  var data = File.getVideolist(File.path,function(){    
  });
  res.json(data);
});
module.exports = router;