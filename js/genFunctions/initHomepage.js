let { initOutput, nav } = require("../templateLiterals");

let initHomepage = () => {
  fs.writeFileSync(
    path.join(__dirname, "../output.html"),
    contentData.styles,
    function() {
      console.log("CSS added");
    }
  );
  // append the basic structure
  fs.appendFileSync(path.join(__dirname, "../output.html"), initOutput);

  let outputHTML = fs.readFileSync(
    path.join(__dirname, "../output.html"),
    "utf-8"
  );
};

module.exports = initHomepage;
