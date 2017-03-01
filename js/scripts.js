// Backend
var space0 = new Space(0, 0, "");
var space1 = new Space(0, 1, "");
var space2 = new Space(0, 2, "");
var space3 = new Space(1, 0, "");
var space4 = new Space(1, 1, "");
var space5 = new Space(1, 2, "");
var space6 = new Space(2, 0, "");
var space7 = new Space(2, 1, "");
var space8 = new Space(2, 2, "");

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}

var spacesArray = [space0, space1, space2, space3, space4, space5, space6, space7, space8];

function Board(spaces) {
    this.spaces = spaces;
}

function Player(mark) {
    this.mark = mark;
}

function Space(x, y, letter, marked) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.marked = false;
}

Space.prototype.modify = function() {
    if (this.marked === true) {
        counter--;
    } else {
        if (isEven(counter) === true) {
            this.marked = true;
            return this.letter = "X";
        } else if (isOdd(counter) === true) {
            this.marked = true;
            return this.letter = "O";
        } else {
            console.log("pass")
        }
    }
}
var player1 = new Player("X");
var player2 = new Player("O");
console.log(player2);
var board = new Board(spacesArray);
console.log(board);

function winningCondition() {
    if ((space0.letter === "X") && (space1.letter === "X") && (space2.letter === "X")) {
        alert("Player 1 Wins");
    } else if ((space0.letter === "X") && (space3.letter === "X") && (space6.letter === "X")) {
        alert("Player 1 Wins");
    } else if ((space0.letter === "X") && (space4.letter === "X") && (space8.letter === "X")) {
        alert("Player 1 Wins");
    } else if ((space1.letter === "X") && (space4.letter === "X") && (space7.letter === "X")) {
        alert("Player 1 Wins");
    } else if ((space2.letter === "X") && (space5.letter === "X") && (space8.letter === "X")) {
        alert("Player 1 Wins");
    } else if ((space3.letter === "X") && (space4.letter === "X") && (space5.letter === "X")) {
        alert("Player 1 Wins");
    } else if ((space6.letter === "X") && (space4.letter === "X") && (space2.letter === "X")) {
        alert("Player 1 Wins");
    } else if ((space6.letter === "X") && (space7.letter === "X") && (space8.letter === "X")) {
        alert("Player 1 Wins");
    } else if ((space0.letter === "O") && (space1.letter === "O") && (space2.letter === "O")) {
        alert("Player 2 Wins");
    } else if ((space0.letter === "O") && (space3.letter === "O") && (space6.letter === "O")) {
        alert("Player 2 Wins");
    } else if ((space0.letter === "O") && (space4.letter === "O") && (space8.letter === "O")) {
        alert("Player 2 Wins");
    } else if ((space1.letter === "O") && (space4.letter === "O") && (space7.letter === "O")) {
        alert("Player 2 Wins");
    } else if ((space2.letter === "O") && (space5.letter === "O") && (space8.letter === "O")) {
        alert("Player 2 Wins");
    } else if ((space3.letter === "O") && (space4.letter === "O") && (space5.letter === "O")) {
        alert("Player 2 Wins");
    } else if ((space6.letter === "O") && (space4.letter === "O") && (space2.letter === "O")) {
        alert("Player 2 Wins");
    } else if ((space6.letter === "O") && (space7.letter === "O") && (space8.letter === "O")) {
        alert("Player 2 Wins");
    }
}

function clear() {
    for (var i = 0; i <= 8; i++) {
        $("#" + i).text(" ");
    }
}
//Global Click Counter
var counter = 0;
//jquery

$(function() {
    $("#0").click(function() {
        var turn = space0.modify();
        console.log(turn);
        counter++;
        $("#0 h1").text(turn);
        winningCondition();
    }); //space1
    $("#1").click(function() {
        var turn = space1.modify();
        counter++;
        $("#1 h1").text(turn);
        winningCondition();
    }); //space1
    $("#2").click(function() {
        var turn = space2.modify();
        counter++;
        $("#2 h1").text(turn);
        winningCondition();
    }); //space1
    $("#3").click(function() {
        var turn = space3.modify();
        counter++;
        $("#3 h1").text(turn);
        winningCondition();
    }); //space1
    $("#4").click(function() {
        var turn = space4.modify();
        counter++;
        $("#4 h1").text(turn);
        winningCondition();
    }); //space1
    $("#5").click(function() {
        var turn = space5.modify();
        counter++;
        $("#5 h1").text(turn);
        winningCondition();
    }); //space1
    $("#6").click(function() {
        var turn = space6.modify();
        counter++;
        $("#6 h1").text(turn);
        winningCondition();
    }); //space1
    $("#7").click(function() {
        var turn = space7.modify();
        counter++;
        $("#7 h1").text(turn);
        winningCondition();
    }); //space1
    $("#8").click(function() {
        var turn = space8.modify();
        counter++;
        $("#8 h1").text(turn);
        winningCondition();
    }); //space1
}); //jQuery
