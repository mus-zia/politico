
//List of words/our dictionary. Current length is 76
const words_list = [
    "government",
    "public policy",
    "legislative power",
    "executive power",
    "judicial power",
    "state",
    "constitution",
    "sovereignty",
    "democracy",
    "dictatorship",
    "monarchy",
    "autocracy",
    "oligarchy",
    "unitary government",
    "federal government",
    "confederation",
    "presidential government",
    "parliamentary government",
    "charter",
    "bicameral",
    "unicameral",
    "royal colony",
    "proprietary colony",
    "charter colony",
    "delegate",
    "boycott",
    "due process",
    "popular sovereignty",
    "ratification",
    "framers",
    "federalists",
    "anti-federalists",
    "limited government",
    "representative government",
    "preamble",
    "articles",
    "constitutionalism",
    "rule of law",
    "separation of powers",
    "checks and balances",
    "veto",
    "judicial review",
    "unconstitutional",
    "federalism",
    "amendment",
    "ratification",
    "executive agreement",
    "treaty",
    "electoral college",
    "senatorial courtesy",
    "division of powers",
    "delegated power",
    "expressed power",
    "implied power",
    "inherent power",
    "reserved power",
    "exclusive power",
    "concurrent power",
    "enabling act",
    "act of admission",
    "interstate compact",
    "extradition",
    "grant-in-aid programs",
    "declinist candidate",
    "kakistocracy",
    "pornocracy",
    "empleomania",
    "throttlebottom",
    "politicaster",
    "mugwump",
    "gerrymander",
    "embusque",
    "obstructionist",
    "carpetbagger",
    "highbinder",
    "misprision",
];

//Returns a random number between 1 and 76;

function rand_num() {
    var my_num = Math.floor((Math.random() * words_list.length) + 1);
    return my_num;
};

//Logs 3 random words using random numbers generated from rand_num
function log_words(){
    var firstWord = rand_num();
    var secondWord = rand_num();
    var thirdWord = rand_num();
    console.log("Your words are: " + words_list[firstWord] + ", " + words_list[secondWord] + ", " + words_list[thirdWord]);
};

//export {words_list,rand_num,log_words};
export default log_words;

// log_words();

// exports.printMsg = function() {
//     console.log("Your words are " + words_list[firstWord] + ", " + words_list[secondWord] + ", " + words_list[thirdWord]);
//   }
