//Rock, Paper, Scissor

function rpsPlay(choice) {
    //console.log(choice);
    let userChoice = choice.id;
    //console.log(userChoice);
    let botChoice = Math.floor(Math.random() * 3);
    //console.log(botChoice);
    result = winner(userChoice, botChoice);
    //console.log(result);
    document.getElementById('flexbox-image-container').remove();
    var div = document.createElement('div');
    div.setAttribute('class', 'flexbox-container');
    div.setAttribute('id', 'flexbox-image-container');
    document.getElementById('container-id').appendChild(div);
    var image = document.createElement('img');
    if (userChoice === 'rock') {
        image.src = "assets/rock.jpg";
        image.alt = "Rock";
    } else if (userChoice === 'paper') {
        image.src = "assets/paper.jpg";
        image.alt = "Paper";
    } else if (userChoice === 'scissor') {
        image.src = "assets/scissor.jpg";
        image.alt = "Scissor";
    }
    image.style.boxShadow = "5px 10px 18px #88CDF6";
    document.getElementById('flexbox-image-container').appendChild(image);
    
    var h2 = document.createElement('h2');
    h2.setAttribute('id', 'msg');
    var textResult = document.createTextNode(result.text);
    h2.appendChild(textResult);
    h2.style.padding = "2.5rem";
    h2.style.margin = "2rem";
    h2.style.backgroundColor = "#FBFBFB";
    if (result.colour === 'blue') {
        h2.style.color = "#0B60A9";
    } else if (result.colour === 'red') {
        h2.style.color = "#B81C17";
    } else if (result.colour === 'green') {
        h2.style.color = "#165E16";
    }
    
    document.getElementById('flexbox-image-container').appendChild(h2);

    var image = document.createElement('img');
    if (botChoice === 0) {
        image.src = "assets/rock.jpg";
        image.alt = "Rock";
    } else if (botChoice === 1) {
        image.src = "assets/paper.jpg";
        image.alt = "Paper";
    } else if (botChoice === 2) {
        image.src = "assets/scissor.jpg";
        image.alt = "Scissor";
    }
    image.style.boxShadow = "5px 10px 18px #B71C1C";
    document.getElementById('flexbox-image-container').appendChild(image);


}

function winner(userChoice, botChoice) {
    let message = {text: '', colour: ''};
    botChoiceArray = ['rock', 'paper', 'scissor'];
    if (botChoiceArray[botChoice] === userChoice) {
        message.text = 'Tied!';
        message.colour = 'green';
    } else if (botChoiceArray[botChoice] === 'rock' && userChoice === 'paper') {
        message.text = 'User Wins!';
        message.colour = 'blue';
    } else if (botChoiceArray[botChoice] === 'rock' && userChoice === 'scissor') {
        message.text = 'Bot Wins!';
        message.colour = 'red';
    } else if (botChoiceArray[botChoice] === 'paper' && userChoice === 'rock') {
        message.text = 'Bot Wins!';
        message.colour = 'red';
    } else if (botChoiceArray[botChoice] === 'paper' && userChoice === 'scissor') {
        message.text = 'User Wins!';
        message.colour = 'blue';
    } else if (botChoiceArray[botChoice] === 'scissor' && userChoice === 'rock') {
        message.text = 'User Wins!';
        message.colour = 'blue';
    } else if (botChoiceArray[botChoice] === 'scissor' && userChoice === 'paper') {
        message.text = 'Bot Wins!';
        message.colour = 'red';
    }
    return message;
}