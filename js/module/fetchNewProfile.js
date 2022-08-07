// import loading from "./loading.js";

export default async function fetchNewProfil() {
  const response = await fetch(`https://randomuser.me/api/?nat=br&results=3`);
  const json = await response.json();

  return json.results;
}
