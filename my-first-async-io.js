const fs = require("fs");

fs.readFile(process.argv[2], function (err, data) {
  if (!err) {
    var buffer = data.toString().split("\n").length - 1;
    console.log(buffer);
  }
});
