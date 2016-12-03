var output = document.getElementById("output");
var currency = document.getElementById("currency");
var stats = document.getElementById("stats");

var outputBuffer = "";
var outputBufferInterval;
function writeOutput(string) {
	outputBuffer = string || "";
	if (outputBufferInterval) clearInterval(outputBufferInterval);
	outputBufferInterval = setInterval(function(){ stepOutputBuffer() }, 50)
	
	output.innerHTML = "<span style='color:white; font-size:1.5em; text-decoration:underline;'>Output:</span><br><br>";
	
}
function stepOutputBuffer() {
	output.innerHTML += outputBuffer.charAt(0);
	outputBuffer = outputBuffer.slice(1);
	if (outputBuffer.length == 0) clearInterval(outputBufferInterval);
}
writeOutput("The quick fox leaped over the lazy dog.  Roses are red and Violets are Blue. ABCD EFG HIJ KLM NOP QRS TUV WXYZ");

function refreshCurrency() {
	currency.innerHTML = 
	"<span style='color:white; font-size:1.5em; text-decoration:underline;'>Currency:</span><br><br>" + 
	"Currency Here<br>"
}
refreshCurrency();

function refreshStats() {
	stats.innerHTML = 
	"<span style='color:white; font-size:1.5em; text-decoration:underline;'>Stats:</span><br><br>" + 
	"Stats Here<br>"
}
refreshStats();

function Tree(health, growth, atk, spAtk, def, spDef, karma)
{
	//currency
	this.energy = 0;
	this.mutation = 0;
	this.food = 0;
	
	//stats
	this.health = health;
	this.growth = growth;//base energy gain
	this.atk = atk;
	this.spAtk = spAtk;
	this.def = def;
	this.spDef = spDef;
	this.karma = karma;
	
	this.getStatRoll = function(statNum) 
	{
		var toReturn = 0;
		for (var i = 0; i < statNum; i++) 
		{
			toReturn += Math.floor(Math.random()*2);
		}
		return toReturn;
	}
}
var tree = new Tree();

var ocurrances = [
]
function Occurance(index) {
	weather;
}
