/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

function BodyMass(){
       let w = parseFloat(document.getElementById("weight").value);
       let h = parseFloat(document.getElementById("height").value);
       let output = document.getElementById("output");
       let filename = ""
       let msg = ""
       let Final = w / h ** 2


       if(Final < 18.5){
              filename = "underweight.png"
              msg = "Underweight"
       } else if(Final >= 18.5 && Final <= 24.9){
              filename = "healthyweight.png"
              msg = "Healthy Weight"
       } else if(Final >= 25 && Final <= 29.9){
              filename = "overweight.png"
              msg = "Overweight"
       } else if(Final >= 30 && Final <= 34.9){
              filename = "obeseweight.png"
              msg = "Obese"
       } else if(Final >= 35){
              filename = "obeseweight.png"
              msg = "Extremely Obese"
       }

       output.innerHTML = `Your BMI is ${msg}. <img src="${filename}">`
}
       


