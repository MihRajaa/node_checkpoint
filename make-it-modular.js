const myModule = require("./mymodule");

const directory = process.argv[2];
const ext = process.argv[3];

myModule(directory, ext, function (err, files) {
  if (!err) {
    files.forEach(function (file) {
      console.log(file);
    });
  }
});
