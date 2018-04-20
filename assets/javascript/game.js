            // The Psychic Game! Still working on figuring out how to reset it after a win and also to show letters guessed under Guesses So Far. 
            
            // Create an array that lists out all of the options (psychic options)
            var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

            var win = 0; 

            var won = false

            var losses = 0;

            var lost = false

            var guessesLeft = 10;

            var guessesSoFar = 0;

            document.querySelector(".wins").innerHTML=win;
            document.querySelector(".losses").innerHTML=losses;
            document.querySelector(".guessesLeft").innerHTML=guessesLeft;
            document.querySelector(".guessesSoFar").innerHTML=guessesSoFar;
    
            // This function is run whenever the user presses a key.
            document.onkeyup = function (event) {
    
            // Determines which key was pressed.
                var userGuess = String.fromCharCode(event.key);
                console.log(userGuess)
            // Display number of times user Wins (display # of times user guessed corectly) 
                if (userGuess == computerGuess) {
                   win=win+1 
                   won=true
                   document.querySelector(".wins").innerHTML=win;
                } 
            // Deterine loss (# of times user failed to guess the letter correctly)
                else if (userGuess !== computerGuess) {
                    guessesLeft=guessesLeft-1
                    document.querySelector(".guessesLeft").innerHTML=guessesLeft;
                }
            // Determine # of Guesses (the specific letters that the user typed. Display these until the user either wins or loses) 
            // if (userGuess == computerGuess || userGuess !== computerGuess) {
            //     guessesLeft=guessesLeft-1
            //     document.querySelector(".guessesLeft").innerHTML=guessesLeft;
            // }   
            // If user looses then game overkkkk
            if (guessesLeft === 0) {
                lost = true
                losses=losses+1
                document.querySelector(".losses").innerHTML=losses;
            }
            // --Still trying to figure this out too...
            if (userGuess = event.key) {
                guessesSoFar=guessesSoFar+1
                document.querySelector(".guessesSoFar").innerHTML=guessesSoFar;

                
            } 


            // When the player Wins, increase the Wins counter and start the game over again (without refreshing the page)
            // Stil trying to figure this out...
            
            // When the player Loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins      
            // Stil ltrying to figure this out too...


            };

            // Randomly chooses a choice from the options array. This is the Computer's guess.
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log("The computer guessed this letter: " + computerGuess)

            


