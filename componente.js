class Componente extends HTMLElement {
    constructor() {
      super();
    }
  
    async connectedCallback() {
      const response = await fetch('http://localhost:3000/prod'); // Ajuste o caminho para o db.json
      const data = await response.json();
  
      const div = document.createElement("div");
      div.className = "card-deck";
  
      // Criando cards dinamicamente com base nos dados do JSON
      div.innerHTML = data.prod.map(prod => `
        <div class="col">
          <div class="card mb-3 mt-3">
            <img src="${prod.image}" class="card-img-top" alt="${prod.title}">
            <div class="card-body">
              <h5 class="card-title">${prod.author}</h5>
            </div>
            <div class="card-body">
              <a href="produto.html?id=${prod.id}" class="Detalhes">Detalhes</a>
            </div>
          </div>
        </div>
      `).join('');
  
      this.appendChild(div);
    }
  }
  
  customElements.define("componente-novo", Componente);
  