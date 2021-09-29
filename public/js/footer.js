const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
        <img src="/public/img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Homem</li>
                <li><a href="#" class="footer-link">Camisetas</a></li>
                <li><a href="#" class="footer-link">Moletons</a></li>
                <li><a href="#" class="footer-link">Camisas</a></li>
                <li><a href="#" class="footer-link">Jeans</a></li>
                <li><a href="#" class="footer-link">Calças</a></li>
                <li><a href="#" class="footer-link">Sapatos</a></li>
                <li><a href="#" class="footer-link">Casuais</a></li>
                <li><a href="#" class="footer-link">Formais</a></li>
                <li><a href="#" class="footer-link">Sports</a></li>
                <li><a href="#" class="footer-link">Assistir</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Mulher</li>
                <li class="category-title">Homem</li>
                <li><a href="#" class="footer-link">Camisetas</a></li>
                <li><a href="#" class="footer-link">Moletons</a></li>
                <li><a href="#" class="footer-link">Camisas</a></li>
                <li><a href="#" class="footer-link">Jeans</a></li>
                <li><a href="#" class="footer-link">Calças</a></li>
                <li><a href="#" class="footer-link">Sapatos</a></li>
                <li><a href="#" class="footer-link">Casuais</a></li>
                <li><a href="#" class="footer-link">Formais</a></li>
                <li><a href="#" class="footer-link">Sports</a></li>
                <li><a href="#" class="footer-link">Assistir</a></li>
            </ul>
        </div>
    </div>
    <!-- previous elements -->
    <p class="footer-title">Sobre Empresa</p>
    <p class="info">Empresa de Software</p>
    <p class="info">diegoteixeirapereira@hotmail.com</p>
    <p class="info">Telefone (51) 3200-0000</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">Termos & Serviços</a>
            <a href="#" class="social-link">Página de Privacidade</a>
        </div>
        <div>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
        </div>
    </div>
    <p class="footer-credit">Roupas, loja online da melhor roupa</p> `;
}

createFooter();