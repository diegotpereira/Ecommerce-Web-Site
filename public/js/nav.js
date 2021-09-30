const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
          <img src="img/dark-logo.png" class="brand-logo" alt="">
          <div class="nav-items">
              <div class="search">
                 <input type="text" class="search-box" placeholder="buscar marca, produto">
                 <button class="search-btn">Buscar</button>
              </div>
              <a>
                 <img src="img/user.png" id="user-img" alt="">
                 <div class="login-logout-popup hide">
                    <p class="account-info">Entrar com, nome</p>
                    <button class="btn" id="user-btn">Sair</button>
                 </div>
              </a>
              <a href="#"><img src="img/cart.png" alt=""></a>
          </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Mulher</a></li>
            <li class="link-item"><a href="#" class="link">Homem</a></li>
            <li class="link-item"><a href="#" class="link">Crianças</a></li>
            <li class="link-item"><a href="#" class="link">Acessórios</a></li>
        </ul>
    `;
}

createNav();

// nav popup 
const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if (user !== null) {
        // means user is logged in
        popuptext.innerHTML = `faça login como, ${user.name}`;
        actionBtn.innerHTML = 'sair';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else {
        // user is logged out
        popuptext.innerHTML = 'faça login para fazer o pedido';
        actionBtn.innerHTML = 'Conecte-se';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}