const character1 = new Characters("Helmut", "human", 6, 2, 500, 99);
const character2 = new Characters("MonkeyKopf", "animal", 6, 2, 500, 99);
const character3 = new Characters("Alien", "alien", 6, 2, 500, 50);
const character4 = new Characters("MagicCorona", "corona", 6, 2, 500, 99);
const boss1 = new Characters("boss1", "boss", 6, 2, 500, 50);

function Characters(CharacterName, CharacterSpecies, CharacterAttack , CharacterDefense, CharacterLife, CharacterMana) 
{
  this.CharacterName = CharacterName;
  this.CharacterSpecies = CharacterSpecies;
  this.CharacterAttack = CharacterAttack;
  this.CharacterDefense = CharacterDefense;
  this.CharacterLife = CharacterLife;
  this.CharacterMana = CharacterMana;
  
  this.getCharacterName = function() 
  {
    return this.CharacterName 
  };
  
  this.getCharacterSpecies = function() 
  {
    return this.CharacterSpecies 
  };
  
  this.getCharacterAttack = function() 
  {
    return this.CharacterAttack 
  };
  
  this.getCharacterDefense = function() 
  {
    return this.CharacterDefense 
  };
  
  this.getCharacterLife = function() 
  {
    return this.CharacterLife 
  };
  
    this.getCharacterMana = function() 
  {
    return this.CharacterMana 
  };
}
