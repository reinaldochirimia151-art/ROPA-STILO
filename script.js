/* ===============================
   FULL STILO - SCRIPT.JS
=================================*/

document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       SCROLL SUAVE EN MENÚ
    =================================*/
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    /* ===============================
       ANIMACIÓN AL HACER SCROLL
    =================================*/
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.6s ease";
        observer.observe(card);
    });

    /* ===============================
       BOTÓN DINÁMICO HERO
    =================================*/
    const btn = document.querySelector(".btn");

    if (btn) {
        btn.addEventListener("mouseenter", () => {
            btn.textContent = "🔥 Explorar Ahora";
        });

        btn.addEventListener("mouseleave", () => {
            btn.textContent = "Ver Colección";
        });
    }

    /* ===============================
       AÑO AUTOMÁTICO EN FOOTER
    =================================*/
    const footer = document.querySelector("footer p");

    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `© ${year} Full Stilo - Todos los derechos reservados`;
    }

});