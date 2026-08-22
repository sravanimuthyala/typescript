"use strict";
// restrict somebody choices
const windoww = 0;
const MIDDLE = 1;
const First = 2;
// if(seat === windoww){
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["First"] = 0] = "First";
    SeatChoice[SeatChoice["Middle"] = 1] = "Middle";
    SeatChoice[SeatChoice["Window"] = 2] = "Window";
})(SeatChoice || (SeatChoice = {}));
const Seat = SeatChoice.Middle;
