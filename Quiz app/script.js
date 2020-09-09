const quizData = [
    {
        question: 'how old is Daniel?',
        a: '10',
        b: '17',
        c: '26',
        d: '60',
        answer: 'c'
    }, {
        question: "What is Daniel's favourite movie?",
        a: 'Load of Rings',
        b: 'Harry Potter',
        c: 'Lion King',
        d: 'Hello Daddy',
        answer: 'b'
    }, {
        question: "How are you?",
        a: 'I am good',
        b: 'I am sad',
        c: 'I am hungry',
        d: 'I am angry',
        answer: 'd'
    }
]

let currentQuestion = 0;
let correctAnswers = 0;

const question = document.querySelector('#question_desc');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitButton = document.querySelector('#submit');

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    question.innerHTML = currentQuizData.question;
    a_text.innerText =  currentQuizData.a;
    b_text.innerText =  currentQuizData.b;
    c_text.innerText =  currentQuizData.c;
    d_text.innerText =  currentQuizData.d;

    
}


function getSelected() {
    const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;
    console.log(answerEls);

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
            answerEl.checked = false;
            if(answer === quizData[currentQuestion].answer) {
                correctAnswers++;
            }
        }
    })
    return answer;
}

submitButton.addEventListener('click', ()=>{
    
    const answer = getSelected();
    if(answer) {
        currentQuestion++;
        if(currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            alert(`you are done!. Your total score is ${correctAnswers}`);
            currentQuestion = 0;
            loadQuiz();
        }   
        
    } else {
        alert('Please select your answer');
    }
})
