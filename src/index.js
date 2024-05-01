function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ffd0476037477o1aaf0edt7b024c3d03";
  let context =
    "You are a philosophical poem expert and love to write short poems. Your mission is to generate a 4 line poem provided in HTML format, separate each line with < /br>. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'by PoemeD' after the poem, at the bottom. Add a <strong> element to the signature and display it after the poem and separate the signature with a <br />.";
  let prompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a thoughtful poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement = addEventListener("submit", generatePoem);
