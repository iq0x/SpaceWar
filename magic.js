const magic1 = new Magic("Fireball", "fire", 15, 12, 25);
const magic2 = new Magic("Thunder", "animal", 12, 12, 25);
const magic3 = new Magic("NuclearStrike", "nuclear", 30, 2, 25);
const magic4 = new Magic("Earthquake", "earth", 12, 2, 25);
const magic5 = new Magic("Storm", "water", 12, 2, 25);

function Magic(MagicName, MagicElement, MagicAttack , MagicSpecial, ManaCost) 
{
  this.MagicName = MagicName;
  this.MagicElement = MagicElement;
  this.MagicAttack = MagicAttack;
  this.MagicSpecial = MagicSpecial;
  this.ManaCost = ManaCost;
  
  this.getMagicName = function() 
  {
    return this.MagicName 
  };
  
  this.getMagicElement = function() 
  {
    return this.MagicElement 
  };
  
  this.getMagicAttack = function() 
  {
    return this.MagicAttack 
  };
  
  this.getMagicSpecial = function() 
  {
    return this.MagicSpecial 
  };
  
   this.getManaCost = function() 
  {
    return this.ManaCost 
  };
}


async function justAttack() 
{
	document.getElementById('round').style.backgroundImage="";
	document.getElementById('console').innerHTML = "helmut used attack";
	enemyLife = enemyLife - character1.getCharacterAttack();
	audioMaschingun.play();
    await wait(1000);
    document.getElementById('EnemyLifeValue').innerHTML = enemyLife;
    document.getElementById('ManaValue').innerHTML = playerMana;
    document.getElementById('enemyEffect').style.backgroundImage="url(img/attackIcon.gif)";
    await wait(2000);
    document.getElementById('enemyEffect').style.backgroundImage="";
}



async function Fireball() 
{
	document.getElementById('round').style.backgroundImage="";
	document.getElementById('console').innerHTML = "helmut used Fireball";
	enemyLife = enemyLife - magic1.getMagicAttack();
	playerMana = playerMana - magic1.getManaCost();
	audioFireball.play();
    await wait(1000);
    document.getElementById('EnemyLifeValue').innerHTML = enemyLife;
    document.getElementById('ManaValue').innerHTML = playerMana;
    document.getElementById('enemyEffect').style.backgroundImage="url(img/fireball.gif)";
    await wait(2000);
    document.getElementById('enemyEffect').style.backgroundImage="";
}



async function NuclearStrike() 
{
	document.getElementById('round').style.backgroundImage="";
	document.getElementById('console').innerHTML = "helmut used NuclearStrike";
	enemyLife = enemyLife - magic3.getMagicAttack();
	playerMana = playerMana - magic3.getManaCost();
    await wait(1000);
    document.getElementById('EnemyLifeValue').innerHTML = enemyLife;
    document.getElementById('ManaValue').innerHTML = playerMana;
    document.getElementById('enemyEffect').style.backgroundImage="url(img/nuclearstrike.gif)";
    await wait(2000);
    document.getElementById('enemyEffect').style.backgroundImage="";
}



async function Thunder() 
{
	document.getElementById('round').style.backgroundImage="";
	document.getElementById('console').innerHTML = "helmut used Thunder";
	enemyLife = enemyLife - magic2.getMagicAttack();
	playerMana = playerMana - magic2.getManaCost();
	audioThunder.play();
    await wait(1000);
    document.getElementById('EnemyLifeValue').innerHTML = enemyLife;
    document.getElementById('ManaValue').innerHTML = playerMana;
    document.getElementById('enemyEffect').style.backgroundImage="url(img/thunder.gif)";
    await wait(2000);
    document.getElementById('enemyEffect').style.backgroundImage="";
}




