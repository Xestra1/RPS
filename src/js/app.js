let human = {
    paper: false,
    rock: false,
    scissors: false,
    wins: 0,
    loses: 0,
    ties: 0
};

let machine = {
    paper: false,
    rock: false,
    scissors: false,
    wins: 0,
    loses: 0,
    ties: 0
};

const humanWins = document.getElementById('humanWins');
const humanLoses = document.getElementById('humanLoses');
const humanTies = document.getElementById('humanTies');
const machineWins = document.getElementById('machineWins');
const machineLoses = document.getElementById('machineLoses');
const machineTies = document.getElementById('machineTies');
const winner = document.getElementById('winner');
const chosenItem = document.getElementById('chosenItem');
const chosenHuman = document.getElementById('chosenHuman');
const chosenMachine = document.getElementById('chosenMachine');


humanWins.innerHTML = human.wins;
humanLoses.innerHTML = human.loses;
humanTies.innerHTML = human.ties;
machineWins.innerHTML = machine.wins;
machineLoses.innerHTML = machine.loses;
machineTies.innerHTML = machine.ties;

const paper = () => {
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

const rock = () => {
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

const scissors = () => {
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

const machineChoose = () => {
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

const submit = () => {
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
        human.ties++;
        machine.ties++;
        humanTies.innerHTML = human.ties;
        machineTies.innerHTML = machine.ties;
        winner.innerHTML = "Tie!";
    }
}