var output = document.getElementById("output");
output.innerHTML = 1+2;

function Tree(health, growth, atk, spAtk, def, spDef)
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

var ocurrances = [
]
function Occurance(index) {
	
}
