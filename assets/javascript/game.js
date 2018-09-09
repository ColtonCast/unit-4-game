$(document).ready(function() {

        // these are all the buttons that pass the value of the gems and adds them to the results.
        // TODO i think i could have made one button press function for all of the gems instead of individually
        
    $("#gemRed").on("click", function() {
        result += gemRed.valueOf();
        $("#gemResults").text(result);
        gameOver = false;
    });
    $("#gemBlue").on("click", function() {
        result += gemBlue.valueOf();
        $("#gemResults").text(result);
        gameOver = false;
    });
    $("#gemGreen").on("click", function() {
        result += gemGreen.valueOf();
        $("#gemResults").text(result);
        gameOver = false;
    });
    $("#gemYellow").on("click", function() {
        result += gemYellow.valueOf();
        $("#gemResults").text(result);
        gameOver = false;
    });
    $("#gemPurple").on("click", function() {
        result += gemPurple.valueOf();
        $("#gemResults").text(result);
        gameOver = false;
    });


        // this is the random function i used to get all random numbers
function randomNum(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};
        // this function checks for duplicate numbers in the array and makes sure gems dont have same values
        // pretty common  to get duplicates because 5 numbers between 1-10 are made 
    function checkDuplicate(arr){
        for(var i = 0; i<arr.length; i++){
          if(i !== arr.indexOf(arr[i])){
            return false
          }else if(i === arr.length-1){
            return true
          }
        }
      }

        // global variables
      var gameOver = false;
      var loses = 0;
      var wins = -1;
      var result = 0;
      var gemRed = 0;
      var gemBlue = 0;
      var gemGreen = 0;
      var gemYellow = 0;
      var gemPurple = 0;
      var gemAssign = [];
      var gamePoint = 0;

            
    function gemNums() {
            // the for loop makes 5 random numbers and pushes it to the array
            gemAssign = [];
        for (var i = 0; i < 5; i++) {
            gemAssign.push(randomNum(1,10));
        }
        // checks for duplicates. if no duplicates are found it proceeds to pop the numbers out of the array into each gem
        if (checkDuplicate(gemAssign)) {
        
            console.log("no duplicates found this games gem values are ==>" + gemAssign + " <== gem values!!")
                gemRed = gemAssign.pop();
                gemBlue = gemAssign.pop();
                gemGreen = gemAssign.pop();
                gemYellow = gemAssign.pop();
                gemPurple = gemAssign.pop();
                gamePoint = randomNum(15,100);

        } else {
            // if duplicates are found it reruns the gemnums function to get the numbers again.
            console.log("duplicates found this games gem values are ==>" + gemAssign + " <== gem values!!")
            gemNums();
        }
    }
            // if else checks to see if win conditions are met and to increment points accordingly.
    $(".gemButton").on("click", function() {
        if (result > gamePoint) {
            gameOver = true;
            loses += 1;
            gameStart();
            $("#losesBox").text(loses);
        } else if (result === gamePoint) {
            gameOver = true;
            wins += 1;
            gameStart();
            $("#winsBox").text(wins);
        }
    });


            // this is the button to push to start the initial game
    $("#gameStarter").on("click", function() {
        gameStart();
    });
    function gameStart() {
        if (gameOver === true) {
            result = 0;
            gamePoint = 0;
            console.log("game Start");
        }
        gemNums();
        $("#gemResults").text(result);
        $("#gemAssign").text(gamePoint);
    };
});



        // TODO make anoying flashing background colors and timer for 2 secs to let player know they won
        // TODO get the average value of the 5 gems. divide the gamePoint by the average value.
        // if a player wins the game and beats the average clicks it takes to win then they get a super bonus!