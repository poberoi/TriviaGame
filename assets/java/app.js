$(document).ready(function(){
  var questions = [
    {
      question: "Which continent do we live in?",
      choices: ["USA", "South America","North America", "United States of America"]
    },
    {
      question: "How many continents are there?",
      choices: ["5", "6","8", "7"]
    },
    {
      question: "Which continent contains the world's largest desert?",
      choices: ["Europe", "Africa","Asia", "South America"]
    },
    {
      question: "Which is the smallest continent?",
      choices: ["Australia", "Asia","Europe", "South America"]
    },
    {
      question: "Which of Africa's rivers is the longest?",
      choices: ["Blue Nile River", "White Nile River","Nile River", "Congo River"]
    },
    {
      question: "Which of the following is located in Antarctica?",
      choices: ["Iceland", "Ross Ice Shelf","Arctic Circle", "Mt. Everest"]
    }
    ];
  var answers = ["North America", "7", "Africa", "Australia", "Nile River", "Ross Ice Shelf"];
  
  var initialScreen = function(){
      $('#question').empty();
      $('#choices').empty();
      var $a = $("<button>");
      $a.addClass('startButton')
      $a.text("Start");
      $("#timer").html($a);
    };
  
  var resetTimer = function(){
      clearInterval(counter);
      timer = 15;
      $('#timer').html('<h2>Time Remaining: 15 seconds</h2>');
      startTimer();
    };
  
  var startTimer = function(){
      counter = setInterval(count, 1000);
    };
    
  var count = function(){
      timer--;
      $('#timer').html('<h2>Time Remaining: '+ timer + ' seconds</h2>');
      if (timer<0){
        unAns++;
        console.log(unAns);
        resetTimer();
      }
    };
  var checkAns = function(){
    $("button").on('click', function(){
      var checkAnswer= $(this).data('value');
      var incorrect = true;
      for(i=0;i<answers.length;i++){
        if (checkAnswer === answers[i]){
          correctAns++;
          incorrect = false;
        }
      }
      if (incorrect === true){
        incorrectAns++;
      }
      
      nextQuestion++;
      if (nextQuestion === 1){
        writeQuestion2();
      }

      resetTimer();
      console.log(correctAns,incorrectAns);
    });
  };
  var writeQuestion1 = function(){
    $('#question').html('<h1>'+ questions[0].question + '</h1>')
    var $a = $("<button>");
    var $b = $("<button>");
    var $c = $("<button>");
    var $d = $("<button>");

    $a.text(questions[0].choices[0]);
    $a.attr('data-value',questions[0].choices[0]);
    $('#choice1').html($a);
    
    $b.text(questions[0].choices[1]);
    $b.attr('data-value',questions[0].choices[1]);
    $('#choice2').html($b);
    
    $c.text(questions[0].choices[2]);
    $c.attr('data-value',questions[0].choices[2]);
    $('#choice3').html($c);
    
    $d.text(questions[0].choices[3]);
    $d.attr('data-value',questions[0].choices[3]);
    $('#choice4').html($d);
    checkAns();
    
    
  };
  var writeQuestion2 = function(){
    $('#question').html('<h1>'+ questions[1].question + '</h1>')
    var $a = $("<button>");
    var $b = $("<button>");
    var $c = $("<button>");
    var $d = $("<button>");

    $a.text(questions[1].choices[0]);
    $a.attr('data-value',questions[1].choices[0]);
    $('#choice1').html($a);
    
    $b.text(questions[1].choices[1]);
    $b.attr('data-value',questions[1].choices[1]);
    $('#choice2').html($b);
    
    $c.text(questions[1].choices[2]);
    $c.attr('data-value',questions[1].choices[2]);
    $('#choice3').html($c);
    
    $d.text(questions[1].choices[3]);
    $d.attr('data-value',questions[1].choices[3]);
    $('#choice4').html($d);
    checkAns();
  };

  var timer = 15;
  var counter = 0;
  var correctAns = 0;
  var incorrectAns = 0;
  var unAns = 0;
  var nextQuestion = 0;
    
  initialScreen();
  $(".startButton").on('click', function(){
    resetTimer();
    writeQuestion1();
    console.log(nextQuestion);
  });

  
  
});


