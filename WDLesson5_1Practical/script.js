/* Challenge 2: Create the function that will calculate the balance in an account using compound 
interest after t number of years.

Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years 
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $xxxxxx
Year 2: $xxxxxx
Year 3: $xxxxxx
...
Year N: $xxxxxx
*/

function CompoundInterest(){
    let P = parseFloat(document.getElementById("principal").value);
    let R = parseFloat(document.getElementById("interest").value);
    let N = parseFloat(document.getElementById("numbertimes").value);
    let T = parseFloat(document.getElementById("periods").value);
    let output = document.getElementById("output");
    let build = "";
    let APlaceH = P * (1 + R/N)**(N * T)

    for (let T = 0; T < N; T+=1){
        let A = Math.floor(P * (1 + R/N)**(N * T))
        build += `Year ${T}: ${A}<br>`
    }

    output.innerHTML = build

}