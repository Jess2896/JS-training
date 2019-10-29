(function () {
    const Question = function(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers; 
        this.correctAnswer = correctAnswer;
    }
    
    const skyQuestion = new Question('What color is the sky?', ['blue', 'red', 'green'], 0);
    const codingQuestion = new Question('Whats the best programming language?', ['Java', 'C', 'Javascript', 'Python'], 2);
    const variableQuesion = new Question('What kind of variable should you use if you won\'t reassign a new value to it?', ['var', 'let', 'const'], 2);
    const allQuestions = [skyQuestion, codingQuestion, variableQuesion];
    
    let score = 0;
    
    (function display(questions) {
        const random = Math.floor(Math.random() * questions.length);
    
        console.log(questions[random].question);
        displayAnswers(questions[random].answers);
    
        const message = prompt(`${questions[random].question} (Type 'exit' to end the game)`, 'Insert the number of the correct answer');
    
        if (message == 'exit') {
            console.log(`End of the game! Your final score is ${score}`);
        }
        else if (message == questions[random].correctAnswer) {
            score++;
            console.log(`Correct! Your current score is ${score}`);
            display(questions);
        }
        else if (!isNaN(message)) {
            console.log(`Incorrect! Your current score is ${score}`);
            display(questions);
        }
        else {
            console.log('Invalid input');
            display(questions);
        }
    
    })(allQuestions);
    
    function displayAnswers(answers) {
        let count = 0;
        answers.forEach(answer => {
            console.log(`${count} - ${answer}`);
            count++;
        });
    }
})();
