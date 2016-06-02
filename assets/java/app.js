$(document).ready(function(){
  var quest = {
    timer: 15;

    q1: {
      question: "Which continent do we live in?",
      answer: "North America",
      choices: ["USA", "South America","North America", "United States of America"]
    },
    intialScreen: function(){
      $('#question').empty();
      $('#choices').empty();
      var $a = $("<button>");
      $a.addClass('startButton')
      $a.text("Start");
      $("#timer").html($a);
    },
    startPressed: function(){
      $(".startButton").on('click', function(){

      
        $('#question').html('<h1>', quest.q1.question, '</h1>')
        for(i=0;i<4;i++){
          var $a = $("<button>");
          $a.text(quest.q1.choices[i]);
          $('#choices').append($a, '<br/>', '<br/>');
        }
      });
    },
    reset: function(){
      timer = 15;
    }
  }
  
  quest.intialScreen();
  quest.startPressed();

});
  
  // $(".startButton").on('click', function(){

    

  //   $('#question').html('<h1>' + quest.q1.question + '</h1>')
  //   for(i=0;i<4;i++){

  //     var resJSON = JSON.stringify(quest.q1.choices[i]);

  //     var $a = $("<button>");
  //     $a.text(resJSON);
  //     $('#choices').append($a + '<br/><br/>');
  //   }
//   });
// });
