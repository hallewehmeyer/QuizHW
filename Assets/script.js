var querySelector=question
var answers = "answer"

 = {
}

    question: "Strings can contain which of the following characters?",
    a: "numbers only",
    b: "Pictures",
    c: "Pictures of your ex",
    d: "A and B"
    answer: "A and B"
},
    {
    question: "What does DOM stand for?",
    a: "Document Of Margins",
    b:"Domesticated Oceanic Manatee",
    c: "Document Object Model",
    answer: "C",
},
{
      question: "What can jQuery do?",
      a: " Insert, update, removing html",
      b: " Register click or other change events",
      c: " Animatiting HTML events",
      d: " Potentially pick out a decent avocado from the grocery store, not likely though idk its always a gamble",
      e: "A, B, and C"
      answer: "E"
    },
    {
      question: "What does CSS stand for?",
      a: " Crumbling Church Steeples",
      b: " Cryogenic Capsule Site",
      c: " Cascading Style Sheets",
      answer: "C"
    },
    {
      question: "What is Git?",
      a: "A singular dollar",
      b: "An array",
      c: "An organized system for managing code when multiple developers work on one project at a time.",
      answer: "C"
    },
    {
      question: "Variables are known as the _____ of programming.",
      a: " Loops",
      b: " Verbs",
      c: " Nouns",
      answer: "C"
    },
    {
      question: "What can be contained within a Boolean?",
      a: " Numbers",
      b: " Integers",
      c: " One singular seratonin",
      d: " True/False statements"
      answer: "D"
    },
    {
      question: "Which of the following statements are true?",
      a: " All methods are functions, but not all functions are methods.",
      b: " All functions are methods, but all methods are functions.",
      c: " 2020 has been the best year to date.",
      answer: "A"
    },
    {
      question: "What are scopes?",
      a: " Detailed arrays",
      b: " Array of numbers",
      c: " Places that variables live",
      answer: "C"
    },
    {
      question: "HTML stands for ____ ______ _____.",
      a: " Hyperlink Manual Lines ",
      b: " Hypertext Markup Language",
      c: " Hyplerlist Moving Logistics",
      answer: "B"
}
];


$(document).ready(function () {
    
    var countEl = $("#count")
    $("#lower") .click(function(){
        countNum===;
        countEl.text(countNum);
        setInterval(functional();
    })
    if(countNum === 0)
    clearInterval(scheduled)
    
  timeInterval.textContent = "Pack it up chief, test is over.";

}

   


}
 


// this grabs the Id of the timer controls
// var playButton = document.querySelector("#play");
// var stopButton = document.querySelector("#stop");
// // this function starts the time and keeps track of the wrong answers
//   function getFormattedMinutes() {
//     var secondsLeft = totalSeconds - secondsElapsed;

//     var minutesLeft = Math.floor(secondsLeft / 60);

//     var formattedMinutes;

//     if (minutesLeft < 10) {
//       formattedMinutes = "0" + minutesLeft;
//     } else {
//       formattedMinutes = minutesLeft;
//     }
  
//     return formattedMinutes;
//   }

//   function getFormattedSeconds() {
//     var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  
//     var formattedSeconds;
  
//     if (secondsLeft < 10) {
//       formattedSeconds = "0" + secondsLeft;
//     } else {
//       formattedSeconds = secondsLeft;
//     }
  
//     return formattedSeconds;
//   }
  
//   function startTimer (){
//       setTime();
//       if (totalSeconds > 0) {
//         interval = setInterval(function() {
//           secondsElapsed++;
//           renderTime();
//       }, 1000);
//   } else {
//     alert("Minutes of work/rest must be greater than 0.")
//   }
// }

//   function stopTimer() {
//     secondsElapsed = 0;
//     setTime();
//     renderTime();
//   }
  
    

//   }
  // this function renders a question for display on the page
 