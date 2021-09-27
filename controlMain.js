    var Key = {
  LEFT:   37,
  UP:     38,
  RIGHT:  39,
  DOWN:   40,
  A:   13,
  DEL: 8
};


var position = 1;

window.onload = function()
{
	document.getElementById("magic1NameDIV1").innerHTML = magic1.getMagicName(); 
	document.getElementById("magic2NameDIV1").innerHTML = magic2.getMagicName();
	document.getElementById("magic3NameDIV1").innerHTML = magic3.getMagicName();
	
	
	document.getElementById("magic1NameDIV2").innerHTML = magic1.getMagicName();
	document.getElementById("magic2NameDIV2").innerHTML = magic2.getMagicName();
	document.getElementById("magic3NameDIV2").innerHTML = magic3.getMagicName();
	
	document.getElementById("magic1NameDIV3").innerHTML = magic1.getMagicName();
	document.getElementById("magic2NameDIV3").innerHTML = magic2.getMagicName();
	document.getElementById("magic3NameDIV3").innerHTML = magic3.getMagicName();
	
	document.getElementById("magic1NameDIV4").innerHTML = magic1.getMagicName();
	document.getElementById("magic2NameDIV4").innerHTML = magic2.getMagicName();
	document.getElementById("magic3NameDIV4").innerHTML = magic3.getMagicName();

	
	document.getElementById("characterNameDIV1").innerHTML = character1.getCharacterName(); 
	document.getElementById("characterNameDIV2").innerHTML = character2.getCharacterName();
	document.getElementById("characterNameDIV3").innerHTML = character3.getCharacterName();
	document.getElementById("characterNameDIV4").innerHTML = character4.getCharacterName();
	
	document.getElementById("characterSpeciesDIV1").innerHTML = character1.getCharacterSpecies(); 
	document.getElementById("characterSpeciesDIV2").innerHTML = character2.getCharacterSpecies();
	document.getElementById("characterSpeciesDIV3").innerHTML = character3.getCharacterSpecies();
	document.getElementById("characterSpeciesDIV4").innerHTML = character4.getCharacterSpecies();
	
	document.getElementById("characterAttackDIV1").innerHTML = character1.getCharacterAttack(); 
	document.getElementById("characterAttackDIV2").innerHTML = character2.getCharacterAttack();
	document.getElementById("characterAttackDIV3").innerHTML = character3.getCharacterAttack();
	document.getElementById("characterAttackDIV4").innerHTML = character4.getCharacterAttack();
	
	document.getElementById("characterDefenseDIV1").innerHTML = character1.getCharacterAttack(); 
	document.getElementById("characterDefenseDIV2").innerHTML = character2.getCharacterAttack();
	document.getElementById("characterDefenseDIV3").innerHTML = character3.getCharacterAttack();
	document.getElementById("characterDefenseDIV4").innerHTML = character4.getCharacterAttack();
};


function _addEventListener(evt, element, fn) 
{
  if (window.addEventListener) 
  {
    element.addEventListener(evt, fn, false);
  }
  else 
  {
    element.attachEvent('on'+evt, fn);
  }
}


function handleKeyboardEvent(evt) 
{
  if (!evt) {evt = window.event;} 
  
  var keycode = evt.keyCode || evt.which; 

  var info = document.getElementById("info");
  
  switch (keycode) 
  {
    case Key.LEFT:
		position--;

		
		if (position == 1)
		{
			reset()
			document.getElementById('blockA').style.backgroundImage = "url('img/helmutBackHover.png')";
			document.getElementById("blockA").style.borderColor = "yellow"; 
		}	
		if (position == 2)
		{
			reset()
			document.getElementById('blockB').style.backgroundImage = "url('img/monkeyBackHover.png')";
			document.getElementById("blockB").style.borderColor = "yellow"; 
		}
		if (position == 3)
		{
			reset()
			document.getElementById('blockC').style.backgroundImage = "url('img/alienBackHover.png')";
			document.getElementById("blockC").style.borderColor = "yellow"; 
		}
		if (position == 4)
		{
			reset()
			document.getElementById('blockD').style.backgroundColor="red";
			document.getElementById("blockD").style.borderColor = "yellow"; 
		}
		if (position <= 1)
		{
			reset()
			position = 1;
			document.getElementById('blockA').style.backgroundImage = "url('img/helmutBackHover.png')";
			document.getElementById("blockA").style.borderColor = "yellow"; 
		}
		
		break;


    case Key.RIGHT:
		position++;
		
		
		if (position == 4)
		{
			reset()
			document.getElementById('blockD').style.backgroundColor="red";
			document.getElementById("blockD").style.borderColor = "yellow";
		}
		if (position == 3)
		{
			reset()
			document.getElementById('blockC').style.backgroundImage = "url('img/alienBackHover.png')";
			document.getElementById("blockC").style.borderColor = "yellow";
		}
		if (position == 2)
		{
			reset()
			document.getElementById('blockB').style.backgroundImage = "url('img/monkeyBackHover.png')";
			document.getElementById("blockB").style.borderColor = "yellow";
			
		}
		if (position == 1)
		{
			reset()
			document.getElementById('blockA').style.backgroundImage = "url('img/helmutBackHover.png')";
			document.getElementById("blockA").style.borderColor = "yellow";
		}
		if (position >= 4)
		{
			reset()
			position = 4
			document.getElementById('blockD').style.backgroundColor="red";
			document.getElementById("blockD").style.borderColor = "yellow";
		}
		break;
	
	case Key.A:
			if (position == 4)
				window.open("fight.html","_self")
			if (position == 3)
				window.open("fight.html","_self")
			if (position == 2)
				window.open("fight.html","_self")
			if (position == 1)
				window.open("fight.html","_self")
		break;
	
	case Key.DEL:
		window.open("../start.html","_self")
		break;
  }
}


function reset()
{
	document.getElementById("blockA").style.borderColor = "white";
	document.getElementById("blockB").style.borderColor = "white";
	document.getElementById("blockC").style.borderColor = "white";
	document.getElementById("blockD").style.borderColor = "white";
	
	document.getElementById('blockA').style.backgroundImage = "url('img/helmutBack.png')";
	document.getElementById('blockB').style.backgroundImage = "url('img/monkeyBack.png')";
	document.getElementById('blockC').style.backgroundImage = "url('img/alienBack.png')";
	document.getElementById('blockD').style.backgroundColor = "green";
}

_addEventListener('keydown', document, handleKeyboardEvent);
