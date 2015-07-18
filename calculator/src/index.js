
/**
 * This is a simple calculator that right now only adds two numbers. 
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Calculator what is two plus two."
 *  Alexa: "Two plus two equals four"
 */

'use strict';

var AlexaSkill = require('./AlexaSkill');

var APP_ID = undefined; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * Calculator is a child of AlexaSkill.
 */
var Calculator = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Calculator.prototype = Object.create(AlexaSkill.prototype);
Calculator.prototype.constructor = Calculator;

Calculator.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechOutput = "Welcome to a simple calculator.";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "For instructions on what you can say, please say help me.";
    response.ask(speechOutput, repromptText);
};

Calculator.prototype.intentHandlers = {
    AddIntent: function (intent, session, response) {
        var num1 = Number(intent.slots.NumOne.value);
        var num2 = Number(intent.slots.NumTwo.value);
        if ((num1) && (num2)) {
            response.ask(num1 + " plus " + num2 + " equals " + (num1 + num2));
        } else {
            response.ask("I'm sorry, I could not add those numbers together.");
        }
    },
    HelpIntent: function (intent, session, response) {
        var speechOutput = "Welcome to a simple calculator.";
        var repromptText = "You can say things like, what's two plus two ... Now, what can I help you with?";
        response.ask(speechOutput, repromptText);
    }
};

exports.handler = function (event, context) {
    var calc = new Calculator();
    calc.execute(event, context);
};
