window.addEventListener('load', () => {

    document.getElementById("menu-button").addEventListener('click', () => {
        if (document.getElementById("nav-modal").classList.contains("show")) {
            document.getElementById("nav-modal").classList.remove("show");
            document.getElementById("menu-button").getElementsByTagName("i")[0].classList.add("fa-bars");
            document.getElementById("menu-button").getElementsByTagName("i")[0].classList.remove("fa-xmark");
        } else {
            document.getElementById("nav-modal").classList.add("show")
            document.getElementById("menu-button").getElementsByTagName("i")[0].classList.remove("fa-bars");
            document.getElementById("menu-button").getElementsByTagName("i")[0].classList.add("fa-xmark");
        }
    })

    // Get the header
    var header = document.getElementById("header");
    var sticky = 50;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.scrollY > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    window.addEventListener('scroll', () => { myFunction() });

})

function showQuemSouEu() {
    document.getElementById("quem-sou-eu-more").style.display = "flow-root";
    document.getElementById("show-quem-sou-eu-more").style.display = "none";
}

function showMeuMetodo() {
    document.getElementById("metodo-more").style.display = "block";
    document.getElementById("show-metodo-more").style.display = "none";
}

function showMentoriaBenefits() {
    if (document.getElementById("beneficios-mentoria").style.display != "block") {
        document.getElementById("beneficios-mentoria").style.display =  "block";
        document.getElementById("show-mentoria-beneficios").textContent = "Ocultar benefícios";
    } else {
        document.getElementById("beneficios-mentoria").style.display =  "none";
        document.getElementById("show-mentoria-beneficios").textContent = "Mostrar benefícios";
    }
}