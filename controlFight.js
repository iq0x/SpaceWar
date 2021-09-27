var Key = {LEFT:37,UP:38,RIGHT:39,DOWN:40,A:13,DEL:8};

var audioMaschingun = new Audio('sounds/maschingun.mp3');
var audioThunder = new Audio('sounds/thunder.mp3');
var audioFireball = new Audio('sounds/fireball.mp3');
var audioBack1 = new Audio('sounds/back1.mp3');
var audioBack2 = new Audio('sounds/back2.mp3');
var audioBack3 = new Audio('sounds/back3.mp3');
var audioBack4 = new Audio('sounds/back4.mp3');


var position = 4;

var enemyLife;
var enemyMana;
var playerLife;
var playerMana;
	
function explode()
{
	document.getElementById("friend").style.backgroundImage="url(img/crash1.png)";
}
        

function handleKeyboardEvent(evt) 
{
  if (!evt) {evt = window.event;} 
  
  var keycode = evt.keyCode || evt.which; 
  
  switch (keycode) 
  {
    case Key.UP:
		position++;
		reset();
		
		if (position == 4)
			document.getElementById("blockABackground").style.borderColor = "red";
		if (position == 3)
			document.getElementById("blockBBackground").style.borderColor = "red";
		if (position == 2)
			document.getElementById("blockCBackground").style.borderColor = "red";
		if (position == 1)
			document.getElementById("blockDBackground").style.borderColor = "red";
		if (position >= 4)
		{
			position = 4;
			document.getElementById('blockABackground').style.borderColor="red";
		}
		break;

    case Key.DOWN:
		position--;
		reset()

		if (position == 4)
			document.getElementById("blockABackground").style.borderColor = "red";
		if (position == 3)
			document.getElementById("blockBBackground").style.borderColor = "red";
		if (position == 2)
			document.getElementById("blockCBackground").style.borderColor = "red";
		if (position == 1)
			document.getElementById("blockDBackground").style.borderColor = "red";
		if (position <= 1)
		{
			position = 1;
			document.getElementById('blockDBackground').style.borderColor="red";
		}
		break;
	
	case Key.A:
			if (position == 4)
			{
				justAttack();
				enemyBoom();
				enemyAttack();
			}
			
			if (position == 3)
			{
				if (playerMana >= 0)
				{
					Fireball();
					enemyBoom();
					enemyAttack();
				}
				else
				{
					noMana();
				}
			}
			
			if (position == 2)
			{
				if (playerMana >= 0)
				{
					NuclearStrike();
					enemyBoom();
					enemyAttack();
				}
				else
				{
					noMana();
				}
			}
			
			if (position == 1)
				document.getElementById('console').innerHTML = "helmut used item";
		
		break;
		
	case Key.DEL:
		window.open("index.html","_self")
		break;
  }
}



_addEventListener('keydown', document, handleKeyboardEvent);


