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

function Space(x, y, letter, marked) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.marked = false;
}

Space.prototype.modify = function() {
    if (isEven(counter) === true) {
        return this.marked = "X";
    } else if (isOdd(counter) === true) {
        return this.marked = "O";
    } else {
        console.log("pass")
    }
}
var board = new Board(spacesArray);
console.log(board);

function winningCondition() {
    if ((space0.marked === "X") && (space1.marked === "X") && (space2.marked === "X"))
        alert("winner");
    else {

    }
}

//Global Click Counter
var counter = 0;
//jquery

$(function() {
    $("#0").click(function() {
        var turn = space0.modify();
        counter++;
        $("#0 h1").text(turn);
        winningCondition();
    }); //space1
    $("#1").click(function() {
        var turn = space1.modify();
        counter++;
        $("#1 h1").text(turn);
    }); //space1
    $("#2").click(function() {
        var turn = space2.modify();
        counter++;
        $("#2 h1").text(turn);
    }); //space1
    $("#3").click(function() {
        var turn = space3.modify();
        counter++;
        $("#3 h1").text(turn);
    }); //space1
    $("#4").click(function() {
        var turn = space4.modify();
        counter++;
        $("#4 h1").text(turn);
    }); //space1
    $("#5").click(function() {
        var turn = space5.modify();
        counter++;
        $("#5 h1").text(turn);
    }); //space1
    $("#6").click(function() {
        var turn = space6.modify();
        counter++;
        $("#6 h1").text(turn);
    }); //space1
    $("#7").click(function() {
        var turn = space7.modify();
        counter++;
        $("#7 h1").text(turn);
    }); //space1
    $("#8").click(function() {
        var turn = space8.modify();
        counter++;
        $("#8 h1").text(turn);
    }); //space1
}); //jQuery
