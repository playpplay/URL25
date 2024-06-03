const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");
const select = document.querySelector(".search__select");

button.addEventListener("click", SubmitRequest);

function SubmitRequest(event) {
    event.preventDefault()

const value = input.value;
const searchEngine = select.value;

let params;
if (value) {


if (searchEngine === "google" || searchEngine === "bing") {
    params = "search?q=";
} else if (searchEngine === "yandex") {
    params = "search?text=" ;
}else if (searchEngine === "suckduckgo") {
    params = "?q="
}
window.location.href = `https://www.${searchEngine}.com/${params}` + value;
}
}