// $(document).ready(function(){
//   var quest = {
//     timer: 15,
//     counter: 0,
//     correctAns: 0,
//     incorrectAns: 0,
//     unAns: 0,
//     answer: ['North America','7'],
//     q1: {
//       question: "Which continent do we live in?",
//       choices: ["USA", "South America","North America", "United States of America"]
//     },
//     q2: {
//       question: "How many continents are there?",
//       choices: ["5", "6","8", "7"]
//     },

    
//     intialScreen: function(){
//       $('#question').empty();
//       $('#choices').empty();
//       var $a = $("<button>");
//       $a.addClass('startButton')
//       $a.text("Start");
//       $("#timer").html($a);
//     },
    
//     startTimer: function(){
//       quest.resetTimer();
//       counter = setInterval(quest.count, 1000);
//     },
    
//     count: function(){
//       quest.timer--;
//       $('#timer').html('<h2>Time Remaining: '+ quest.timer + ' seconds</h2>');
//       if (quest.timer<0){
//         quest.unAns++;
//         quest.resetTimer();
//       }
//     },

//     checkAns: function(x){
//       console.log(x);
//       var incorrect = true;
//       for(i=0;i<quest.answer.length;i++){
//         if (x === quest.answer[i] ){
//           quest.correctAns++;
//           incorrect = false;
//         }
//         console.log("checkAns method inside for loop");
//       }
//       if (incorrect === true){
//         quest.incorrectAns++;
//       }
//       clearInterval(counter);
//       quest.resetTimer();
//       console.log(quest.correctAns, quest.incorrectAns);
//     },
    
//     question1: function(){
//       quest.startTimer();
//       $('#question').html('<h1>'+ quest.q1.question + '</h1>')
          
//       var $a = $("<button>");
//       var $b = $("<button>");
//       var $c = $("<button>");
//       var $d = $("<button>");

//       $a.text(quest.q1.choices[0]);
//       $('#choice1').html($a);
      
//       $b.text(quest.q1.choices[1]);
//       $('#choice2').html($b);
      
//       $c.text(quest.q1.choices[2]);
//       $('#choice3').html($c);
      
//       $d.text(quest.q1.choices[3]);
//       $('#choice4').html($d);
      
      
//       $('#choice1').on('click', function(){
//         // console.log('choice1');
//         quest.checkAns($(this).text());
//         quest.question2();
//       });
//       $('#choice2').on('click', function(){
//         // console.log('choice2');
//         quest.checkAns($(this).text());
//         quest.question2();
//       });
//       $('#choice3').on('click', function(){
//         // console.log('choice3');
//         // console.log(this);
//         // console.log(quest);
//         // console.log("Clicked");
//         quest.checkAns($(this).text());
//         quest.question2();
//       });
//       $('#choice4').on('click', function(){
//         // console.log('choice4');
//         quest.checkAns($(this).text());
//         quest.question2();
//       });
//       console.log(quest.timer);
//       if (quest.timer === 0){
//         unAns++;
//         console.log(unAns);
//         quest.question2();
//       }
      

//     },

//     question2: function(){
//       $('button').off('click');
//       quest.startTimer();
//       $('#question').html('<h1>'+ quest.q2.question + '</h1>')
          
//       var $a = $("<button>");
//       var $b = $("<button>");
//       var $c = $("<button>");
//       var $d = $("<button>");

//       $a.text(quest.q2.choices[0]);
//       $('#choice1').html($a);
      
//       $b.text(quest.q2.choices[1]);
//       $('#choice2').html($b);
      
//       $c.text(quest.q2.choices[2]);
//       $('#choice3').html($c);
      
//       $d.text(quest.q2.choices[3]);
//       $('#choice4').html($d);
      
      
//       // $('#choice1').on('click', function(){
//       //   // quest.checkAns($(this).text());
//       //   // quest.question2();
//       //   console.log('choice1');
//       // });
//       // $('#choice2').on('click', function(){
//       //   // quest.checkAns($(this).text());
//       //   // quest.question2();
//       //   console.log('choice2');
//       // });
//       // $('#choice3').on('click', function(){
//       //   // quest.checkAns($(this).text());
//       //   // quest.question2();
//       //   console.log('choice3');
//       // });
//       // $('#choice4').on('click', function(){
//       //   console.log('choice4');
//       //   // quest.checkAns($(this).text());
//       //   // quest.question2();
//       // });

//     },



//     startPressed: function(){
//       $(".startButton").on('click', function(){
//         quest.resetTimer();
//         quest.question1();
//       });
//     },

//     resetTimer: function(){
//       quest.timer = 15;
//       $('#timer').html('<h2>Time Remaining: 15 seconds</h2>');

//     }
//   }
  
//   quest.intialScreen();
//   quest.startPressed();

// });
  

