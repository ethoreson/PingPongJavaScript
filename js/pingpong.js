function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};
// 
// Calculator.prototype.operation = function(xx, sign, yy) {
//   var x = parseInt(xx);
//   var y parseInt(yy);
//   if (sign === "+") {
//     return (x + y);
//   } else if (sign === "-") {
//     return (x - y);
//   } else if (sign === "*") {
//     return (x * y);
//   } else {
//     return (x / y);
//   }
// }


exports.calculatorModule = Calculator;
