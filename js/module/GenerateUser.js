import fetchNewProfil from "./fetchNewProfile.js";

export default async function generateUser() {
  const containerCard = document.querySelector("[data-card='add-cards']");

  const date = await fetchNewProfil();

  const newdate = [];

  const teste = await JSON.parse(JSON.stringify(date));
  newdate.push(teste);

  console.log(newdate);

  containerCard.innerHTML += date.reduce((acumulate, user) => {
    acumulate += `
          <li class="card  " >
          <div class="card-content">
          <div class="gender">
          <img src="./asset/${user.gender}.svg" alt="${user.gender}" />
        </div>
        <div class="date">
         <p class="email">${user.email}</p>
         <p class="city">${user.location.city}</p>
         <p class="country">${user.location.country}</p>
         <p class="twitter">@${user.login.username}</p>
        </div>
            <div class="img_profile">
              <span class="circle-image">
                <img class="img"
                  src="${user.picture.large}"
                  alt="${user.name.first} ${user.name.last}"
                />
              </span>
            </div>
            <div class="info">
              <p id="name">${user.name.first} ${user.name.last} </p>
              <p>${user.registered.date}</p>
              <p class="phone">${user.cell}</p>
  
              <button>View Profile</button>
            </div>
          </div>
        </li>
              `;

    return acumulate;
  }, "");

  const cards = await document.querySelectorAll(".card");
  const modal = document.querySelector(".modal");
  const backgound = document.querySelector(".background");

  cards.forEach((user) => {
    user.addEventListener("click", () => {
      const email = user.querySelector(".email").innerText;
      const city = user.querySelector(".city").innerText;
      const country = user.querySelector(".country").innerText;
      const twitter = user.querySelector(".twitter").innerText;
      const image = user.querySelector(".img").src;
      const name = user.querySelector("#name").innerText;
      const phone = user.querySelector(".phone").innerText;

      console.log(backgound.ariaCurrent);

      backgound.innerHTML = `
        <div class="modal_content">
        <div class="header_modal">
          <div class="img_profile_modal">
            <span class="circle-image">
              <img
                src="${image}"
                alt="${name}"
              />
            </span>
          </div>
          <p>${name}</p>
          <h3>${city},${country}</h3>
        </div>
        <div class="modal_info">
          <div class="modal_date">
            <span>E-mail:</span>
            <p class="email">${email}</p>
            <span>Phone:</span>
            <p class="phone">${phone}</p>  
            <span>Twitter:</span>          
            <p class="twitter">${twitter}</p>            
          </div>
        </div>
      </div>`;

      modal.classList.add("active");
    });
  });

  function closehandle(event) {
    if (event.target === backgound) modal.classList.remove("active");
  }

  backgound.addEventListener("click", closehandle);
}
