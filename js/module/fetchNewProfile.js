import { loadingShow } from "./loading.js";

export default async function fetchNewProfil() {
  loadingShow(true);
  const response = await fetch(`https://randomuser.me/api/?nat=br&results=3`);
  const json = await response.json();
  loadingShow(false);

  return json.results;
}
