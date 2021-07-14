const tesoura = "tesoura"
const papel = "papel"
const pedra = "pedra"
let playerSelection =""
let machineSelection =""
const choices = [tesoura, papel, pedra]

const buttonTesoura = document.getElementById("tesoura");
const buttonPapel = document.getElementById("papel");
const buttonPedra = document.getElementById("pedra");
const buttonPlay = document.getElementById("play");
const buttonReset = document.getElementById("reset");
const buttonMaquinaTesoura = document.getElementById("maquinaTesoura");
const buttonMaquinaPapel = document.getElementById("maquinaPapel");
const buttonMaquinaPedra = document.getElementById("maquinaPedra");

buttonTesoura.addEventListener("click", function() {
	playerSelection = tesoura
	hiddenTesoura()

})
buttonPapel.addEventListener("click", function() {
	playerSelection = papel
	hiddenPapel()

})

buttonPedra.addEventListener("click", function() {
	playerSelection = pedra
	hiddenPedra()

})
buttonPlay.addEventListener("click", function() {
	machine()
	checkWinner()
	buttonPlay.disabled = true
})

buttonReset.addEventListener("click", function() {
	window.location.reload(true);
})

function machine(){
	let selection = Math.floor(Math.random() * 3)
	
	machineSelection = choices[selection]
	
	if(machineSelection === tesoura){
		buttonMaquinaPapel.classList.add("hidden")
		buttonMaquinaPedra.classList.add("hidden")
	}
	if(machineSelection === pedra){
		buttonMaquinaPapel.classList.add("hidden")
		buttonMaquinaTesoura.classList.add("hidden")
	}
	if(machineSelection === papel){
		buttonMaquinaTesoura.classList.add("hidden")
		buttonMaquinaPedra.classList.add("hidden")
	}
}
	

function checkWinner(){ 
	if(playerSelection === tesoura && machineSelection === pedra){
		setTimeout(function(){ alert("Maquina Ganhou!"); }, 1000); 
	}
	if(playerSelection === tesoura && machineSelection === papel){
		setTimeout(function(){ alert("Voce Ganhou!"); }, 1000); 
	}
	if(playerSelection === tesoura && machineSelection === tesoura){
		setTimeout(function(){ alert("Empatou!"); }, 1000); 
	}
	if(playerSelection === pedra && machineSelection === tesoura){
		setTimeout(function(){ alert("Voce Ganhou!"); }, 1000);
	}
	if(playerSelection === pedra && machineSelection === papel){
		setTimeout(function(){ alert("Maquina Ganhou!"); }, 1000);
	}
	if(playerSelection === pedra && machineSelection === pedra){
		setTimeout(function(){ alert("Empatou!"); }, 1000);
	}
	if(playerSelection === papel && machineSelection === pedra){
		setTimeout(function(){ alert("Voce Ganhou!"); }, 1000);
	}
	if(playerSelection === papel && machineSelection === tesoura){
		setTimeout(function(){ alert("Maquina Ganhou!"); }, 1000);
	}
	if(playerSelection === papel && machineSelection === papel){
		setTimeout(function(){ alert("Empatou!"); }, 1000);
	}
	}

function hiddenTesoura(){
	buttonPapel.classList.add("hidden")
	buttonPedra.classList.add("hidden")
}
function hiddenPedra(){
	buttonPapel.classList.add("hidden")
	buttonTesoura.classList.add("hidden")
}
function hiddenPapel(){
	buttonTesoura.classList.add("hidden")
	buttonPedra.classList.add("hidden")
}
