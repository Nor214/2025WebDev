// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function Average(){
    let g1 = parseFloat(document.getElementById("grade1").value)
    let g2 = parseFloat(document.getElementById("grade2").value)
    let g3 = parseFloat(document.getElementById("grade3").value)
    let output = document.getElementById("output")

    let result = (g1 + g2 + g3) / 3

    output.innerHTML = result
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function Slope(){
    let x1 = parseFloat(document.getElementById("x1").value)
    let x2 = parseFloat(document.getElementById("x2").value)
    let y1 = parseFloat(document.getElementById("y1").value)
    let y2 = parseFloat(document.getElementById("y2").value)
    let output2 = document.getElementById("output2")

    let result2 = (y1 - y2)/(x1 - x2)

    output2.innerHTML = result2
}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.

function BMI(){
    let weight = parseFloat(document.getElementById("weight").value)
    let height = parseFloat(document.getElementById("height").value)
    let output3 = document.getElementById("output3")

    let result3 = weight / (height * height)

    output3.innerHTML = result3
}