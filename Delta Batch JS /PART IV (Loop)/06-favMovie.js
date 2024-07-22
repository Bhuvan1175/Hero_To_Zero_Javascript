let favMovie = "Meri Jung";
        let guess = prompt("Please Guess Movie Name That I Love Most from [Titu weds Minu, Wednesday, Special26, Spyder, Radhe, Meri Jung]");
        
        while (guess !== favMovie && guess !== "quit") {
            document.querySelector("#heading").innerHTML = "Wrong Guess. Please try Again!!";
            guess = prompt("Wrong Guess. Please try Again! Guess Movie Name That I Love Most from [Titu weds Minu, Wednesday, Special26, Spyder, Radhe, Meri Jung]");
        }
        
        if (guess === favMovie) {
            document.querySelector("#heading").innerHTML = `Congrats!! You Guessed Correctly. I Love ${favMovie} Movie!`;
        }