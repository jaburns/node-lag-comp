'use strict';

var fs = require('fs');

// Build the client bundle using browserify if it doesn't exist.
if (! fs.existsSync('client.bundle.js')) {
  var b = require('browserify')('./client/main');
  b.bundle(function(err,buf) {
    if (err) console.error(err);
    else fs.writeFileSync('client.bundle.js', buf.toString());
  });
}