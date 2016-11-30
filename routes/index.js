var express = require('express');
var router = express.Router();
var fs = require('fs');

var framebuilder = require('../src/framebuilder');


var svgWrapper = function(paths) {
  var svgFile = "<?xml version='1.0' encoding='utf-8'?>\n\
    <svg width='120cm' height='240cm' xmlns='http://www.w3.org/2000/svg'>\n\
    <style type='text/css'>path{stroke:#000;fill:none;}</style>\n\
    <g transform='scale(35.43307)'><path d='" + paths + "' /></g>\n\
    </svg>";
  return svgFile;
}

router.get('/save/:width/:height', function(req, res, next) {
  fs.writeFile("test", svgWrapper(framebuilder.build(req.params.width, req.params.height)), function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
  res.render('index', { title: 'Express' });
});

router.get('/get', function(req, res, next) {
  res.download('test', 'frame.svg')
});

module.exports = router;
