var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
conversation = {
    history: [],
    addQuestion: function (question) {
        // var addQuestion = this.isQuestionLegit(question);
        // if (addQuestion.condition) {
            this.history.push({
                question: question,
                response: ''
            });
            ask_server(final_transcript);
            recognition.stop();
            var index = this.history.length;
            this.createQuestionBubble(question, index);
            updateScroll();
        // }
    },
    createQuestionBubble: function(question, index) {
        question = capitalize(question);
        var conversationDiv = document.getElementById('conversation');
        var newQuestionDiv = document.createElement("div");
        if (document.getElementById("ongoingQuestionDiv")) {
            document.getElementById("ongoingQuestionDiv").remove();
        }
        newQuestionDiv.className="question";
        newQuestionDiv.innerHTML = "<div class='bubble-question'><span id='final_span" + index + "'>" + question + "</span></div>";
        conversationDiv.appendChild(newQuestionDiv);
        updateScroll();
    },
    addResponse: function (response, isCard) {
        var latestIndex = this.history.length - 1;
        this.history[latestIndex].response = response;

        this.createResponseBubble(response, latestIndex, isCard);

        updateScroll();
    },
    createResponseBubble: function (response, index, isCard) {
        var conversationDiv = document.getElementById('conversation');
        var newResponseDiv = document.createElement("div");
        newResponseDiv.className="response animated slideInLeft";
        newResponseDiv.innerHTML = "<div><span id='final" + index + "'>" + response + "</span></div>";
        if (!isCard) {
            newResponseDiv.innerHTML = "<div class='bubble-response'><span id='final" + index + "'>" + response + "</span></div>";
        }
        conversationDiv.appendChild(newResponseDiv);
        updateScroll();
    },
    // debuggingQuestionHistory: [],

    // isQuestionLegit: function(question) {
    //     console.log(question);
    //     this.debuggingQuestionHistory.push(question);
    //     if (this.debuggingQuestionHistory.length > 2) {
    //         this.debuggingQuestionHistory = [];
    //         return {
    //             condition: true,
    //             question: question
    //         }
    //     }
    //     return {
    //         condition: false,
    //         question: ''
    //     };
    // }

};
// Just for us to know.
var conversationTemplate = {
    question: '',
    response: ''
};

if (!('webkitSpeechRecognition' in window)) {
    console.log('USE CHROME!');
} else {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function() {
        recognizing = true;
        var conversationDiv = document.getElementById('conversation');
        var ongoingQuestionDiv = document.createElement("div");
        ongoingQuestionDiv.id = "ongoingQuestionDiv";
        ongoingQuestionDiv.className="question";
        ongoingQuestionDiv.innerHTML = "<div class='bubble-question'><span id='ongoingQuestion'></span></div>";
        conversationDiv.appendChild(ongoingQuestionDiv);
    };

    recognition.onerror = function(event) {
        if (event.error == 'no-speech') {
            ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
            ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
            if (event.timeStamp - start_timestamp < 100) {
            } else {
            }
            ignore_onend = true;
        }
    };

    recognition.onend = function() {
        $("#mic-button").removeClass("pulse-button-anim");
        recognizing = false;
        if (ignore_onend) {
            return;
        }

        if (window.getSelection) {
            window.getSelection().removeAllRanges();
            var range = document.createRange();
            if (document.getElementById('ongoingQuestion')) {
                range.selectNode(document.getElementById('ongoingQuestion'));
            }
            window.getSelection().addRange(range);
        }

    };

    recognition.onresult = function(event) {
        $(".response").removeClass("hidden");
        var interim_transcript = '';
        // if (isMobile()) {
        //     handleMobileQuestion(event);
        // }
        // else {
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                    conversation.addQuestion(final_transcript);
                    console.log(conversation);
                    console.log(final_transcript);
                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
            }
            if (document.getElementById("ongoingQuestion")) {
                document.getElementById("ongoingQuestion").innerHTML = linebreak(interim_transcript);
            }
            if (final_transcript || interim_transcript) {
                showButtons('inline-block');
            }
        // }
    };
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
    return s.replace(first_char, function(m) { return m.toUpperCase(); });
}


function startButton(event) {
    if (recognizing) {
        $("#mic-button").removeClass("pulse-button-anim");
        recognition.stop();
        return;
    }
    playChime();
    $("#mic-button").addClass("pulse-button-anim");
    $(".question").removeClass("hidden");
    final_transcript = '';
    recognition.lang = 'en-AU';
    recognition.start();
    ignore_onend = false;
    showButtons('none');
    start_timestamp = event.timeStamp;
    updateScroll();
}


var current_style;
function showButtons(style) {
    if (style == current_style) {
        return;
    }
    current_style = style;
}



var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

function ask_server(query) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            handleResponse(this.responseText);
        }
    };
    xhttp.open("GET", "/api/ask/" + query, true);
    xhttp.send();

}

function handleResponse (response) {
    console.log(response);
    if (response.search("</") == -1) {
        conversation.addResponse(response, false);
        speak(response);
    }
    else {
        response = JSON.parse(response);
        conversation.addResponse(response.card, true);
        speak(response.voice);
    }
    console.log(conversation);

    //speak(response);
}


function speak(text) {
    responsiveVoice.speak(text);
}


Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

function playChime() {
    var audio = document.getElementById("audio");
    audio.play();
}

function updateScroll(){
    var element = document.getElementById("conversation");
    element.scrollTop = element.scrollHeight;
}


function handleMobileQuestion (event) {
    console.log(event);
}

function isMobile() {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}