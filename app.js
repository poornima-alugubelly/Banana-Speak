const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

const getTranslationURL = (input) => `${serverURL}?text=${input}`;

function errorHandler(error) {
  console.log(`Error occured: ${error}`);
  alert("something wrong with server! try again after some time");
};

function clickHandler(){
  const inputText = txtInput.value;
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // output
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);
