
var speclate = require('speclate');
var spec = require('../spec');

console.log(spec)
speclate.generate(spec, function (error) {
  if (error) {
    console.log('Error generating site: ', error)
  }
})