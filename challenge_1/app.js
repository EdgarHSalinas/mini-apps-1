 function resetBoard() {
        var p = document.getElementById("won");
        p.onclick = showAlert;

        var boardsState = {
                    '0': false,
                    '1': null,
                    '2': false,
                    '3': false,
                    '4': null,
                    '5': false,
                    '6': false,
                    '7': null,
                    '8': false
                };
      for (var key in boardsState) {
      
          clearState(key, boardsState[key]);
      }
      
     
    };

    function showAlert(event) {
      alert('You have Won! ');
    }

function clearState(key, state) {
         state = '';
         var node = document.getElementById(key);
         node.innerHTML = state;
         
}
         

var state = "O";
var player;

var boardsState = {
            '0': false,
            '1': null,
            '2': false,
            '3': false,
            '4': null,
            '5': false,
            '6': false,
            '7': null,
            '8': false
        }

var count = 0;



function clickedBox(event) {
         count++
         if (count > 8) {
             alert('Full Board! Play Again');
         }
         var that = this;
     
         window.addEventListener('click', function(event) {

           var box = event.target.id;

           
           if (boardsState[box] === null || boardsState[box] === false) {
              if (state === "X") {
                state = "O";
           } else {
               state = "X";
             }
           }

           
           boardsState[box] = state;

          

           updateState(box, state);

           
           
         });
     }

   

function updateState(box, state) {
         var node = document.getElementById(box);
         node.innerHTML = state;
         
         var node = document.getElementById('player');
         
        if (checkForWin(boardsState) === 1) {
          node.innerHTML = player;
          var node = document.getElementById('won');
          var win = 'You have won ' + player;
          return node.innerHTML = win;
               
        }
           
         if (state === 'X') {
           player = "Player O";
         } else {
             player = "Player X";
         }
         node.innerHTML = player;
       
     };

function checkForWin(boardsState){
    // for (key in boardsState) {
    //   if (boardsState[])
    // }
    
    if ( (boardsState[0] === boardsState[1] && boardsState[1] === boardsState[2]) || 
         (boardsState[3] === boardsState[4] && boardsState[4] === boardsState[5]) || 
         (boardsState[6] === boardsState[7] && boardsState[7] === boardsState[8]) ||
         (boardsState[0] === boardsState[4] && boardsState[4] === boardsState[8]) ||
         (boardsState[2] === boardsState[4] && boardsState[4] === boardsState[6]) ) {
// debugger;
          return 1;
    } else {
        return false;
    }
}


 
    // var winningOptions = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    // ]
    // var arrX = [];
    // var arrO = [];
    // for (var key in obj) {
    //   if (key == "X") {
    //       arrX.push([obj[key],"X"]);
    //   } else if (key == "O") {
    //       arrO.push([obj[key],"Y"]);
    //   }
       
    // }  
    //    for (var i = 0; i < winningOptions.length; i++) {
    //      var row = winningOptions[i];

    //    }
 



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

  

  
   