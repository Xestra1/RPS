var human = {
    paper: false,
    rock: false,
    scissors: false,
    wins: 0,
    loses: 0,
    ties: 0
};

var machine = {
    paper: false,
    rock: false,
    scissors: false,
    wins: 0,
    loses: 0,
    ties: 0
};

var humanWins = document.getElementById('humanWins');
var humanLoses = document.getElementById('humanLoses');
var humanTies = document.getElementById('humanTies');
var machineWins = document.getElementById('machineWins');
var machineLoses = document.getElementById('machineLoses');
var machineTies = document.getElementById('machineTies');
var winner = document.getElementById('winner');
var chosenItem = document.getElementById('chosenItem');
var chosenHuman = document.getElementById('chosenHuman');
var chosenMachine = document.getElementById('chosenMachine');


humanWins.innerHTML = human.wins;
humanLoses.innerHTML = human.loses;
humanTies.innerHTML = human.ties;
machineWins.innerHTML = machine.wins;
machineLoses.innerHTML = machine.loses;
machineTies.innerHTML = machine.ties;

function paper() {
    if (human.paper === false && human.rock === false && human.scissors === false) {
        human.paper = true;
        chosenItem.innerHTML = "Paper";
    } else {
        human.paper = true;
        human.rock = false;
        human.scissors = false;
        chosenItem.innerHTML = "Paper";
    }
}

function rock() {
    if (human.paper === false && human.rock === false && human.scissors === false) {
        human.rock = true;
        chosenItem.innerHTML = "Rock";
    } else {
        human.paper = false;
        human.rock = true;
        human.scissors = false;
        chosenItem.innerHTML = "Rock";
    }
}

function scissors() {
    if (human.paper === false && human.rock === false && human.scissors === false) {
        human.scissors = true;
        chosenItem.innerHTML = "Scissors";
    } else {
        human.paper = false;
        human.rock = false;
        human.scissors = true;
        chosenItem.innerHTML = "Scissors";
    }
}

function machineChoose() {
    var random = Math.floor(Math.random() * 7);
    if (random === 0 || random === 4) {
        machine.paper = true;
        machine.rock = false;
        machine.scissors = false;
    } else if (random === 1 || random === 5) {
        machine.rock = true;
        machine.scissors = false;
        machine.paper = false;
    } else if (random === 2 || random === 6) {
        machine.scissors = true;
        machine.paper = false;
        machine.rock = false;
    } else {
        console.log('Heres your medal. you broke the machine');
    }
}

function submit() {
    machineChoose();
    if (human.paper === true && machine.rock === true) {
        human.wins++;
        machine.loses++;
        humanWins.innerHTML = human.wins;
        machineLoses.innerHTML = machine.loses;
        winner.innerHTML = "Human Wins!";
        chosenHuman.innerHTML = "Human: Paper";
        chosenMachine.innerHTML = "Machine: Rock";
    } else if (human.rock === true && machine.scissors === true) {
        human.wins++;
        machine.loses++;
        humanWins.innerHTML = human.wins;
        machineLoses.innerHTML = machine.loses;
        winner.innerHTML = "Human Wins!";
        chosenHuman.innerHTML = "Human: Rock";
        chosenMachine.innerHTML = "Machine: Scissors";
    } else if (human.scissors === true && machine.paper === true) {
        human.wins++;
        machine.loses++;
        humanWins.innerHTML = human.wins;
        machineLoses.innerHTML = machine.loses;
        winner.innerHTML = "Human Wins!";
        chosenHuman.innerHTML = "Human: Scissors";
        chosenMachine.innerHTML = "Machine: Paper";
    } else if (machine.scissors === true && human.paper === true) {
        human.loses++;
        machine.wins++;
        humanLoses.innerHTML = human.loses;
        machineWins.innerHTML = machine.wins;
        winner.innerHTML = "Machine Wins!";
        chosenHuman.innerHTML = "Human: Scissors";
        chosenMachine.innerHTML = "Machine: Paper";
    } else if (machine.rock === true && human.scissors === true) {
        human.loses++;
        machine.wins++;
        humanLoses.innerHTML = human.loses;
        machineWins.innerHTML = machine.wins;
        winner.innerHTML = "Machine Wins!";
        chosenHuman.innerHTML = "Human: Scissors";
        chosenMachine.innerHTML = "Machine: Rock";
    } else if (machine.paper === true && human.rock === true) {
        human.loses++;
        machine.wins++;
        humanLoses.innerHTML = human.loses;
        machineWins.innerHTML = machine.wins;
        winner.innerHTML = "Machine Wins!";
        chosenHuman.innerHTML = "Human: Paper";
        chosenMachine.innerHTML = "Machine: Machine";
    } else {
        console.log('Error or tie');
        human.ties++;
        machine.ties++;
        humanTies.innerHTML = human.ties;
        machineTies.innerHTML = machine.ties;
        winner.innerHTML = "Tie!";
    }
}