$(document).ready(function(){
    launchGame();
});

var questions = [    
    {
        title: "How many primitive javascript data types are there?",
        choices: ["3","8","5"],
        correctAnswer: "5",
    },
    {
        title: "What data type is either true or false?" ,
        choices: ["selector" , "Boolean" , "NaN"] ,
        correctAnswer: "Boolean"
    },
    {
        title: "What data type allows for collections?" ,
        choices: ["Object", "String", "Array"],
        correctAnswer:"Object"
    },
    {
        title: "Which of the fallowing is a primitive data type?",
        choices: ["null", "selector", "div"],
        correctAnswer: "null"
    },
    {
        title:"Which is a numeric data type?",
        choices:["5","number","100"],
        correctAnswer:"number"
    },
    {
        title:"What data type automatically assigns to variables?",
        choices:["undefined","object","symbol"],
        correctAnswer:"undefined"
    }
];

function launchGame() {
    var counter = 0,
        total_points = 0,
        number_of_questions = questions.length,
        current_question;

    function updateScore() {
        $(".total_points").text(total_points);
    }

    function presentQuestion(question) {
        $("h2").text(question.title);
        $("ul").empty();
        for(var index = 0; index < question.choices.length; index = index + 1) {
            $("ul").append("<li>" + question.choices[index] +"</li>")          
        }
        current_question = question;
    }

    // 1. Show the 1st question
    presentQuestion(questions[counter]);
    updateScore();

    // 2. User chooses an answer
    $("ul").on("click", "li", chooseAnswer);

    function chooseAnswer() {
        var text = $(this).text();
        checkAnswer(text);
    }

    // 3. Check if correct
    function checkAnswer(text) {
        // Yes? Show message and add points
        if(text === current_question.correctAnswer) {
            alert('Correct!');
            total_points = total_points + 5;
            updateScore();
        }
        // No? Show message
        else {
            alert('Wrong!');
        }

        askNextQuestion();
    }

    function askNextQuestion() {
        counter = counter + 1;
        // 4. More Questions?
        if(counter < number_of_questions) {
        // Yes? Show next question (Go to step 1)
            presentQuestion(questions[counter]);
        }
        // No? Game Over message
        else {
            var confirmation = confirm('Game Over! You earned ' + total_points + ' points. Want to Play Again?');
            if(confirmation) {
                counter = 0;
                total_points = 0;
                updateScore();
                presentQuestion(questions[counter]);
            }
        }
    }
};