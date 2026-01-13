/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
      let Rwidth = parseFloat(document.getElementById("recWidth").value);
      let Rheight = parseFloat(document.getElementById("recHeight").value);

      let result = Rwidth * Rheight

      output.innerHTML = result
}

function recPerimeter(){
      let Rwidth = parseFloat(document.getElementById("recWidth").value);
      let Rheight = parseFloat(document.getElementById("recHeight").value);

      let result = (Rwidth * Rheight) * 2

      output.innerHTML = result
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
      let radius = parseFloat(document.getElementById("radius").value);

      let result = pi * radius ^ 2

      output.innerHTML = result
}

function cirPerimeter(){
      let radius = parseFloat(document.getElementById("radius").value);

      let result = 2 * pi * radius

      output.innerHTML = result
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){
      let SLA = parseFloat(document.getElementById("SLA").value);
      let SLB = parseFloat(document.getElementById("SLB").value);
      let SLC = parseFloat(document.getElementById("SLC").value);

      let result = SLA + SLB + SLC

      output.innerHTML = result
}

function triPerimeter(){
      let base = parseFloat(document.getElementById("base").value);
      let height = parseFloat(document.getElementById("height").value);

      let result = 1/2 * base * height

      output.innerHTML = result
}