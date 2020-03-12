var fs = require("fs");
var frontMatter = require("front-matter");

fs.readFile("./_data/info/2020-03-12-samu.md", "utf8", function(err, data) {
  if (err) throw err;

  var content = frontMatter(data);

  const fileContent = Object.entries(content.attributes)
    .map(([k, v]) => `REACT_APP_${k.toUpperCase()}="${v}"`)
    .join("\n");
  fs.writeFile("./.env.local", fileContent, err => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
  });
});
