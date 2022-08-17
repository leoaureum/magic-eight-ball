var userName = "Isaiah"

if (userName === '') {
    console.log('Hello!');
} else console.log(`Hello, ${userName}`)

let userQuestion = 'Am I getting married?'

console.log(`You asked, ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 7);

let eightBall = '';

switch(randomNumber) {
    case 0:
    eightBall = 'Hell yeah';
    break;
    case 1:
    eightBall = 'Nah fam';
    break;
    case 2:
    eightBall = 'Not sure';
    break;
    case 3:
    eightBall = 'Nah. Good try though';
    break;
    case 4:
    eightBall = 'Looking good!';
    break;
    case 5:
    eightBall = 'Maybe';
    break;
    case 6:
    eightBall = 'I think so';
    break;
    case 7:
    eightBall = 'No chance';
    break;
}

console.log(`The Magic 8 Ball says, ${eightBall} `)






