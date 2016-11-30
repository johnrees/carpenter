var paper = require('paper');

paper.setup();

var build = function(width height) {
  var rect = new paper.Path.Rectangle(10,10,width, height);
  return rect.exportSVG({ asString: false, bounds: null }).getAttribute('d');
}
exports.build = build;
