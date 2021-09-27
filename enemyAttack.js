async function enemyAttack()
{
	await wait(2000);
	var attack = Math.floor((Math.random() * 2) + 1);
	
	if (attack == 1)
	{
		
		playerLife = playerLife - magic1.getMagicAttack();
		enemyMana = enemyMana - magic1.getManaCost();
		await wait(2000);
		document.getElementById('characterEffect').style.backgroundImage="url(img/fireball.gif)";
		audioFireball.play();
		await wait(2000);
		playerBoom();
		document.getElementById('characterEffect').style.backgroundImage="";
	}
	
	if (attack == 2)
	{
		playerLife = playerLife - magic2.getMagicAttack();
		enemyMana = enemyMana - magic2.getManaCost();
		await wait(2000);
		document.getElementById('characterEffect').style.backgroundImage="url(img/thunder.gif)";
		audioThunder.play();
		await wait(2000);
		playerBoom();
		document.getElementById('characterEffect').style.backgroundImage="";
	}
	
	document.getElementById('LifeValue').innerHTML = playerLife;
    document.getElementById('EnemyManaValue').innerHTML = enemyMana;
    await wait(3000);
    document.getElementById('round').style.backgroundImage="url(img/playerRound.gif)";
}
