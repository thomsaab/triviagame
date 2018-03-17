// CATEGORIES ("cat")
// 1: Golf Trivia


var q0 = {
	"q": "Longest recorded golf putt in professional golf was?",
	"a1": "230 ft",
	"a2": "52 ft",
	"a3": "20 ft",
	"a4": "140 ft",
	"cat": 1,
	"img": "assets/images/put01.jpg"
};

var q1 = {
	"q": "Longest recorded golf drive was?",
	"a1": "550 ft",
	"a2": "350 ft",
	"a3": "150 ft",
	"a4": "700 ft",
	"cat": 1,
	"img": "assets/images/drive03.jpg"
};

var q2 = {
	"q": "Who was the youngest player to win masters?",
	"a1": "Jack Nicklaus",
	"a2": "Tiger Woods",
	"a3": "Sam Snead",
	"a4": "Jeff Garcia",
	"cat": 1,
	"img": "assets/images/jack03.jpg"
};

var q3 = {
	"q": "The number 10 iron is usually called what??",
	"a1": "Wedge",
	"a2": "Iron",
	"a3": "Putter",
	"a4": "Driver",
	"cat": 1,
	"img": "assets/images/wedge03.jpg"
};

var q4 = {
	"q": "What is a bunker?",
	"a1": "sand pit",
	"a2": "putting green",
	"a3": "Tee",
	"a4": "final hole",
	"cat": 1,
	"img": "assets/images/bunker04.jpg"
};


var qActive = false;
var totalQs = 4;
var newGame = true;
var numCats = 3;
var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;
var numQs = 0;
var curScore = 0;
var curCat = Math.floor(Math.random() * numCats + 1);
var allQuestions = [q0, q1, q2, q3, q4];
var curQuestions = [];
var curQ = q1;
var qTimer = 20;
var clockRunning = false;
var timerInterval, increaseScore;