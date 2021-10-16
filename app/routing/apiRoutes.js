// ======================================= PACKAGES INVOKE
var profiles = require("../data/friends.js");


// ======================================= EXPORT

module.exports = function (app) {

  app.get("/api/historical_figures", function (req, res) {
    res.json(profiles.historyFigures);
  });

  app.post("/", function (req, res) {

    var scoresResultsArr = [];
    var inputProfile = req.body;
    var bestMatchIndex;

    profiles.inputProfile.name = inputProfile.name.toUpperCase();
    profiles.inputProfile.photo = inputProfile.photo;
    profiles.inputProfile.scores = inputProfile.scores;

    profiles.historyFigures.forEach(function (item) {

      var scoresDiff = 0;

      item.scores.forEach(function (item, index) {

        scoresDiff += Math.abs(inputProfile.scores[index] - item);

      })

      scoresResultsArr.push(scoresDiff)

    })

    var bestMatchScore = scoresResultsArr[0];

    // console.log(bestMatchScore);
    // console.log(scoresResultsArr);

    for (i = 1; i < scoresResultsArr.length; i++) {

      if (bestMatchScore > scoresResultsArr[i]) {

        bestMatchScore = scoresResultsArr[i];
        bestMatchIndex = i;
        
      } else {

        bestMatchIndex = 0;

      }

    }

    // console.log(bestMatchIndex);

    var sentResponse = {
      name: profiles.historyFigures[bestMatchIndex].name.toUpperCase(),
      photo: profiles.historyFigures[bestMatchIndex].photo
    }

    res.send(sentResponse);

  })

};