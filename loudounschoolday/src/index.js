/**
 * This skill returns whether today or tomorrow is an A or B day for Loudoun County Public Schools
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask loudoun school day about today"
 *  Alexa: "Today, January 15th, is an A day"
 */


'use strict';

var AlexaSkill = require('./AlexaSkill');

var APP_ID = ""; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * SchoolDay is a child of AlexaSkill.
 */
var SchoolDay = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
SchoolDay.prototype = Object.create(AlexaSkill.prototype);
SchoolDay.prototype.constructor = SchoolDay;

SchoolDay.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechOutput = "Welcome to the Loudoun County school day skill. Ask about today or tomorrow to hear whether it is an A or B day.";
    response.ask(speechOutput, "", true);
};

Chalkboard.prototype.intentHandlers = {
    "SchoolDayIntent": function (intent, session, response) {
      // see if  today or tomorrow, get the date, and check the array for whether A, B or no school
      var speechOutput = "Today is an A day";
      var speechOutput = {
        speech: speechOutput,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
      };
      response.tell(speechOutput, "", true);
    },
    "HelpIntent": function (intent, session, response) {
        var speechOutput = "Ask about today or tomorrow to hear whether it is an A or B day.";
        response.ask(speechOutput, "", true);
    },
    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye.";
        response.tell(speechOutput);
    },
    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye.";
        response.tell(speechOutput);
    }
};

exports.handler = function (event, context) {
    var sd = new SchoolDay();
    sd.execute(event, context);
};

