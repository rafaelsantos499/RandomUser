import fetchNewProfil from "./fetchNewProfile.js";
import initViewProfile from "./initViewProfileModal.js";

export default async function generateUser() {
  const containerCard = document.querySelector("[data-card='add-cards']");

  const date = await fetchNewProfil();

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

  initViewProfile();
}
