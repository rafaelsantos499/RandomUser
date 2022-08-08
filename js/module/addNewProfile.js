import generateUser from "./GenerateUser.js";

const button = document.querySelector("[data-button='add-new']");

export default function addNewProfile() {
  async function handleClick() {
    await generateUser();
    const scrool = await document.documentElement.scrollHeight;
    await window.scrollBy(0, scrool);
  }

  button.addEventListener("click", handleClick);
}
