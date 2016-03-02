
var speclate = require('speclate');
var spec = require('../spec');

speclate.generate(spec, function (error) {
  if (error) {
    console.log('Error generating site: ', error)
  }
})


speclate.api(spec, function (error) {
  if (error) {
    console.log('Error generating API: ', error)
  }
})


speclate.pageify(spec, function (error) {
  if (error) {
    console.log('Error generating site: ', error)
  }
})