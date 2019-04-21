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

document.getElementById('humanWins').innerHTML = human.wins;
document.getElementById('humanLoses').innerHTML = human.loses;
document.getElementById('humanTies').innerHTML = human.ties;
document.getElementById('machineWins').innerHTML = machine.wins;
document.getElementById('machineLoses').innerHTML = machine.loses;
document.getElementById('machineTies').innerHTML = machine.ties;

function paper() {
    if (human.paper === false && human.rock === false && human.scissors === false) {
        human.paper = true;
        document.getElementById('chosenItem').innerHTML = "Paper";
    } else {
        human.paper = true;
        human.rock = false;
        human.scissors = false;
        document.getElementById('chosenItem').innerHTML = "Paper";
    }
}

function rock() {
    if (human.paper === false && human.rock === false && human.scissors === false) {
        human.rock = true;
        document.getElementById('chosenItem').innerHTML = "Rock";
    } else {
        human.paper = false;
        human.rock = true;
        human.scissors = false;
        document.getElementById('chosenItem').innerHTML = "Rock";
    }
}

function scissors() {
    if (human.paper === false && human.rock === false && human.scissors === false) {
        human.scissors = true;
        document.getElementById('chosenItem').innerHTML = "Scissors";
    } else {
        human.paper = false;
        human.rock = false;
        human.scissors = true;
        document.getElementById('chosenItem').innerHTML = "Scissors";
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
        document.getElementById('humanWins').innerHTML = human.wins;
        document.getElementById('machineLoses').innerHTML = machine.loses;
        document.getElementById('winner').innerHTML = "Human Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Paper";
        document.getElementById('chosenMachine').innerHTML = "Machine: Rock";
    } else if (human.rock === true && machine.scissors === true) {
        human.wins++;
        machine.loses++;
        document.getElementById('humanWins').innerHTML = human.wins;
        document.getElementById('machineLoses').innerHTML = machine.loses;
        document.getElementById('winner').innerHTML = "Human Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Rock";
        document.getElementById('chosenMachine').innerHTML = "Machine: Scissors";
    } else if (human.scissors === true && machine.paper === true) {
        human.wins++;
        machine.loses++;
        document.getElementById('humanWins').innerHTML = human.wins;
        document.getElementById('machineLoses').innerHTML = machine.loses;
        document.getElementById('winner').innerHTML = "Human Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Scissors";
        document.getElementById('chosenMachine').innerHTML = "Machine: Paper";
    } else if (machine.scissors === true && human.paper === true) {
        human.loses++;
        machine.wins++;
        document.getElementById('humanLoses').innerHTML = human.loses;
        document.getElementById('machineWins').innerHTML = machine.wins;
        document.getElementById('winner').innerHTML = "Machine Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Scissors";
        document.getElementById('chosenMachine').innerHTML = "Machine: Paper";
    } else if (machine.rock === true && human.scissors === true) {
        human.loses++;
        machine.wins++;
        document.getElementById('humanLoses').innerHTML = human.loses;
        document.getElementById('machineWins').innerHTML = machine.wins;
        document.getElementById('winner').innerHTML = "Machine Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Scissors";
        document.getElementById('chosenMachine').innerHTML = "Machine: Rock";
    } else if (machine.paper === true && human.rock === true) {
        human.loses++;
        machine.wins++;
        document.getElementById('humanLoses').innerHTML = human.loses;
        document.getElementById('machineWins').innerHTML = machine.wins;
        document.getElementById('winner').innerHTML = "Machine Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Paper";
        document.getElementById('chosenMachine').innerHTML = "Machine: Machine";
    } else {
        console.log('Error or tie');
        human.ties++;
        machine.ties++;
        document.getElementById('humanTies').innerHTML = human.ties;
        document.getElementById('machineTies').innerHTML = machine.ties;
        document.getElementById('winner').innerHTML = "Tie!";
    }
}