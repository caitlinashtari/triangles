//business logic
function triangle (input1, input2, input3){
  this.sideA = input1;
  this.sideB = input2;
  this.sideC = input3;
}

if (input1 === input2 && input1 === input3){
  return "equilateral";
} else if (input1 === input2 && input1 !== input3 || input1 !== input2 && input1 === input3 || input2 === input3 && input1 !== input2){
  return "isosceles";
} else if (input1 !== input2 !== input3){
  return "scalene";
}

//user interface logic
$(document).ready(function() {
  $("form#new-length").submit(function(event) {
    event.preventDefault();

    var inputtedSideA = $("input#first-length").val();
    var inputtedSideB = $("input#second-length").val();
    var inputtedSideC = $("input#third-length").val();


  });
});
