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
    "I will not waste chalk, Season 1, Bart the Genius",
    "I will not skateboard in the halls, Episode 1, Homer\'s Odyssey",
    "I will not burp in class, Season 1, There's No Disgrace Like Home",
    "I will not instigate revolution, Season 1, Moaning Lisa",
    "I will not draw naked ladies in class, Season 1, Call of the Simpsons",
    "I did not see Elvis, Season 1, The Telltale Head",
    "I will not call my teacher hot cakes, Season 1, Homer's Night Out",
    "Garlic gum is not funny, Season 1, The Crepes of Wrath",
    "They are laughing at me, not with me, Season 1, Krusty Gets Busted",
    "I will not yell fire in a crowded classroom, Season 1, Some Enchanted Evening",
    "I will not encourage others to fly,  Season 2, Bart Gets an F",
    "Tar is not a plaything, Season 2, Simpson and Delilh",
    "I will not Xerox my butt, Season 2, Two Cars in Every Garage and Three Eyes on Every Fish",
    "I will not trade pants with others, Season 2, Dancin\' Homer",
    "I am not a 32 year old woman, Season 2, Dead Putting Society",
    "I will not do that thing with my tongue, Season 2, Bart vs. Thanksgiving",
    "I will not drive the principal's car, Season 2, Bart the Daredevil",
    "I will not pledge allegiance to Bart, Season 2, Itchy, Scratchy and Marge",
    "I will not sell school property, Season 2, Bart Gets Hit By a Car",
    "I will not cut corners, Season 2, One Fish, Two Fish, Blowfish, Blue Fish",
    "I will not get very far with this attitude, Season 2, The Way We Was",
    "I will not make flatulent noises in class, Season 2, Homer vs. Lisa and the 8th Commandment",
    "I will not belch the national anthem, Season 2, Principal Charming",
    "I will not sell land in Florida, Season 2, Oh Brother Where Art Thou?",
    "I will not sell school property, Season 2, Bart\'s Dog Gets an F",
    "I will not grease the monkey bars, Season 2, Old Money",
    "I will not hide behind the Fifth Amendment, Season 2, Brush with Greatness",
    "I will not do anything bad ever again, Season 2, War of the Simpsons",
    "I will not show off, Season 2, Three Men and a Comic Book",
    "I will not sleep through my education, Season 2, Blood Feud",
    "I am not a dentist, Season 3, Stark Raving Dad",
    "Spitwads are not free speech, Season 3, Mr. Lisa Goes to Washington",
    "Nobody likes sunburn slappers, Season 3, When Flanders Failed",
    "High explosives and school don't mix, Season 3, Bart the Murderer",
    "I will not squeak chalk, Season 3, Homer Defined",
    "I will finish what I stah, Season 3, Like Father, Like Clown",
    "Bart Bucks are not legal tender, Season 3, Lisa\'s Pony",
    "I will not fake rabies, Season 3, Saturdays of Thunder",
    "Underwear should be worn on the inside, Season 3, Flaming Moe\'s",
    "The Christmas Pageant does not stink, Season 3, Burns Verkaufen der Kraftwerk",
    "I will not torment the emotionally frail, Season 3, I Married Marge",
    "I will not carve gods, Season 3, Radio Bart",
    "I will not spank others, Season 3, Homer Alone",
    "I will not aim for the head, Season 3, Homer at the Bat",
    "I will not barf unless I\'m sick, Season 3, Separate Vocations",
    "I saw nothing unusual in the teacher\'s lounge, Season 3, Dog of Death",
    "I will not conduct my own fire drills, Season 3, Colonel Homer",
    "Funny noises are not funny, Season 3, Black Widower",
    "I will not spin the turtle, Season 3, The Otto Show",
    "I will not snap bras, Season 3, Bart\'s Friend Falls in Love",
    "I will not fake seizures, Season 3, Brother, Can You Spare Two Dimes?",
    "This punishment is not boring and pointless, Season 4, Kamp Krusty",
    "My name is not Dr. Death, Season 4, A Streetcar Named Marge",
    "I will not defame New Orleans, Season 4, Homer the Heretic",
    "I will not prescribe medication, Season 4, Lisa the Beauty Queen",
    "I will not bury the new kid, Season 4, Itchy and Scratchy the Movie",
    "I will not teach others to fly, Season 4, Marge Gets a Job",
    "I will not bring sheep to class, Season 4, New Kid on the Block",
    "A burp is not an answer, Season 4, Mr. Plow",
    "Teacher is not a leper, Season 4, Lisa\'s First Word",
    "Coffee is not for kids, Season 4, Homer\'s Triple Bypass",
    "I will not eat things for money, Season 4, Marge vs. the Monorail",
    "I will not yell She\'s Dead during roll call, Season 4, Selma\'s Choice",
    "The principal\'s toupay is not a frisbee, Season 4, Brother from the Same Planet",
    "I will not call the principal spud head, Season 4, I Love Lisa",
    "Goldfish don\'t bounce, Season 4, Duffless",
    "Mud is not one of the 4 food groups, Season 4, Last Exit to Springfield",
    "No one is interested in my underpants, Season 4, So It's Come to This: A Simpsons Clip Show",
    "I will not sell miracle cures, Season 4, The Front",
    "I will return the seeing-eye dog, Season 4, Whacking Day",
    "I do not have diplomatic immunity, Season 4, Marge in Chains",
    "I will not charge admission to the bathroom, Season 4, Krusty Gets Cancelled",
    "I will never win an Emmy, Season 5, Homer\'s Barbershop Quartet",
    "The cafeteria deep fryer is not a toy, Season 5, Cape Fear",
    "All work and no play makes Bart a dull boy, Season 5, The Last Temptation of Homer",
    "I will not say Springfield just to get applause, Season 5, Springfield (Or, How I Learned to Stop Worrying and Love Legalized Gambling)",
    "I am not authorized to fire substitute teachers, Season 5, Homer the Vigilante",
    "My homework was not stolen by a one-armed man, Season 5, Bart Gets Famous",
    "I will not go near the kindergarten turtle, Season 5, Homer and Apu",
    "I am not delightfully saucy, Season 5, Homer Loves Flanders",
    "Organ transplants are best left to the professionals, Season 5, Bart Gets an Elephant",
    "The Pledge of Allegiance does not end with Hail Satan, Season 5, Burn\'s Heir",
    "I will not celebrate meaningless milestones, Season 5, Sweet Seymour Skinner\'s Badass Song",
    "There are plenty of businesses like show business, Season 5, The Boy Who Knew Too Much",
    "I will not re-transmit without the express permission of Major League Baseball, Season 5, Lady Bouvier\'s Lover",
    "Five days is not too long to wait for a gun, Season 5, Secrets of a Successful Marriage",
    "Beans are neither a fruit nor musical, Season 6, Bart of Darkness",
    "No one is interested in my underpants , Season 6, Lisa\'s Rival",
    "I will not use abbrev., Season 6, Another Simpsons Clip Show",
    "I am not the reincarnation of Sammy Davis Jr., Season 6, Itchy and Scratchy Land",
    "I will not send lard through the mail, Season 6, Bart\'s Girlfriend",
    "I will not dissect things unless instructed, Season 6, Lisa on the Ice",
    "I will not whittle hall passes out of soap, Season 6, Homer Badman"

];

'use strict';

var AlexaSkill = require('./AlexaSkill');

var APP_ID = ""; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

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
    var speechOutput = "Welcome to the Simpsons Chalkboard gag skill.";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "For instructions on what you can say, please say help me.";
    response.ask(speechOutput, repromptText);
};

Chalkboard.prototype.intentHandlers = {
    "GagIntent": function (intent, session, response) {
      // pick a random number and pull a line out of the array
      var gagID = Math.floor(Math.random() * GAG_LIST.length);
      var speechOutput = GAG_LIST[gagID];
      var speechOutput = {
        speech: speechOutput,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
      };
      response.ask(speechOutput);
    },
    "HelpIntent": function (intent, session, response) {
        var speechOutput = "Welcome to the Simpsons Chalkboard gag skill. Say get me a gag to hear a random chalkboard gag.";
        var repromptText = "What can I help you with?";
        response.ask(speechOutput, repromptText);
    }
};

exports.handler = function (event, context) {
    var cb = new Chalkboard();
    cb.execute(event, context);
};
