var state = "O";
var player;

var boardsState = {
            '0': false,
            '1': false,
            '2': false,
            '3': false,
            '4': false,
            '5': false,
            '6': false,
            '7': false,
            '8': false
        }

var count = 0;


function clickedBox(event) {
         count++
         if (count > 8) {
             alert('Full Board! Play Again');
         }
         var that = this;
         console.log(that);
         window.addEventListener('click', function(event) {

           var box = event.target.id;
           console.log(box);
           
           if (boardsState[box] === false) {
              if (state === "X") {
                state = "O";
           } else {
               state = "X";
             }
           }

           
           console.log(state);
           boardsState[box] = state;

     


           updateState(box, state);
           checkForWin(boardsState);
        
         });
     }

function updateState(box, state) {
         var node = document.getElementById(box);
         node.innerHTML = state;
         
         var node = document.getElementById('player');
         
         if (state === 'X') {
           player = "Player O";
         } else {
             player = "Player X";
         }
         node.innerHTML = player;
       
     };

function checkForWin(boardsState){
    var obj = boardsState;

    for (var key in obj) {
       if ()
      console.log(key, obj[key]);
    }
}


// class TicTacToe {
//     constructor(event) {
      
//         this.boards = {
//             '0': false,
//             '1': false,
//             '2': false,
//             '3': false,
//             '4': false,
//             '5': false,
//             '6': false,
//             '7': false,
//             '8': false
//         }

//         this.state = {
//           current: 'X',
//           toggle: false
//         }
//     }

//      clickedBox(event) {
//          var that = this;
//          console.log(that);
//          window.addEventListener('click', function(event) {
//              console.log(event);
//            return that.updateState(event);
//          });
//      }

//      updateState(event, toggle) {
//          var currentState = document.getElementById('outside');
//          currentState = !toggle;
//          console.log(currentState);
//          console.log(event);
//      }
// };

// var ticTacToe = new TicTacToe();
// console.log(ticTacToe);






// Start at X and after first player chooses one box. It will toggle to 0
// const sqOne = document.getElementById('btn1');

// sqOne.addEventListener('click', function(event) {
//     // change inner to X
//     // if toggled change to 0

//     console.log('sqOne pressed ', sqOne  );
// })


// Implementation

  // Check if position has been used 
     // if in in use alert a warning
     // don't allow change of player until one box is checked

  
  // After Each play look for 3 in a row || Board is full game > 4 

    // Diagnolly
    // Horizontally 
    // Vertically
  

  // If a condition is met Display message 

  // Reset Game 
    // Clear Board and Messages

  

  
   