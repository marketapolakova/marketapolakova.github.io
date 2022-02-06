//open rules
document.querySelector('.btn-rules').addEventListener('click', function () {
    document.querySelector('.rules').style.display = 'block';
});

//close rules
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.rules').style.display = 'none';
});

game()
//random generator scissors paper rock
function game() {
    //selecting rock paper scissors
    let select = ['paper', 'scissors', 'rock'];
    let playerChoice;
    let computerChoice = '';
    let score=0;
    for (let index = 0; index < select.length; index++) {

        document.querySelector('.' + select[index]).addEventListener('click', function () {
            let random = Math.floor(Math.random() * 3)
            playerChoice = select[index];
            computerChoice = select[random];
            //displaying player choice
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.picked').style.display = 'block';
            document.querySelector('.picked-' + select[index]).style.display = 'block';
            //displaying computer choice
            setTimeout(function () {
                document.querySelector('.computer-none').style.display = 'none';
                document.querySelector('.computer-' + select[random]).style.display = 'block';
                document.querySelector('.result').style.display = 'block';
            //compare compuperChoice and playerChoice and display result
            if (computerChoice === playerChoice) {
                document.querySelector(".heading-result").innerHTML = "Draw";
               
            } else if (computerChoice === 'paper' && playerChoice === 'scissors' || computerChoice === 'rock' && playerChoice === 'paper' || computerChoice === 'scissors' && playerChoice === 'rock') {
                document.querySelector(".heading-result").innerHTML = "You win";
                document.querySelector(".circle1").style.display = "block";
                document.querySelector(".circle2").style.display = "block";
                document.querySelector(".circle3").style.display = "block";
                score++;
            } else if (computerChoice === 'scissors' && playerChoice === 'paper' || computerChoice === 'rock' && playerChoice === 'scissors' || computerChoice === 'paper' && playerChoice === 'rock') {
                document.querySelector(".heading-result").innerHTML = "You lose";
                document.querySelector(".circle1-comp").style.display = "block";
                document.querySelector(".circle2-comp").style.display = "block";
                document.querySelector(".circle3-comp").style.display = "block";
                score--;
            }
            //display score
                document.querySelector(".number").innerHTML = score;
            }, 1000);
           
        });
    }
}

//new game
document.querySelector('.play').addEventListener('click', function () {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.picked').style.display = 'none';
    document.querySelector('.picked-paper').style.display = 'none';
    document.querySelector('.picked-scissors').style.display = 'none';
    document.querySelector('.picked-rock').style.display = 'none';
    document.querySelector('.computer-paper').style.display = 'none';
    document.querySelector('.computer-scissors').style.display = 'none';
    document.querySelector('.computer-rock').style.display = 'none';
    document.querySelector('.computer-none').style.display = 'block';
    document.querySelector('.result').style.display = 'none';
    document.querySelector(".heading-result").innerHTML = "You win";
    document.querySelector(".circle1").style.display = "none";
    document.querySelector(".circle2").style.display = "none";
    document.querySelector(".circle3").style.display = "none";
    document.querySelector(".circle1-comp").style.display = "none";
    document.querySelector(".circle2-comp").style.display = "none";
    document.querySelector(".circle3-comp").style.display = "none";

});