class SiteFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML =
            `<footer class="rodape">
                <div class="coluna">
                    <h4><strong>MyAnimeNews</strong></h4>
                    <p>Altíssima credibilidade, Dirigido por Guilherme</p>
                </div>
                <div class="coluna">
                    <h4>Editoriais</h4>
                    <a href="#">Política</a>
                    <a href="#">Cultura</a>
                    <a href="#">Esportes</a>
                    <a href="#">Anime</a>
                </div>
                <div class="coluna">
                    <h4>Institucional</h4>
                    <a href="#">Termos de Uso</a>
                    <a href="#">Privacidade</a>
                    <a href="#">Quem Somos</a>
                    <a href="#">Contato</a>
                </div>
            </footer>`
        ;
    }
}

customElements.define('site-footer', SiteFooter)