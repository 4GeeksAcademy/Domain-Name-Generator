/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
window.onload = () => {
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("domain").innerHTML = domGenerator();
  });

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = ["es", "com"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          console.log(`${pronoun[i]}${adj[j]} ${noun[k]}${dom[l]}`);
        }
      }
    }
  }
};
