let data;
async function startup(){
    let link = "data.json"
    info = await fetch(link);
    data = await info.json();
    let output = document.getElementById("output");
    let build = "";
    for(let i = 0; i < data.length; i+=1){
        let Collision = data[i]
        build += `<div class="card line">`
        build +=    `<h2>${Collision.on_street_name}</h2>`
        build +=    `<h3>${Collision.borough}</h3>`
        build +=    `<p>${Collision.off_street_name}</p>`
        build +=    `<hr>`
        build +=    `<p>Vehicle_1 Contributor: ${Collision.contributing_factor_vehicle_1}</p>`
        build +=    `<p>Vehicle_2 Contributor: ${Collision.contributing_factor_vehicle_2}</p>`
        build +=    `<hr>`
        build +=    `<p>Vehicle_1 Type: ${Collision.vehicle_type_code1}</p>`
        build +=    `<p>Vehicle_2 Type: ${Collision.vehicle_type_code2}</p>`
        build +=    `<hr>`
        build +=    `<p>Total People Injured: ${Collision.number_of_persons_injured}</p>`
        build +=    `<p>Total People Killed: ${Collision.number_of_persons_killed}</p>`
        build +=    `<hr>`
        build +=    `<p>Date: ${Collision.crash_date}</p>`
        build +=    `<p>Time: ${Collision.crash_time}</p>`
        build += `</div>`
    }

    output.innerHTML = build
}

function SearchByStreet(){
    let Street = document.getElementById("Street").value;
    let output = document.getElementById("output");
    let build = "";

    for(let i = 0; i < data.length; i+=1){
        let Collision = data[i]
        if(Collision.on_street_name == Street){
            build += `<div class="card line">`
            build +=    `<h2>${Collision.on_street_name}</h2>`
            build +=    `<h3>${Collision.borough}</h3>`
            build +=    `<p>${Collision.off_street_name}</p>`
            build +=    `<hr>`
            build +=    `<p>Vehicle_1 Contributor: ${Collision.contributing_factor_vehicle_1}</p>`
            build +=    `<p>Vehicle_2 Contributor: ${Collision.contributing_factor_vehicle_2}</p>`
            build +=    `<hr>`
            build +=    `<p>Vehicle_1 Type: ${Collision.vehicle_type_code1}</p>`
            build +=    `<p>Vehicle_2 Type: ${Collision.vehicle_type_code2}</p>`
            build +=    `<hr>`
            build +=    `<p>Total People Injured: ${Collision.number_of_persons_injured}</p>`
            build +=    `<p>Total People Killed: ${Collision.number_of_persons_killed}</p>`
            build +=    `<hr>`
            build +=    `<p>Date: ${Collision.crash_date}</p>`
            build +=    `<p>Time: ${Collision.crash_time}</p>`
            build += `</div>`
            }
    }

    output.innerHTML = build
}

function SearchByVehicle(){
    let Vehicle = document.getElementById("Vehicle").value;
    let output = document.getElementById("output");
    let build = "";

    for(let i = 0; i < data.length; i+=1){
        let Collision = data[i]
        if(Collision.vehicle_type_code1 == Vehicle || Collision.vehicle_type_code2 == Vehicle){
            build += `<div class="card line">`
            build +=    `<h2>${Collision.on_street_name}</h2>`
            build +=    `<h3>${Collision.borough}</h3>`
            build +=    `<p>${Collision.off_street_name}</p>`
            build +=    `<hr>`
            build +=    `<p>Vehicle_1 Contributor: ${Collision.contributing_factor_vehicle_1}</p>`
            build +=    `<p>Vehicle_2 Contributor: ${Collision.contributing_factor_vehicle_2}</p>`
            build +=    `<hr>`
            build +=    `<p>Vehicle_1 Type: ${Collision.vehicle_type_code1}</p>`
            build +=    `<p>Vehicle_2 Type: ${Collision.vehicle_type_code2}</p>`
            build +=    `<hr>`
            build +=    `<p>Total People Injured: ${Collision.number_of_persons_injured}</p>`
            build +=    `<p>Total People Killed: ${Collision.number_of_persons_killed}</p>`
            build +=    `<hr>`
            build +=    `<p>Date: ${Collision.crash_date}</p>`
            build +=    `<p>Time: ${Collision.crash_time}</p>`
            build += `</div>`
            }
    }

    output.innerHTML = build
}

function SearchByBorough(){
    let Borough = document.getElementById("Borough").value;
    let output = document.getElementById("output");
    let build = "";

    for(let i = 0; i < data.length; i+=1){
        let Collision = data[i]
        if(Collision.borough == Borough){
            build += `<div class="card line">`
            build +=    `<h2>${Collision.on_street_name}</h2>`
            build +=    `<h3>${Collision.borough}</h3>`
            build +=    `<p>${Collision.off_street_name}</p>`
            build +=    `<hr>`
            build +=    `<p>Vehicle_1 Contributor: ${Collision.contributing_factor_vehicle_1}</p>`
            build +=    `<p>Vehicle_2 Contributor: ${Collision.contributing_factor_vehicle_2}</p>`
            build +=    `<hr>`
            build +=    `<p>Vehicle_1 Type: ${Collision.vehicle_type_code1}</p>`
            build +=    `<p>Vehicle_2 Type: ${Collision.vehicle_type_code2}</p>`
            build +=    `<hr>`
            build +=    `<p>Total People Injured: ${Collision.number_of_persons_injured}</p>`
            build +=    `<p>Total People Killed: ${Collision.number_of_persons_killed}</p>`
            build +=    `<hr>`
            build +=    `<p>Date: ${Collision.crash_date}</p>`
            build +=    `<p>Time: ${Collision.crash_time}</p>`
            build += `</div>`
            }
    }

    output.innerHTML = build
}

