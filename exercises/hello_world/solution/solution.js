var edge = require('edge');

var hello = edge.func(process.argv[2]);

hello('EDGE', function(err, result) {
  console.log(result);
});
