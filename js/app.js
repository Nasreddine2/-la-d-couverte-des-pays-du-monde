const inp_con = document.querySelector(".inp_con");
const btn_rech = document.querySelector(".scroll-link");
const box_model = document.querySelector(".right-banner-content");
const box_bef_mdl = document.querySelector(".col-md-4");
const link_clear = document.querySelector(".link_clear");
const country = document.querySelector(".country");

btn_rech.addEventListener("click", function () {
  box_model.classList.add("closed");

  const renderContry = function (data, className = "") {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} M</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    <a href="" class="link_clear">clear</a>
    
  </article>`;

    box_bef_mdl.insertAdjacentHTML("beforeend", html);
  };

  const getcontryAndNeighbour = function (country) {
    //ajax call contry 1
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v2/name/${country}`);
    request.send();

    // console.log(request.responseText);
    request.addEventListener("load", function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      //render contry1

      renderContry(data);
    });
  };

  getcontryAndNeighbour(inp_con.value);
  console.log(inp_con.value);
});
