let sqip = require("sqip");
let svgToMiniDataURI = require("mini-svg-data-uri");
let request = require("request-promise-native");

let squipImages = () => {
  let arr = ["image", "mobile"];

  Promise.all(
    arr.map(s => {
      return Promise.all(
        contentData.items.map((x, i) => {
          if (!contentData.items[i].mobile && s === "mobile") {
            return;
          } else {
            return new Promise((resolve, reject) => {
              console.log(s);
              console.log(x.image);
              request
                .get({
                  url: `https://media.missguided.co.uk/image/upload/w_600,q_70/${
                    x.image
                  }`,
                  encoding: "binary"
                })
                .then(response => {
                  fs.writeFile(
                    `./tempImages/sqip-${s}-temp${i + 1}.jpeg`,
                    response,
                    {
                      encoding: "binary"
                    },
                    function(err) {
                      if (err) throw err;

                      const result = sqip({
                        filename: path.join(
                          __dirname,
                          `../../tempImages/sqip-${s}-temp${i + 1}.jpeg`
                        ),
                        numberOfPrimitives: 8
                      });

                      var svg = result.final_svg;

                      var optimizedSVGDataURI = svgToMiniDataURI(svg);

                      contentData.items[i]["squip" + s] = optimizedSVGDataURI;
                      resolve(contentData.items[i]["squip" + s]);
                      //   console.log(optimizedSVGDataURI);
                      //   console.log("this has been squipped");
                    }
                  );
                })
                .catch(err => console.log(err));
            });
          }
        })
      );
    })
  ).then(() => {
    //   write the JSON file
    fs.writeFile(
      path.join(__dirname, "../../output.json"),
      JSON.stringify(contentData, null, 2),
      function(err, data) {
        if (err) {
          console.log(error);
        }
        console.log("JSON file created");
      }
    );
  });
};

module.exports = squipImages;
