let data;
async function startup(){
    let link = "data.json"
    info = await fetch(link);
    data = await info.json();
    let output = document.getElementById("output");
    let build = "";
    for(let i = 0; i < data.length; i+=1){
        let Collision = data[i]
        build += `<div class="card">`
        build +=    `<h2>${Collision.on_street_name}</h2>`
        build +=    `<p>${Collision.off_street_name}</p>`
        build +=    `<hr>`
        build +=    `<p>Vehicle_1 Contributor: ${Collision.contributing_factor_vehicle_1}</p>`
        build +=    `<p>Vehicle_2 Contributor: ${Collision.contributing_factor_vehicle_2}</p>`
        build +=    `<hr>`
        build +=    `<p>Vehicle_1 Type: ${Collision.vehicle_type_code1}</p>`
        build +=    `<p>Vehicle_2 Type: ${Collision.vehicle_type_code1}</p>`
        build += `</div>`
    }

    output.innerHTML = build
}