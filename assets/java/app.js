$(document).ready(function(){
  var quest = {
    timer: 15,
    counter: 0,
    correctAns: 0,
    incorrectAns: 0,
    unAns: 0,
    answer: ['North America','7'],
    q1: {
      question: "Which continent do we live in?",
      choices: ["USA", "South America","North America", "United States of America"]
    },
    q2: {
      question: "How many continents are there?",
      choices: ["5", "6","8", "7"]
    },

    
    intialScreen: function(){
      $('#question').empty();
      $('#choices').empty();
      var $a = $("<button>");
      $a.addClass('startButton')
      $a.text("Start");
      $("#timer").html($a);
    },
    
    startTimer: function(){
      quest.resetTimer();
      counter = setTimeout(quest.count, 1000);
    },
    
    count: function(){
      quest.timer--;
      $('#timer').html('<h2>Time Remaining: '+ quest.timer + ' seconds</h2>');
      if (quest.timer<0){
        quest.unAns++;
        quest.resetTimer();
      }
    },

    checkAns: function(x){
      var incorrect = true;
      for(i=0;i<quest.answer.length;i++){
        if (x===quest.answer[i]){
          quest.correctAns++;
          incorrect = false;
        }
      }
      if (incorrect === true){
        quest.incorrectAns++;
      }
      quest.resetTimer();
      console.log(quest.correctAns, quest.incorrectAns);
    },
    
    question1: function(){
      quest.startTimer();
      $('#question').html('<h1>'+ quest.q1.question + '</h1>')
          
      var $a = $("<button>");
      var $b = $("<button>");
      var $c = $("<button>");
      var $d = $("<button>");

      $a.text(quest.q1.choices[0]);
      $('#choice1').html($a);
      
      $b.text(quest.q1.choices[1]);
      $('#choice2').html($b);
      
      $c.text(quest.q1.choices[2]);
      $('#choice3').html($c);
      
      $d.text(quest.q1.choices[3]);
      $('#choice4').html($d);
      
      
      $('#choice1').on('click', function(){
        quest.checkAns($(this).text());
        quest.question2();
      });
      $('#choice2').on('click', function(){
        quest.checkAns($(this).text());
        quest.question2();
      });
      $('#choice3').on('click', function(){
        quest.checkAns($(this).text());
        quest.question2();
      });
      $('#choice4').on('click', function(){
        quest.checkAns($(this).text());
        quest.question2();
      });

    },

    question2: function(){
      quest.startTimer();
      $('#question').html('<h1>'+ quest.q2.question + '</h1>')
          
      var $a = $("<button>");
      var $b = $("<button>");
      var $c = $("<button>");
      var $d = $("<button>");

      $a.text(quest.q2.choices[0]);
      $('#choice1').html($a);
      
      $b.text(quest.q2.choices[1]);
      $('#choice2').html($b);
      
      $c.text(quest.q2.choices[2]);
      $('#choice3').html($c);
      
      $d.text(quest.q2.choices[3]);
      $('#choice4').html($d);
      
      
      $('#choice1').on('click', function(){
        quest.checkAns($(this).text());
        quest.question2();
      });
      $('#choice2').on('click', function(){
        quest.checkAns($(this).text());
        quest.question2();
      });
      $('#choice3').on('click', function(){
        quest.checkAns($(this).text());
        quest.question2();
      });
      $('#choice4').on('click', function(){
        quest.checkAns($(this).text());
        quest.question2();
      });

    },



    startPressed: function(){
      $(".startButton").on('click', function(){
        quest.resetTimer();
        quest.question1();
      });
    },

    resetTimer: function(){
      timer = 15;
      counter = 0;
      $('#timer').html('<h2>Time Remaining: 15 seconds</h2>');

    }
  }
  
  quest.intialScreen();
  quest.startPressed();

});
  

