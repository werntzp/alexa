/**
 * This skill returns a random chalkboard gag from the Simpsons show opening. 
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Simpsons Chalkboard for a gag"
 *  Alexa: "I won't waste chalk, Episode 1, Bart the Genius"
 */

/**
 * Array containing gags.
 */
var GAG_LIST = [
    "I will not waste chalk <break time=\"0.3s\" /> Season 1, Bart the Genius",
    "I will not skateboard in the halls  <break time=\"0.3s\" />  Episode 1, Homer's Odyssey",
    "I will not burp in class <break time=\"0.3s\" /> Season 1, There's No Disgrace Like Home",
    "I will not instigate revolution <break time=\"0.3s\" /> Season 1, Moaning Lisa",
    "I will not draw naked ladies in class <break time=\"0.3s\" /> Season 1, Call of the Simpsons",
    "I did not see Elvis <break time=\"0.3s\" /> Season 1, The Telltale Head",
    "I will not call my teacher hot cakes <break time=\"0.3s\" /> Season 1, Homer's Night Out",
    "Garlic gum is not funny <break time=\"0.3s\" /> Season 1, The Crepes of Wrath",
    "They are laughing at me, not with me <break time=\"0.3s\" /> Season 1, Krusty Gets Busted",
    "I will not yell fire in a crowded classroom <break time=\"0.3s\" /> Season 1, Some Enchanted Evening"
];

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
    "GagIntent": function (intent, session, response) {
      // pick a random number and pull a line out of the array
      var gagID = Math.floor(Math.random() * GAG_LIST.length);
      var speechText = GAG_LIST[gagID];
      var speechOutput = {
                speech: speechText,
                type: AlexaSkill.speechOutputType.SSML
            };
      response.ask(speechOutput);
    },
    "HelpIntent": function (intent, session, response) {
        var speechOutput = "Welcome to the Simspons Chalkboard gag skill.";
        var repromptText = "You can say things like, get me a gag ... Now, what can I help you with?";
        response.ask(speechOutput, repromptText);
    }
};

exports.handler = function (event, context) {
    var cb = new Chalkboard();
    cb.execute(event, context);
};
