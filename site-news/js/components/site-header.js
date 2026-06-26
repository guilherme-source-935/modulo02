class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<header class="cabecalho">
                <div class="logo">MyAnimeNews</div>
                <nav class="navegacao">
                    <a href="#">Política</a>
                    <a href="#">Economia</a>
                    <a href="#">Esportes</a>
                    <a href="#">Anime</a>
                </nav>
            </header>`
        ;
    }
}

customElements.define('site-header', SiteHeader)