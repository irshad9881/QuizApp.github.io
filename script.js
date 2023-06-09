const questions =[
    {
        question:"what is largest animal in the world ?.",
        answer:[
            {text:"Elephant",correct:false},
            {text:"Shark",correct:false},
            {text:"lion",correct:false},
            {text:"Blue whale",correct:true}
        ]
    },
    {
        question:"Which is the smallest country in the world ?.",
        answer:[
            {text:"Vatican City",correct:true},
            {text:"America",correct:false},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false}
        ]
    },
    {
        question:"what is largest desert in the world ?.",
        answer:[
            {text:"Sahara",correct:false},
            {text:"Gobi",correct:false},
            {text:"Antarctica",correct:true},
            {text:"Great Basin",correct:false}
        ]
    },
    {
        question:"what is smallert continent in the world ?.",
        answer:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false}
        ]
    },
    {
        question:"what is largest Ocean in world ?.",
        answer:[
            {text:"Atlantic Ocean",correct:false},
            {text:"Pacific Ocean",correct:true},
            {text:"Indian Ocean",correct:false},
            {text:"Arctic Ocean",correct:false}
        ]
    }
];
const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-button");
const nextButton =document.getElementById("next-btn");
let currQuestionIndex=0;
let score=0;
const startQuiz=()=>{
    currQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
const showQuestion=()=>{
    resetState();
    let currQuesiton=questions[currQuestionIndex];
    let questionNo=currQuestionIndex+1;
    questionElement.innerHTML=questionNo + "." + currQuesiton.question;
     currQuesiton.answer.forEach(ans=>{
        const button=document.createElement("button");
        button.innerHTML=ans.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);//taki ans-button bali div me ans show hosake
        if(ans.correct)
        {
            button.dataset.correct=ans.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
  while(answerButtons.firstChild)//firstChild returns the first child node (an element node, a text node or a comment node)
  {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
      const selecteBtn=e.target;
      const isCorrect=selecteBtn.dataset.correct==="true";
      if(isCorrect)
      {
        selecteBtn.classList.add("correct");
        score=score+2;
      }
      else{
        selecteBtn.classList.add("incorrect");
      }
      Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
      })
      nextButton.style.display="block";
}
function showScore(){
    resetState();
   questionElement.innerHTML=`You scored ${score} out of ${2*questions.length} !`
    nextButton.innerHTML="Start Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currQuestionIndex++;
    if(currQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
};
nextButton.addEventListener("click",()=>{
    if(currQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
}) 
startQuiz();
