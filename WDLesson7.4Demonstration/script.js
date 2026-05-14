let data;
async function startup(){
    let link = "data.json"
    info = await fetch(link);
    data = await info.json();
    let output = document.getElementById("output");
    let build = "";
  for(let i = 0; i < data.length; i += 1){
    let stuff = data[i];
    build += card(stuff);
  }

  output.innerHTML = build 
}