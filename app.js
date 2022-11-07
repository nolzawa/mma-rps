// RPS brains

//assign random RPS value to the different buttons

function doRandom() {
    console.log("Random Activated");
    document.getElementById("result_1").innerHTML = "Select your Attack";
    document.getElementById("result_2").innerHTML = "Select your Attack";
    let choices = ['rock', 'paper', 'scissors'];

    // for (let i = 0;i < choices.length; i++) {
    //     let result = choices[Math.floor(Math.random() * choices.length)];
    //     [choices[i], choices[result]] = [choices[result], choices[i]];
    //     document.getElementById(i).value = choices[result];
    //     console.log(i, choices[i], choices[result], choices[result], choices[i]);
    //     console.log(choices[0], choices[1], choices[3])
    // }

    // for (let i = choices.length - 1; i > 0; i--) {
    //     let rand = Math.floor(Math.random() * i+1);
    //     [choices[i], choices[rand]] = [choices[rand], choices[i]]
    //     document.getElementById(i).value = choices[i];
    //     console.log(i, choices[i], choices[rand], choices[rand], choices[i]);
    //     console.log(choices[0], choices[1], choices[3])
    // }

        randChoices = [];
        randChoices2 = [];
        copy = [...choices];
        copy2 = [...choices];
        i = choices.length;
        j = 0;
        k = 0;

        //loop to assign the random values
        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            k = Math.floor(Math.random() * (i+1));
            randChoices.push(copy[j]);
            randChoices2.push(copy2[k]);
            copy.splice(j,1);
            copy2.splice(k,1);
        }

        //set button values for P1
        for (let i = 0;i < randChoices.length;i++) {
            document.getElementById(i).value = randChoices[i];
        }

        // hard coded for P2 because the element id selected is 3, 4, 5
        document.getElementById("3").value = randChoices2[2];
        document.getElementById("4").value = randChoices2[1];
        document.getElementById("5").value = randChoices2[0];
}

score_1 = 0;
score_2 = 0;
// check wins
function checkWin(p1, p2) {
    if (p1 === p2 || p2 === p1) {
        document.getElementById("result_1").innerHTML += "<p>You tied!</p>";
        document.getElementById("result_2").innerHTML += "<p>You tied!</p>";
    }
    if (p1 === "scissors" && p2 === "paper") {
        document.getElementById("result_1").innerHTML += "<p>You Won!</p>";
        score_1 += 1;
        document.getElementById("score_1").innerHTML = score_1;
    }
    if (p2 === "scissors" && p1 === "paper") {
        document.getElementById("result_2").innerHTML += "<p>You Won!</p>";
        score_2 += 1;
        document.getElementById("score_2").innerHTML = score_2;
    }
    if (p1 === "paper" && p2 === "rock") {
        document.getElementById("result_1").innerHTML += "<p>You Won!</p>";
        score_1 += 1;
        document.getElementById("score_1").innerHTML = score_1;
    }
    if (p2 === "paper" && p1 === "rock") {
        document.getElementById("result_2").innerHTML += "<p>You Won!</p>";
        score_2 += 1;
        document.getElementById("score_2").innerHTML = score_2;
    }
    if (p1 === "rock" && p2 === "scissors") {
        document.getElementById("result_1").innerHTML += "<p>You Won!</p>";
        score_1 += 1;
        document.getElementById("score_1").innerHTML = score_1;
    }
    if (p2 === "rock" && p1 === "scissors") {
        document.getElementById("result_2").innerHTML += "<p>You Won!</p>";
        score_2 += 1;
        document.getElementById("score_2").innerHTML = score_2;
    }
}

function getValue(button) {
    if (button === 0 || button === 1 || button === 2) {
        p1 = document.getElementById(button).value;
        document.getElementById("result_1").innerHTML = "<p>Played <strong>" + document.getElementById(button).value + "</strong>.</p>";
        console.log(p1);
    }
    else {
        p2 = document.getElementById(button).value;
        document.getElementById("result_2").innerHTML = "<p>Played <strong>" + document.getElementById(button).value + "</strong>.</p>";
        console.log(p2);
        checkWin(p1, p2);
    }
}

function clearScore() {
    score_1 = 0;
    score_2 = 0;

    document.getElementById("score_2").innerHTML = score_2;
    document.getElementById("score_1").innerHTML = score_1;
    document.getElementById("result_1").innerHTML = "Select your Attack";
    document.getElementById("result_2").innerHTML = "Select your Attack";
}

function changeNames1() {
    //set the names in the <p>
    document.getElementById("fighter_1_name").innerHTML = document.getElementById("fighter_1").value;
}

function changeNames2() {
    document.getElementById("fighter_2_name").innerHTML = document.getElementById("fighter_2").value;
}