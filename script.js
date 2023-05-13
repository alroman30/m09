let Trainer = {
	name: 'Red',
	age: 11,
	pokemon: [
		'Pikachu',
		'Bulbasaur'
	],
	friends: ['Blue','Green'],
	talk: function(){
		console.log('Pikachu! I choose you!')
	}
}

console.log(Trainer)
console.log(Trainer.name)
Trainer.talk()

function Pokemon(name,level){
	this.name = name;
	this.level = level;
	this.health = level * 6;
	this.attack = level * 2;
	this.tackle = function(targetPokemon){
		targetPokemon.health-=this.attack
		console.log(this.name + ' tackled '+ targetPokemon.name + '. ' + this.attack + ' damage dealt!')
		console.log(targetPokemon)
		if (targetPokemon.health <= 0){
			targetPokemon.faint()
		}
	}
	this.faint = function(){
		console.log(this.name + ' has fainted.')
	}
}

let pikachu = new Pokemon(Trainer.pokemon[0], 5)
let bulbasaur = new Pokemon(Trainer.pokemon[1], 3)
let targetPokemon = new Pokemon('Charmander', 4)

console.log(pikachu)
console.log(targetPokemon)

pikachu.tackle(targetPokemon)