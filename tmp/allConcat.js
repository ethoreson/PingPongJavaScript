var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $('#math-operation').submit(function(event) {
    event.preventDefault();
    var x = $('#x').val();
    var sign = $('#sign').val();
    var y = $('#y').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(x, sign, y);
      $('#calculatorSolution').append(output);
  })
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
