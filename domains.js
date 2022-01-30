const getDomain = document.getElementById("getdomain");
const inputValue = document.getElementById("domain");
const available = document.querySelector(".available");
const dcontainer = document.querySelector(".dcontainer")
const InputDname = document.querySelector(".d-name")
const dAvail = document.querySelector(".d-avail")
const dUnAvail = document.querySelector(".d-unavail")


let domainName = "";

getDomain.addEventListener("click", () => {
  domainName = inputValue.elements[0].value;

  console.log(domainName);
});

function loadData() {
  var xhttp = new XMLHttpRequest();
  let apiRes;
  let apiData;

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.response);
      apiRes = JSON.parse(this.response);
      console.log(apiRes);

      apiData = apiRes.WhoisRecord.domainAvailability;
      console.log(apiData);

      if (apiData == "UNAVAILABLE") {
        dcontainer.classList.remove("hidden")
        dUnAvail.classList.remove("hidden")
        dAvail.classList.add("hidden")

        InputDname.innerHTML = `${domainName} is already registered. Try another domain name!!`;
      }

      else if(apiData == "AVAILABLE"){
        dcontainer.classList.remove("hidden")
        dAvail.classList.remove("hidden")
        dUnAvail.classList.add("hidden")

        InputDname.innerHTML = `${domainName} is available to register. Get It Now `;

      }
    }
  };

  xhttp.open(
    "GET",
    `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_eggyyzHibsEgWkBwWmj6OeyglHXlW&domainName=${domainName}&outputFormat=JSON&da=1`
  );
  xhttp.send();
}

getDomain.addEventListener("click", loadData);
