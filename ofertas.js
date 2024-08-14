class Oferta extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const div = document.createElement("div");
        div.className = "card-deck";
        div.innerHTML = `
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-alianca.jfif" class="card-img-top" alt="Anel Aliança">
                        <div class="card-body">
                            <h5 class="card-title">Anel Aliança</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 50,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-coracao-minimalista.png" class="card-img-top" alt="Anel Coraçao Minimalista">
                        <div class="card-body">
                            <h5 class="card-title">Anel Coraçao Minimalista</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 59,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-liso-torcido.jpeg" class="card-img-top" alt="Anel Liso Torcido">
                        <div class="card-body">
                            <h5 class="card-title">Anel Liso Torcido</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 70,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-gota-ponto-de-luz.png" class="card-img-top" alt="Anel Gota Com Ponto de Luz">
                        <div class="card-body">
                            <h5 class="card-title">Anel Gota Com Ponto de Luz</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 170,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-meia-alianca-diamantado.jpg" class="card-img-top" alt="Anel Meia Aliança Diamantado">
                        <div class="card-body">
                            <h5 class="card-title">Anel Meia Aliança Diamantado</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 160,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-meia-alianca.png" class="card-img-top" alt="Anel Meia Aliança">
                        <div class="card-body">
                            <h5 class="card-title">Anel Meia Aliança</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 140,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-trancado.png" class="card-img-top" alt="Anel Trançado">
                        <div class="card-body">
                            <h5 class="card-title">Anel Trançado</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 100,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-zirconia-gota.png" class="card-img-top" alt="Anel Zirconia Gota">
                        <div class="card-body">
                            <h5 class="card-title">Anel Zirconia Gota</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 79,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-argola-grande.jpg" class="card-img-top" alt="Brinco Argola 1">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Argola 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 70,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-argola.jpg" class="card-img-top" alt="Brinco Argola 2">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Argola 2</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 60,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-cristais.jpg" class="card-img-top" alt="Brinco Cristais">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Cristais</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 90,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-cristal-diamantado.jpg" class="card-img-top" alt="Brinco Cristal Diamantado">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Cristal Diamantado</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 130,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-ponto-de-luz-redondo.png" class="card-img-top" alt="Brinco Ponto de Luz Redondo">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Ponto de Luz Redondo</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 100,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-prata-leve-pendurado.jpg" class="card-img-top" alt="Brinco Prata Leve 1">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Prata Leve 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 90,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/vivian-rebello-acessorios-femiinos-prata-piercing-25-03-21-12.jpg" alt="Brinco Prata Leve 2">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Prata Leve 2</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 80,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/colares/Colar-arvore-da-vida.jpg" alt="Colar Árvore da Vida">
                        <div class="card-body">
                            <h5 class="card-title">Colar Árvore da Vida</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 100,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/colares/Colar-ponto-luz-redondo1.png" alt="Colar Ponto Luz Redondo">
                        <div class="card-body">
                            <h5 class="card-title">Colar Ponto Luz Redondo</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 70,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/colares/colar-prata-estrela.jpg" alt="Colar Prata Estrela">
                        <div class="card-body">
                            <h5 class="card-title">Colar Prata Estrela</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 59,90</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/colares/colar-prata-onda.png" alt="Colar Prata Onda">
                        <div class="card-body">
                            <h5 class="card-title">Colar Prata Onda</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 40,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/colares/corrente.jpg" alt="Colar Corrente">
                        <div class="card-body">
                            <h5 class="card-title">Colar Corrente</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 60,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/pulseiras/pulseira-bolinhas.png" alt="Pulseira de Bolinhas">
                        <div class="card-body">
                            <h5 class="card-title">Pulseira de Bolinhas</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 50,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/pulseiras/pulseira-diamantado.png" alt="Pulseira Diamantado">
                        <div class="card-body">
                            <h5 class="card-title">Pulseira Diamantado</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 120,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/pulseiras/pulseira-elo-coracao.png" alt="Pulseira Elo Coração">
                        <div class="card-body">
                            <h5 class="card-title">Pulseira Elo Coração</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 100,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/pulseiras/pulseira-fina.jpeg" alt="Pulseira Fina">
                        <div class="card-body">
                            <h5 class="card-title">Pulseira Fina</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 90,00</li>
                            <li class="list-group-item">A second item</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        this.appendChild(div);
    }
}

customElements.define("oferta-nova", Oferta);
