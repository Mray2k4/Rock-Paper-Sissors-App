/*
let game = ['Rock', 'Paper', 'Sissors'];
let games = [];

for (let i = 0; i < game.length; i++) {
    const ele = game[i];
    games = Math.floor(Math.random() * game.length);

    console.log(games);
}
*/


const rock = document.getElementById('item-1');
const paper = document.getElementById('item-2');
const sissors = document.getElementById('item-3');


let msg1 = document.getElementById('message1');
let msg2 = document.getElementById('message2');
let msg3 = document.getElementById('message3');

let userChoice = 2;

const scoreUser = document.getElementById('userScore');
const scoreComp = document.getElementById('compScore')
let scoreU = 0;
let scoreC = 0

rock.addEventListener('click', function() {
    msg1.innerHTML = '<b>User picked rock</b>';
    let answer = Math.floor(Math.random() * 3) + 1;
    if(userChoice == answer) {
        msg2.innerHTML = '<b>Computer chose rock</b>';
        msg3.innerHTML = "<b>It's a TIE!</b>";
    } else if(userChoice > answer){
       scoreU += 1;
       scoreUser.innerHTML = scoreU;
       msg2.innerHTML = '<b>Computer chose sissors</b>';
       msg3.innerHTML = "<b>User WON!</b>";
    } else {
       scoreC += 1;
       scoreComp.innerHTML = scoreC;
       msg2.innerHTML = '<b>Computer chose paper</b>';
       msg3.innerHTML = "<b>Computer WON!</b>";
    }
});

paper.addEventListener('click', function() {
    msg1.innerHTML = '<b>User picked paper</b>';
    let answer = Math.floor(Math.random() * 3) + 1;
    if(userChoice == answer) {
        msg2.innerHTML = '<b>Computer chose paper</b>';
        msg3.innerHTML = "<b>It's a TIE!</b>";
    } else if(userChoice > answer){
       scoreU += 1;
       scoreUser.innerHTML = scoreU;
       msg2.innerHTML = "<b>Computer chose rock</b>";
       msg3.innerHTML = "<b>User WON!</b>";
    } else {
       scoreC += 1;
       scoreComp.innerHTML = scoreC;
       msg2.innerHTML = '<b>Computer chose sissors</b>';
       msg3.innerHTML = "<b>Computer WON!</b>";
    } 
});

sissors.addEventListener('click', function() {
    msg1.innerHTML = '<b>User picked sissors</b>';
    let answer = Math.floor(Math.random() * 3) + 1;
    if(userChoice == answer) {
        msg2.innerHTML = '<b>Computer chose sissors</b>';
        msg3.innerHTML = "<b>It's a TIE!</b>";
    } else if(userChoice > answer){
        scoreU += 1;
        scoreUser.innerHTML = scoreU;
        msg2.innerHTML = '<b>Computer chose paper</b>';
        msg3.innerHTML = "<b>User WON!</b>";
    } else {
        scoreC += 1;
        scoreComp.innerHTML = scoreC;
        msg2.innerHTML = '<b>Computer chose rock</b>';
        msg3.innerHTML = "<b>Computer WON!</b>";
    }
});




