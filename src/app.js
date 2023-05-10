/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("dom").innerHTML = donGenerator();
  });

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var dom = [".com", ".es", ".it"];

  let donGenerator = function(pronoun, adj, noun, dom) {
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < dom.length; l++) {
            console.log(`${pronoun[i]} ${adj[j]} ${noun[k]} ${dom[l]}`);
          }
        }
      }
    }
  };

  donGenerator(pronoun, adj, noun, dom);
};
