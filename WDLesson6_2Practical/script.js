function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361",
  }
  let output = document.getElementById("output");
  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = `
    <div class="card">
      <h2>${school.name}</h2>
      <img src="${school.image}">
      <p>${school.address}</p>
    </div>
  `
  output.innerHTML = build
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information
  let artist = {
    "name":"Bruno Mars",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81ohF7mVUxu_iFxHhB3-SXlMhLIaLsoXxDKhzHu9Ab-Ji-mySZLGHe4C7Mbg_NYWFqq6q3x5bHuqrYWq29wBvy5RY1OhSDEv04zee0A&s=10",
    "album":"https://upload.wikimedia.org/wikipedia/en/b/b8/Bruno_Mars_-_The_Romantic.png",
    "url":"https://en.wikipedia.org/wiki/Bruno_Mars"
  }
  let output = document.getElementById("output");
  //Challenge 3: Build a card for the information in the JSON.  Make the image a hyperlink to the url provided.
  let build2 = `
    <div class="card">
      <h2>${artist.name}</h2>
      <img src="${artist.image}">
      <img src="${artist.album}">
      <a href="${artist.url}">link</a>
    </div>
  `

  output.innerHTML = build2
}


