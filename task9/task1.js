let player1='scissors';//variable can be (rock,paper,scissors) output change in order to input
let player2='paper';//variable can be (rock,paper,scissors) output change in order to input

if(player1===player2){
    console.log("its a tie");
}
else if(
    player1==='paper' && player2==='rock' ||
    player1==='rock' && player2==='scissors'||
    player1==='scissors' && player2==='paper'
){
    console.log("player1 is win");
}
else{
    console.log("player2 is win");
}
// //using ternary operator
// console.log(
//     (player1 === player2) ? "its a tie" :
//         (player1 === 'paper' && player2 === 'rock' ||
//             player1 === 'rock' && player2 === 'scissors' ||
//             player1 === 'scissors' && player2 === 'paper') ? "player1 is win" : "player2 is win"
// );
