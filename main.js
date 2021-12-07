countryp = document.getElementById("cc");


let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    country_code = this.responseText
      .replace(/(\r\n|\n|\r)/gm, "")
      .split("loc=");
    country_code = country_code[1].split("tls=");
    country_code = country_code[0];

 
    if (country_code == "IN") {
        countryp.innerHTML = `<img src = "images/india.png">`
        console.log(country_code);
    }

    
        
    else if (country_code == "US") {
        countryp.innerHTML = `<img src = "images/united-states.png">`
        console.log(country_code);
    }

   
  }
};

//OPEN HTTP Request
// xhttp.open("GET", "https://www.cloudflare.com/cdn-cgi/trace", true);
// xhttp.send();



// For toggling


const shared = document.getElementById("shared");
const cloud = document.getElementById("cloud");


cloud.addEventListener("click", function () {
  shared.classList.toggle("active");
  cloud.classList.toggle("active");
});

shared.addEventListener("click", function () {
  shared.classList.add("active");
  
  cloud.classList.remove("active");
});


const toggle = document.getElementById('toggle');
const flexy = document.getElementById('flexy');

toggle.addEventListener('change', e => {
	flexy.classList.toggle('show-monthly');
});

