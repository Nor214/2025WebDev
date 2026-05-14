function card(info){
    build = `<div class="card line">
              <h2>${info.on_street_name}</h2>
              <h4>${info.off_street_name}</h2>
              <hr>
              <h3>${info.crash_time}</h3>
              <h3>${info.crash_date}</h3>
              <hr>
              <p>${info.number_of_persons_injured}</p>
              <p>${info.number_of_persons_killed}</p>
           </div>`;
    return build
}