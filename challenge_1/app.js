var state = 'X';

// Start at X and after first player chooses one box. It will toggle to 0


const sqOne = document.getElementById('btn1');

sqOne.addEventListener('click', function(event) {
    // change inner to X
    // if toggled change to 0

    console.log('sqOne pressed ', sqOne  );
})


// Implementation

  // Check if position has been used 
     // if in in use alert a warning
     // don't allow change of player until one box is checked


  // After Each play look for 3 in a row

    // Diagnolly
    // Horizontally 
    // Vertically

  // If a condition is met Display message 