//Returns a random number between 1 and 76;

function rand_num() {
    var my_num = Math.floor((Math.random() * 76) + 1);
    return my_num;
};
console.log(rand_num());

//Outputs 100 random numbers;
// i = 0
// while (i < 100) {
//     console.log(rand_num());
//     i++;
// };

//List of words/our dictionary. Current length is 76
var words_list = [
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

//Length of words_list
console.log(words_list.length);

//Outputs a random word from our dictionary
var firstWord = rand_num();
var secondWord = rand_num();
var thirdWord = rand_num();
console.log(words_list[firstWord]);
console.log(words_list[secondWord]);
console.log(words_list[thirdWord]);
