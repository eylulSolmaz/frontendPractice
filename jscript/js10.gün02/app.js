const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

function countVowel() {
  let vowelCount = 0;
  let wordVal = word.value.toLocaleLowerCase("tr");

  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,ı,i,o,ö,u,ü])/)) vowelCount++;
  }

  result.innerHTML = `${word.value.toUpperCase()} kelimesi ${vowelCount} ünlü harf içeriyor.`;
}

btn.addEventListener("click", countVowel);
