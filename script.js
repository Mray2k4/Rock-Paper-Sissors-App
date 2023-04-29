/*
const game = ['Rock', 'Paper', 'Sissors'];


for (let i = 0; i < game.length; i++) {
    const ele = game[i];
    games = Math.floor(Math.random() * game.length);

    console.log(games);
}
*/
const rock = document.getElementById('item-1');
const paper = document.getElementById('item-2');
const sissors = document.getElementById('item-3');

const msg1 = document.getElementById('message1');
const msg2 = document.getElementById('message2');
const msg3 = document.getElementById('message3');

let answer = Math.floor(Math.random() * 3) + 1;


rock.addEventListener('click', function() {
    rock.src = "/images/cartoon rock.png"; 
});

paper.addEventListener('click', function() {
    paper.src = "/images/cartoon paper.png"; 
});

sissors.addEventListener('click', function() {
    sissors.src = "/images/cartoon sissors.png"; 
});
    
    


