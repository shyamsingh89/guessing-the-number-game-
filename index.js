var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];


function play(){
    var user_guess = document.getElementById("guess").value;
  
    if(user_guess < 1 || user_guess > 100 ){
        alert("your number isn't between 1-100, atleast in the math I know");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            if (user_guess<answer-20){
                document.getElementById("message1").textContent = "Your guessed number is too low";
            }
            else{
                document.getElementById("message1").textContent = "Your guessed number is low";
            }
            document.getElementById("message2").textContent = "No. Of guesses : " +
            no_of_guesses;
            document.getElementById("message3").textContent = "Guessed number(s) are: " +
            guessed_nums;
        }
        else if(user_guess  > answer){
            if (user_guess>answer+20){
                document.getElementById("message1").textContent = "Your guessed number is too high";
            }
            else{
                document.getElementById("message1").textContent = "Your guessed number is high";
            }
            document.getElementById("message2").textContent = "No. Of guesses : " +
            no_of_guesses;
            document.getElementById("message3").textContent = "Guessed number(s) are: " +
            guessed_nums;
        }
        else if(user_guess == answer){
            document.getElementById("message1").textContent = "Yay, You won!!";
            document.getElementById("message2").textContent = "the number was " + answer;
            document.getElementById("message3").textContent = " You guessed it in  " +   no_of_guesses   +" guesses"; 
            
        }
    }
}