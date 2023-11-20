// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Obter o botão de rolagem
    var scrollBtn = document.getElementById("scrollBtn");
    var mobileMenu = document.getElementById("mobile-menu");
    var mainMenu = document.getElementById("menu-main");

    // Adicionar comportamento de rolagem suave ao clicar no botão
    if (scrollBtn) {
        scrollBtn.addEventListener("click", function () {
            document.body.scrollTop = 0; // Para navegadores da web
            document.documentElement.scrollTop = 0; // Para IE, Firefox, Safari
        });
    }

    // Mostrar o botão quando o usuário rolar para baixo 20 pixels da parte superior da página
    window.onscroll = function () {
        if (scrollBtn && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
            scrollBtn.style.display = "block";
        } else if (scrollBtn) {
            scrollBtn.style.display = "none";
        }
    };

    // Swiper initialization
    var swiper = new Swiper('.swiper-container', {
        // Configurações opcionais aqui
        loop: true, // Para permitir o loop contínuo do carrossel
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
