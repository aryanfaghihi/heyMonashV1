var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var router = express.Router();
var api = express.Router();
var logicArray = require('./res/keywords').newLogicArray;

router.get('/', function (req, res) {
    res.sendfile('./client/index.html');
});
router.get('/js', function (req, res) {
    res.sendfile('./client/voice.js');
});
router.get('/css', function (req, res) {
    res.sendfile('./client/css/style.css');
});
router.get('/chime', function (req, res) {
    res.sendfile('./client/chime.ogg');
});
api.get('/ask/:query', function (req, res) {
    console.log(req.params.query);
    var inputQuery = req.params.query.toLowerCase();
    var serverResponse = "I'm sorry, I can't find a solution to that. Please try again!";
    for (var i = 0; i < logicArray.length; i++) {
        var isMatched = false;
        // Look through the required (compulsory) keywords.
        for (var j = 0; j < logicArray[i].keywords.required.length; j++) {
            if (inputQuery.search(logicArray[i].keywords.required[j]) !== -1) {
                isMatched = true;
            }
            else {
                isMatched = false;
                break;
            }
        }
        if (isMatched) {
            // Look though the optional keywords, once the required keywords have been matched.
            for (var k = 0; k < logicArray[i].keywords.alternatives.length; k++) {
                for (var g = 0; g < logicArray[i].keywords.alternatives[k].length; g++) {
                    if (inputQuery.search(logicArray[i].keywords.alternatives[k][g]) !== -1) {
                        isMatched = true;
                        break;
                    }
                    else {
                        isMatched = false;
                    }
                }
                if (!isMatched) {
                    break;
                }
            }

            if (isMatched) {
                console.log('the response is ' + logicArray[i].response);
                serverResponse = logicArray[i].response;
                break;
            }
        }
    }

    res.send(serverResponse);
});

app.use('/', router);
app.use('/api', api);
// START THE SERVER
// =============================================================================
var port = process.env.PORT || 1337;
app.listen(port, function () {
    console.log('Magic happens on port ' + port);
});