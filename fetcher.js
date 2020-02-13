const request = require("request");
const fs = require("fs");

let URL = process.argv[2];
//console.log(URL);
let PATH = process.argv[3];
//console.log(PATH);
const fetcher = function (url, path) {
  request(url, (error, statusBode, body) => {
      //console.log(body);
     fs.writeFile(path, body, function(err) {
      if (err) throw err;
       console.log("Saved!");
     });
    }
  );
}

fetcher(URL, PATH);

