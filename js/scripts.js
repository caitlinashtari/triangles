//business logic
function Triangle (sideA, sideB, sideC){
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.type = function (){
  if ((this.sideA + this.sideB) <= this.sideC || (this.sideB + this.sideC) <= this.sideA || (this.sideA + this.sideC) <= this.sideB){
    alert("That's not a triangle!");
  } else if (this.sideA === this.sideB && this.sideA === this.sideC){
      return "equilateral";
    } else if (this.sideA === this.sideB && this.sideA !== this.sideC || this.sideA !== this.sideB && this.sideA === this.sideC || this.sideB === this.sideC && this.sideA !== this.sideB){
      return "isosceles";
    } else if (this.sideA !== this.sideB !== this.sideC){
      return "scalene";
    }

}

//user interface logic
$(document).ready(function() {
  $("form#new-length").submit(function(event) {
    event.preventDefault();

    var inputtedSideA = $("input#first-length").val();
    var inputtedSideB = $("input#second-length").val();
    var inputtedSideC = $("input#third-length").val();

    var newTriangle = new Triangle(inputtedSideA, inputtedSideB, inputtedSideC);

    $("ul#triangle").append("<li>" + newTriangle.type() + "</li>")

  });
});
