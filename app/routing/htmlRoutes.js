// ======================================= PACKAGES INVOKE
var profiles = require("../data/friends.js");



// ======================================= EXPORT

module.exports = function (app,path) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
      });
    app.get("public/assets/style/style.css", function(req, res) {
        // res.sendFile(path.join(__dirname, "../public/assets/style/style.css"));
        res.sendFile(path.join(__dirname));
      });

};