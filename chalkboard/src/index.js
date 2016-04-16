/**
 * This skill returns a random chalkboard gag from the Simpsons show opening. 
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Simpsons Chalkboard for a gag"
 *  Alexa: "I won't waste chalk, Episode 1, Bart the Genius"
 */

'use strict';

var AlexaSkill = require('./AlexaSkill');

var APP_ID = undefined; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * Chalkboard is a child of AlexaSkill.
 */
var Chalkboard = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Chalkboard.prototype = Object.create(AlexaSkill.prototype);
Chalkboard.prototype.constructor = Chalkboard;

Chalkboard.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechOutput = "Welcome to the Simspons Chalkboard gag skill.";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "For instructions on what you can say, please say help me.";
    response.ask(speechOutput, repromptText);
};

Chalkboard.prototype.intentHandlers = {
    GagIntent: function (intent, session, response) {
      // pick a random number and pull a line out of the array
    },
    HelpIntent: function (intent, session, response) {
        var speechOutput = "Welcome to the Simspons Chalkboard gag skill.";
        var repromptText = "You can say things like, get me a gag ... Now, what can I help you with?";
        response.ask(speechOutput, repromptText);
    }
};

exports.handler = function (event, context) {
    var calc = new Calculator();
    calc.execute(event, context);
};
