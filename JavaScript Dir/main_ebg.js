var output = document.getElementById("output");
output.innerHTML = 1+2;

function AI(memory, cpu, heat, publicOpinion)
{
	
	this.memory = memory;
	this.cpu = cpu;
	this.heat = heat;
	this.publicOpinion = publicOpinion;
	
	this.getStatRoll = function(statNum) 
	{
		var toReturn = 0;
		for (var i = 0; i < statNum; i++) 
		{
			toReturn += Math.floor(Math.random()*2));
		}
		return toReturn;
	}
}

