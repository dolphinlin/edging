var edge = require('edge');

var hello = edge.func('async (input) => Math.Pow(Convert.ToInt32(input), 2)');

hello(process.argv[2], function(err, result) {
  console.log(result);
});
