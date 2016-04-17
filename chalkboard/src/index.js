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
    "I will not whittle hall passes out of soap, Season 6, Homer Badman",
    "My homework was not stolen by a one-armed man, Season 6, Grampa vs. Sexual Inadequacy",
    "Ralph won't morph if you squeeze him hard enough, Season 6, Fear of Flying",
    "Adding just kidding doesn't make it okay to insult the principal, Season 6, Homer the Great",
    "Bagman is not a legitimate career choice, Season 6, And Maggie Makes Three",
    "Cursive writing does not mean what I think it does, Season 6, Bart\'s Comet",
    "Next time it could be me on the scaffolding, Season 6, Homie the Clown",
    "I will not hang donuts on my person, Season 6, Bart vs. Australia",
    "I will remember to take my medication, Season 6, Homer vs. Patty and Selma",
    "I will not strut around like I own the place, Season 6, Lisa\'s Wedding",
    "The Good Humor man can only be pushed so far, Season 6, Two Dozen and One Greyhounds",
    "I do not have power of attorney over first graders, Season 6, The PTA Disbands",
    "Nerve gas is not a toy, Season 6, \'Round Springfield",
    "I will not mock Mrs. Dumbface, Season 6, The Springfield Connection",
    "The First Amendment does not cover burping, Season 6, The Lemon of Troy",
    "This is not a clue... or is it?, Season 6, Who Shot Mr. Burns Part 1",
    "I will not complain about the solution when I hear it, Season 7, Who Shot Mr. Burns Part 2",
    "Bewitched does not promote Satanism, Season 7, Radioactive Man",
    "No one wants to hear from my armpits, Season 7, Home Sweet Homediddly-Dum-Doodily",
    "I am not a lean mean spitting machine, Season 7, Bart Sells His Soul",
    "The boys\' room is not a water park, Season 7, Lisa the Vegetarian",
    "Indian burns are not our cultural heritage, Season 7, King Size Homer",
    "Wedgies are unhealthy for children and other living things, Season 7, Sideshow Bob\'s Last Gleaming",
    "I will only do this once a year, Season 7, The Simpsons 138th Episode Spectacular",
    "I will stop talking about the twelve inch pianist, Season 7, Marge Be Not Proud",
    "I am not certified to remove asbestos, Season 7, Team Homer",
    "I did not learn everything I need to know from kindergarten, Season 8, You Only Move Twice",
    "I  am not my long-lost twin, Season 8, The Homer They Fall",
    "The truth is not out there, Season 8, The Springfield Files",
    "I am not licensed to do anything, Season 8, The Twisted World of Marge Simpson",
    "I will not hide the teacher's Prozac, Season 8, Simpsoncalifragilisticexpialadohcious",
    "A fire drill does not demand a fire, Season 8, The Canine Mutiny",
    "I no longer want my MTV, Season 9, Lisa\'s Sax",
    "Everyone is tired of that Richard Gere story., Season 9, The Cartridge Family",
    "I did not invent Irish dancing, Season 9, Bart Star",
    "I will not tease Fatty, Season 9, Lisa the Skeptic",
    "There was no Roman god named Fartacus, Season 9, Reality Bites",
    "Rudolph the Red-Nosed Reindeer\'s red nose is not alcohol-related, Season 9, Miracle on Evergreen Terrace",
    "Shooting paintballs is not an art form, Season 9, The Joy of Sect",
    "Pain is not the cleanser, Season 9, The Last Temptation of Krust",
    "Silly string is not a nasal spray, Season 9, Dumbbell Indemnity",
    "I was told not to do this, Season 9, This Little Wiggy",
    "My butt does not deserve a website, Season 9, Simpson Tide",
    "I will not demand what I'm worth, Season 9, The Trouble with Trillions",
    "I will not mess with the opening credits, Season 9, Trash of the Titans",
    "I am not the new Dalai Lama, Season 9, Lost Our Lisa",
    "I was not the inspiration for Kramer, Season 9, Natural Born Kissers",
    "I will not file frivolous lawsuits, Season 10, The Wizard of Evergreen Terrace",
    "The Simpsons Halloween Special Nine, Season 10, Treehouse of Horror Nine",
    "butt dot com is not my e-mail address, Season 10, When You Dish Upon a Star",
    "No one cares what my definition of is is, Season 10, Dough in in the Wind",
    "I will not scream for ice cream, Season 10, Lisa Gets an A",
    "I am not a licensed hairstylist, Season 10, Homer Simpson in Kidney Trouble",
    "The President did it is not an excuse, Season 10, Mayored to the Mob",
    "My mom is not dating Jerry Seinfeld, Season 10, Viva Ned Flanders",
    "Sherri does not got back, Season 10, Wild Barts Can\'t Be Broken",
    "I will not do the dirty bird, Season 10, Sunday, Cruddy Sunday",
    "No one cares about my sciatica, Season 10, Homer to the Max",
    "Hillbillies are people too, Season 10, I\'m with Cupid",
    "Grammar is not a time of waste, Season 10, Marge Simpson in Screaming Yellow Honkers",
    "I do not have diplomatic immunity, Season 10, Make Room for Lisa",
    "It does not suck to be you, Season 10, Maximum Homerdrive",
    "I cannot absolve sins, Season 10, Simpsons Bible Stories",
    "A trained ape could not teach gym, Season 10, Mom and Pop Art",
    "Loose teeth don't need my help, Season 10, The Old Man and the C Student",
    "I have neither been there nor done that, Season 10, Monty Can\'t Buy Me Love",
    "No one wants to hear from my armpits, Season 10, They Saved Lisa\'s Brain",
    "I\'m so very tired, Season 10, Thirty Minutes Over Tokyo",
    "Fridays are not pants optional, Season 11, Beyond Blunderdome",
    "Pork is not a verb, Season 11, Brother\'s Little Helper",
    "I am not the last Don, Season 11, Guess Who's Coming to Criticize Dinner?",
    "I did not win the Nobel Fart Prize, Season 11, E I E I Dough",
    "I won\'t not use no double negatives, Season 11, Hello Gutter, Hello Fadder",
    "Indian burns are not our cultural heritage, Season 11, Eight Misbehavin",
    "I can\'t see dead people, Season 11, Take My Wife Sleaze",
    "I will not sell my kidney on eBay, Season 11, Grift of the Magi",
    "I will not create art from dung, Season 11, Little Big Mom",
    "I will stop phoning it in, Season 11, Faith Off",
    "Class clown is not a paid position, Season 11, The Mansion Family",
    "Substitute teachers are not scabs, Season 11, Saddlesore Galactica"
    "My suspension was not mutual, Season 11, Alone Again, Natura-Diddily",
    "A belch is not an oral report, Season 11, Missionary Impossible",
    "Dodgeball stops at the gym door, Season 11, Pygmoelian",
    "Non-flammable is not a challenge, Season 11, Bart to the Future",
    "I was not touched there by an angel, Season 11, Days of Wine and Dough says",
    "I am not here on a fartball scholarship, Season 11, Kill the Alligator and Run",
    "I will not dance on anyone\'s grave, Season 11, Last Tap Dance in Springfield",
    "I cannot hire a substitute student, Season 11, It\'s a Mad, Mad, Mad, Mad Marge",
    "I will not obey the voices in my head, Season 11, Beyond the Laughter",
    "I will not plant subliminal messagore, Season 12, A Tale of Two Springfields",
    "I will not surprise the incontinent, Season 12, Insane Clown Poppy",
    "I am not the acting president, Season 12, Lisa the Tree Hugger",
    "I was not the sixth Beatle, Season 12, Homer vs. Dignity",
    "I will only provide a urine sample when asked, Season 12, The Computer Wore Menance Shoes",
    "The nurse is not dealing, Season 12, The Great Money Caper",
    "Science class should not end in tragedy, Season 12, Skinner\'s Sense of Snow",
    "Network TV is not dead, Season 12, H O M R",
    "I will not let the dogs out, Season 12, Pokey Mom",
    "I will not hide the teacher's medication, Season 12, Worst Episode Ever",
    "I will not publish the principal\'s credit report, Season 12, Tennis the Menace",
    "The hamster did not have a full life, Season 12, Day of the Jackanapes",
    "I will not buy a presidential pardon, Season 12, New Kids on the Blecch",
    "Temptation Island was not a sleazy piece of crap, Season 12, Hungry, Hungry Homer",
    "I will not scare the vice president, Season 12, Bye Bye Nerds",
    "I will not flush evidence, Season 12, Simpson Safari",
    "Fire is not the cleanser, Season 12, Trilogy of Error",
    "Genetics is not an excuse, Season 12, I\'m Goin\' to Praiseland",
    "Today is not Mothra\'s Day, Season 12, Children of a Lesser Clod",
    "I should not be twenty-one by now, Season 12, Simpsons Tall Tales",
    "Nobody reads these anymore, Season 12, The Parent Rap",
    "A burp in a jar is not a science project, Season 13, Homer the Moe",
    "Fun does not have a size, Season 13, A Hunka Hunka Burns in Love",
    "I am not Charlie Brown on acid, Season 13, The Blunder Years",
    "I do not have a cereal named after me, Season 13, She of Little Faith",
    "I will not bite the hand that feeds me Butterfingers, Season 13, Half Decent Proposal",
    "The Giving Tree is not a chump, Season 13, The Bart Wants What It Wants",
    "Making Milhouse cry is not a science project, Season 13, The Lastest Gun in the West",
    "Vampire is not a career choice, Season 13, Tales from the Public Domain",
    "I will never lie about being cancelled again, Season 13, The Sweetest Apu",
    "Fish do not like coffee, Season 14, Bart vs. Lisa vs. the Third Grade",
    "Milhouse did not test cootie positive, Season 14, Helter Shelter",
    "This school does not need a regime change, Season 14, The Strong Arms of the Ma",
    "SpongeBob is not a contraceptive, Season 14, Pray Anything",
    "I will not, Season 14, Barting Over",
    "My pen is not a booger launcher, Season 14, Old Yeller-Belly",
    "Sandwiches should not contain sand, Season 14, The Bart of War",
    "Over forty & single is not funny, Season 15, Today, I Am a Clown",
    "I will not speculate on how hot my teacher used to be, Season 15, The Ziff Who Came to Dinner",
    "Poking a dead raccoon is not research, Season 16, She Used to Be My Girl",
    "Beer in a milk carton is not milk, Season 16, On a Clear Day I Can\'t See My Sister",
    "A booger is not a bookmark, Season 16, Home Away from Homer",
    "Does any kid still do this anymore?, Season 17, Bonfire of the Manatees",
    "I am not smarter than the President, Season 17, Homer\'s Paternity Coot",
    "Teacher was not dumped—it was mutual, Season 17, We\'re on the Road to dough where",
    "I will not laminate dog doo, Season 17, Homer Simpson, This Is Your Wife",
    "I will not flip the classroom upside down, Season 17, Million Dollar Abie",
    "I will not leak the plot of the movie, Season 17, Regarding Margie",
    "Je ne parle pas français, Season 17, The Monkey Suit",
    "Have a great summer, everyone, Season 17, Marge and Homer Turn a Couple Play",
    "We are not all naked under our clothes, Season 18, G I Dough",
    "Frankincense is not a monster, Season 18, Kill Gil VOlumes One and Two",
    "Global Warming did not eat my homework, Season 18, Homerazzi",
    "I will not look up how much teacher makes, Season 18, Crook and Ladder",
    "Pearls are not oyster barf, Season 18, Stop or my Dog Will Shoot!"
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
