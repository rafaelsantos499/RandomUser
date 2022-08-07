import generateUser from "./GenerateUser.js";

const button = document.querySelector("[data-button='add-new']");
const heigtDiv = document.body.scrollHeight;

console.log(heigtDiv.scrollTop);
export default function addNewProfile() {
  function handleClick() {
    generateUser();
    window.scrollTo(0, heigtDiv);
  }

  button.addEventListener("click", handleClick);
}
