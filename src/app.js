/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = nombreDominio();
  });
};

let nombreDominio = () => {
  let pronoun = ["el", "la", "nuestro"];
  let adj = ["oscuro", "soleado", "valiente", "anciano"];
  let noun = ["love", "tik", "tok", "ibai", "mercadona"];

  let names = [
    "luna",
    "estrella",
    "car",
    "messi",
    "sandia",
    "melon",
    "isla",
    "agua"
  ];
  let domains = [".es", ".com", ".eu", ".org", ".net", ".info"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let namesIndex = Math.floor(Math.random() * names.length);
  let domainsIndex = Math.floor(Math.random() * domains.length);

  return (
    pronoun[pronounIndex] +
    adj[adjIndex] +
    noun[nounIndex] +
    names[namesIndex] +
    domains[domainsIndex]
  );
};
