export default function initViewProfileModal() {
  const cards = document.querySelectorAll(".card");
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
