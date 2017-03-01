// Backend

function Player(letter) {
    this.letter = letter;
}

Player.prototype.mark = function() {
    return this.letter;
}

function Space(x, y) {
    this.x = x;
    this.y = y;
}

Space.prototype.xCoordiate = function() {
    return this.x;
}
Space.prototype.yCoordiate = function() {
    return this.y;
}

function Board() {

}

function Game() {

}

Board.prototype.find = function(x, y) {
    return space;
}

var space1 = new Space();
var board1 = new Board();

console.log(board1.find(space1));
