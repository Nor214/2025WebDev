/* Challenge 2: Complete the init() function so that you build HTML output as per the wireframe diagram image.
Notes:
1) Images
   a. Titles and Pizza are both images stored in the images folder.
   b. When creating the images give each a class of either "title" or "pizza" respectively
   c. Each image has been conveniently labeled with a number at the end in order to use a 
      loop to retrieve the images.
2) Create an appropriate random price to display for each pizza
3) Enter quantity is a text input
4) Buy is a button input

Now that you have the template, use a for loop to produce all five pizza cards.
*/ 

// Go to style.css for Challenge 3

//init() function is called when the page loads in index.html
function init(){
   output = document.getElementById("output")
   let build = ""

   for(let i = 1; i <= 5; i += 1){
      build += `<div class="card container">`
      build += `  <img class="title" src="images/title${i}.png">`
      build += `  <img class="pizza" src="images/pizza${i}.jpg">`
      build += `  <input type="text" placeholder="Quantity">`
      build += `  <input type="button" value ="Buy">`
      build += `</div>`
      build += `<div id="cost">$${(Math.random() * 20).toFixed(2)}</div>`
      output.innerHTML = build
   }
}

