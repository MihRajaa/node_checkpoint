const fs = require("fs");
const path = require("path");

var ext = "." + process.argv[3];

fs.readdir(process.argv[2], function (err, list) {
  if (!err) {
    list.forEach(function (file) {
      if (path.extname(file) === ext) {
        console.log(file);
      }
    });
  }
});
