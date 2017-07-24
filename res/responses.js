module.exports = {
    getTime: function () {
        var date = new Date(); // for now
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ' ' + minutes + ' ' + ampm;
        var time = "It's " + strTime;
        return time;
    },

    getParkLocation: function () {
        var pLocation = "There's free parking on campus after 4 30 pm. There's also free parking on the weekend at Clayton."
        return pLocation
    },

    getClassLocation: function () {
        var cLocation;
        cLocation = {
            voice: "Your next class, IT professional practice is on Monday at 2 pm",
            card: '<div class="mdl-card-wide mdl-shadow--2dp card-class"> <div id="card-class" class="mdl-card__title mdl-card--expand card-class"> <h2 class="mdl-card__title-text">FIT2003: IT Professional Practice - Lecture</h2> </div> <div class="mdl-card__supporting-text"> <b>2:00PM - 4:00PM</b> <br/> Theatre H3, 20 Chancellors Walk </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href="https://www.google.com.au/maps/place/Robert+Menzies+Building/@-37.9119733,145.1319818,18.46z/data=!4m5!3m4!1s0x0:0xc05606458f216ac4!8m2!3d-37.9128179!4d145.1324576"> Get Directions </a> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href="http://moodle.vle.monash.edu/"> View on Moodle </a> </div> </div>'
        }

        return cLocation

    },

    getIntroRes: function () {
        var intro = "Good afternoon! I'm your personal assistant for all things Monash. How may I help you today?"
        return intro
    },

    getHalTime: function () {
        var halTime = {
            card: '<div class="mdl-card-wide mdl-shadow--2dp"> <div id="card-library-hal" class="mdl-card__title mdl-card--expand"> <h2 class="mdl-card__title-text">Hargrave-Andrew Library</h2> </div> <div class="mdl-card__supporting-text"> Monday <span style="float: right;">8:00am - 12:00am</span> <br/> Tuesday <span style="float: right;">8:00am - 12:00am</span> <br/> Wednesday <span style="float: right;">8:00am - 12:00am</span> <br/> Thursday <span style="float: right;">8:00am - 12:00am</span> <br/> Friday <span style="float: right;">8:00am - 9:00pm</span> <br/> Saturday <span style="float: right;">1:00pm - 5:00pm</span> <br/> <b>Sunday <span style="float: right;">1:00pm - 5:00pm</span></b> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href="https://www.google.com.au/maps/place/Monash+University+Clayton+Campus/@-37.9114772,145.1335671,18.11z/data=!4m5!3m4!1s0x6ad66acbf64673b9:0xfaf9b169a587104!8m2!3d-37.9114731!4d145.1344641"> Get Directions </a> </div> </div>',
            voice: "the Hargrave Andrew library will close at 5 00 PM today.Here are the hours for the rest of the week."
        }
        return halTime;
    },

    getMathesonTime: function () {
        var mathesonTime = {
            card: '<div class="mdl-card-wide mdl-shadow--2dp"> <div id="card-library-matheson" class="mdl-card__title mdl-card--expand"> <h2 class="mdl-card__title-text">Sir Louis Matheson Library</h2> </div> <div class="mdl-card__supporting-text"> Monday <span style="float: right;">8:00am - 9:00pm</span> <br/> Tuesday <span style="float: right;">8:00am - 9:00pm</span> <br/> Wednesday <span style="float: right;">8:00am - 9:00pm</span> <br/> Thursday <span style="float: right;">8:00am - 9:00pm</span> <br/> Friday <span style="float: right;">8:00am - 9:00pm</span> <br/> Saturday <span style="float: right;">10:00am - 5:00pm</span> <br/> <b>Sunday <span style="float: right;">10:00am - 5:00pm</span></b> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href="https://www.google.com.au/maps/place/Sir+Louis+Matheson+Library/@-37.9127761,145.1321184,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad66acc776bc4ab:0xfbe9b25826ad5fd4!8m2!3d-37.9127761!4d145.1343071"> Get Directions </a> </div> </div>',
            voice: "the Matheson library will close at 5 00 PM today.Here are the hours for the rest of the week."
        }
        return mathesonTime;
    },


    getFeesPay: function () {
        var feesPay = {
            card: '<div class="demo-card-event mdl-card mdl-shadow--2dp"><div class="mdl-card__title mdl-card--expand"><h4>Pay your fees<br/><p>When fees are due, you will receive a document advising you of the amount and due date. This will be in the form of one of the following...</p></h4></div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href="https://www.monash.edu/fees/payment/payment-options">Visit Website</a><div class="mdl-layout-spacer"></div><i class="material-icons">language</i></div></div>',
            voice: "You can easily pay your fees on the Monash website. Visit the link below to get started!"
        }
        return feesPay;
    },


    getCanDo: function () {
        var canDo = {
            card: '<span class="mdl-chip mdl-chip--contact"> <span class="mdl-chip__contact mdl-color--blue mdl-color-text--white">F</span> <span class="mdl-chip__text">"How can I pay my fees?"</span> </span> </br> <span class="mdl-chip mdl-chip--contact"> <span class="mdl-chip__contact mdl-color--red mdl-color-text--white">C</span> <span class="mdl-chip__text">"When is my next class?"</span> </span> </br> <span class="mdl-chip mdl-chip--contact"> <span class="mdl-chip__contact mdl-color--yellow mdl-color-text--white">L</span> <span class="mdl-chip__text">"What time does the Hargrave library open?"</span> </span> </br> <span class="mdl-chip mdl-chip--contact"> <span class="mdl-chip__contact mdl-color--green mdl-color-text--white">P</span> <span class="mdl-chip__text">"Is there free parking on campus today?"</span> </span> </br>',
            voice: "These are some of the few things I can do"
        }


        return canDo;
    },


    getAssign: function () {
        var dueDate = {
            card: '<table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp"><thead><tr><th class="mdl-data-table__cell--non-numeric">Unit</th><th>Marks</th><th>Due Date</th></tr></thead><tbody><tr><td class="mdl-data-table__cell--non-numeric">FIT1012: Intro to IT</td><td>25</td><td>19/10/2016</td></tr><tr><td class="mdl-data-table__cell--non-numeric">FIT1012: Comp Sci</td><td>5</td><td>16/10/2016</td></tr><tr><td class="mdl-data-table__cell--non-numeric">FIT3026: IT and Business</td><td>10</td><td>23/10/2016</td></tr></tbody></table>',
            voice: 'Here are the assignments you have due in the following week:'
        }
        return dueDate
    },

    getMail: function () {
        var mail = {
            card: '<span class="mdl-badge" data-badge="4">Inbox</span>',
            voice: 'You have 4 new email messages'
        }
        return mail
    }

}
