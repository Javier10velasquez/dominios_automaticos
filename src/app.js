import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const domain = ['.com', '.net', '.us', '.io'];

  const results = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          results.push(`${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}`);
        }
      }
    }
  }

  const container = document.getElementById('domains');
  container.innerHTML = `
    <h2 class="h4">Dominios generados</h2>
    <ul class="list-unstyled">
      ${results.map(r => `<li>${r}</li>`).join('')}
    </ul>
  `;
};


