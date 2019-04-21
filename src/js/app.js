var human = {
    paper: false,
    rock: false,
    scissors: false
};

var machine = {
    paper: false,
    rock: false,
    scissors: false
};

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
    var random = Math.floor(Math.random() * 3);
    if (random === 0) {
        machine.paper = true
    } else if (random === 1) {
        machine.rock = true;
    } else if (random === 2) {
        machine.scissors = true;
    } else {
        console.log('Heres your medal. you broke the machine');
    }
}

function submit() {
    machineChoose();
    if (human.paper === true && machine.rock === true) {
        document.getElementById('winner').innerHTML = "Human Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Paper";
        document.getElementById('chosenMachine').innerHTML = "Machine: Rock";
    } else if (human.rock === true && machine.scissors === true) {
        document.getElementById('winner').innerHTML = "Human Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Rock";
        document.getElementById('chosenMachine').innerHTML = "Machine: Scissors";
    } else if (human.scissors === true && machine.paper === true) {
        document.getElementById('winner').innerHTML = "Human Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Scissors";
        document.getElementById('chosenMachine').innerHTML = "Machine: Paper";
    } else if (machine.scissors === true && human.paper === true) {
        document.getElementById('winner').innerHTML = "Machine Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Scissors";
        document.getElementById('chosenMachine').innerHTML = "Machine: Paper";
    } else if (machine.rock === true && human.scissors === true) {
        document.getElementById('winner').innerHTML = "Machine Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Scissors";
        document.getElementById('chosenMachine').innerHTML = "Machine: Rock";
    } else if (machine.paper === true && human.rock === true) {
        document.getElementById('winner').innerHTML = "Machine Wins!";
        document.getElementById('chosenHuman').innerHTML = "Human: Paper";
        document.getElementById('chosenMachine').innerHTML = "Machine: Machine";
    } else {
        console.log('Error or tie');
        document.getElementById('winner').innerHTML = "Tie!";
    }
}