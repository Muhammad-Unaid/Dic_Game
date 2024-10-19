let player1 = { name: "", choice: "", score: 0 };
let player2 = { name: "", choice: "", score: 0 };
let currentTurn = "";

function startGame() {
    player1.name = prompt("Player 1 ka naam bataye:");
    player2.name = prompt("Player 2 ka naam bataye:");

    const choice = prompt(`${player1.name}, Head ya Tail select karein (Head/Tail):`).toLowerCase();
    
    if (choice === "head") {
        player1.choice = "head";
        player2.choice = "tail";
    } else if (choice === "tail") {
        player1.choice = "tail";
        player2.choice = "head";
    } else {
        alert("Ghalat choice! Sirf Head ya Tail select karein.");
        startGame();
        return;
    }

    alert(`${player1.name} ne ${player1.choice} select kiya, aur ${player2.name} ko ${player2.choice} mili.`);

    tossCoin();
}

function tossCoin() {
    const toss = Math.random() < 0.5 ? "head" : "tail";
    alert(`Toss ka result: ${toss}`);

    if (toss === player1.choice) {
        currentTurn = player1.name;
        document.getElementById("player1Btn").disabled = false;
        document.getElementById("player2Btn").disabled = true;
        document.getElementById("gameStatus").innerText = `${player1.name} ki bari hai.`;
    } else {
        currentTurn = player2.name;
        document.getElementById("player1Btn").disabled = true;
        document.getElementById("player2Btn").disabled = false;
        document.getElementById("gameStatus").innerText = `${player2.name} ki bari hai.`;
    }

    document.getElementById("player1Name").innerText = `${player1.name} (Choice: ${player1.choice})`;
    document.getElementById("player2Name").innerText = `${player2.name} (Choice: ${player2.choice})`;
}

function rollDice(player) {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("result").innerText = `Player ${player} ka dice roll: ${roll1} aur ${roll2}`;

    if (roll1 === 6 && roll2 === 6) {
        alert(`Player ${player} jeet gaya!`);
        resetGame();
        return;
    }

    if (player === 1) {
        currentTurn = player2.name;
        document.getElementById("player1Btn").disabled = true;
        document.getElementById("player2Btn").disabled = false;
        document.getElementById("gameStatus").innerText = `${player2.name} ki bari hai.`;
    } else {
        currentTurn = player1.name;
        document.getElementById("player1Btn").disabled = false;
        document.getElementById("player2Btn").disabled = true;
        document.getElementById("gameStatus").innerText = `${player1.name} ki bari hai.`;
    }
}

function resetGame() {
    player1.score = 0;
    player2.score = 0;
    document.getElementById("result").innerText = "";
    startGame();
}

startGame();
