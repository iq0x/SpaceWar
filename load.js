window.onload = function()
{
	enemyLife = boss1.getCharacterLife();
	enemyMana = boss1.getCharacterMana();
	
	playerLife = character1.getCharacterLife();
	playerMana = character1.getCharacterMana();

	document.getElementById("blockA").style.backgroundImage="url(img/attackIcon.gif)";
	document.getElementById("blockB").style.backgroundImage="url(img/fireballIcon.gif)";
	document.getElementById("blockC").style.backgroundImage="url(img/nuclearstrikeIcon.gif)";

	document.getElementById('magicNameDIV1').innerHTML = "Vergeltung";
	document.getElementById('magicNameDIV2').innerHTML = magic2.getMagicName();
	document.getElementById('magicNameDIV3').innerHTML = magic3.getMagicName();
	document.getElementById('itemName').innerHTML = "item";

    document.getElementById('ManaValue').innerHTML = playerMana;
    document.getElementById('LifeValue').innerHTML = playerLife;
    
    document.getElementById('EnemyManaValue').innerHTML = enemyMana;
    document.getElementById('EnemyLifeValue').innerHTML = enemyLife;
    
    var currentBackgroundMusic = Math.floor(Math.random() * 3);
    
	if (currentBackgroundMusic == 0)
	{
		audioBack1.play();
	}
	if (currentBackgroundMusic == 1)
	{	
		audioBack2.play();
	}
	if (currentBackgroundMusic == 2)
	{
		audioBack3.play();
	}
	if (currentBackgroundMusic == 3)
	{
		audioBack4.play();
	}
};


function wait(time) 
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}


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


function reset()
{
	document.getElementById("blockABackground").style.borderColor = "white";
	document.getElementById("blockBBackground").style.borderColor = "white";
	document.getElementById("blockCBackground").style.borderColor = "white";
	document.getElementById("blockDBackground").style.borderColor = "white";
}
function noMana()
{
	document.getElementById('console').innerHTML = "helmut have no mana";		
}


async function playerBoom() 
{
	var animationBoom = Math.floor((Math.random() * 5) + 1);
	
	if(animationBoom == 0)
		document.getElementById("characterBoom").style.backgroundImage="url(img/boom1.png)";
	if(animationBoom == 1)
		document.getElementById("characterBoom").style.backgroundImage="url(img/boom2.png)";
		
	if(animationBoom == 2)
		document.getElementById("characterBoom").style.backgroundImage="url(img/boom3.png)";
	if(animationBoom == 3)
		document.getElementById("characterBoom").style.backgroundImage="url(img/boom4.png)";
	if(animationBoom == 4)
		document.getElementById("characterBoom").style.backgroundImage="url(img/boom5.png)";
	if(animationBoom == 5)
		document.getElementById("characterBoom").style.backgroundImage="url(img/boom6.png)";
    await wait(1000);
	document.getElementById("characterBoom").style.backgroundImage="";
}


async function enemyBoom() 
{
	var animationBoom = Math.floor((Math.random() * 5) + 1);
	
	if(animationBoom == 0)
		document.getElementById("enemyBoom").style.backgroundImage="url(img/boom1.png)";
	if(animationBoom == 1)
		document.getElementById("enemyBoom").style.backgroundImage="url(img/boom2.png)";
		
	if(animationBoom == 2)
		document.getElementById("enemyBoom").style.backgroundImage="url(img/boom3.png)";
	if(animationBoom == 3)
		document.getElementById("enemyBoom").style.backgroundImage="url(img/boom4.png)";
	if(animationBoom == 4)
		document.getElementById("enemyBoom").style.backgroundImage="url(img/boom5.png)";
	if(animationBoom == 5)
		document.getElementById("enemyBoom").style.backgroundImage="url(img/boom6.png)";
    await wait(1000);
	document.getElementById("enemyBoom").style.backgroundImage="";
}
