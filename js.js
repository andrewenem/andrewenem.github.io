window.addEventListener('load', () => {

    document.getElementById("menu-button").addEventListener('click', () => {
        if (document.getElementById("nav-modal").classList.contains("show")) {
            document.getElementById("nav-modal").classList.remove("show");
			document.getElementById("modal-container").classList.remove("show");
            document.getElementById("menu-button").getElementsByTagName("i")[0].classList.add("fa-bars");
            document.getElementById("menu-button").getElementsByTagName("i")[0].classList.remove("fa-xmark");
        } else {
			document.getElementById("modal-container").classList.add("show");
            document.getElementById("nav-modal").classList.add("show")
            document.getElementById("menu-button").getElementsByTagName("i")[0].classList.remove("fa-bars");
            document.getElementById("menu-button").getElementsByTagName("i")[0].classList.add("fa-xmark");
        }
    })
	
	document.getElementById("modal-container").addEventListener('click', () => {
		document.getElementById("nav-modal").classList.remove("show");
		document.getElementById("benefits-modal").classList.remove("show");
		document.getElementById("modal-container").classList.remove("show");
		document.getElementById("menu-button").getElementsByTagName("i")[0].classList.add("fa-bars");
		document.getElementById("menu-button").getElementsByTagName("i")[0].classList.remove("fa-xmark");
	})
	
	document.getElementById("show-mentoria-benefits").addEventListener('click', () => {
        if (document.getElementById("benefits-modal").classList.contains("show")) {
            document.getElementById("benefits-modal").classList.remove("show");
			document.getElementById("modal-container").classList.remove("show");
        } else {
            document.getElementById("benefits-modal").classList.add("show")
			document.getElementById("modal-container").classList.add("show");
        }
    })
	
	document.getElementById("ebook-selector").addEventListener('click', () => {
		toggleProduto("ebook-selector","ebook-container","ebook");
	})
	
	document.getElementById("mentoria-selector").addEventListener('click', () => {
		toggleProduto("mentoria-selector","mentoria-container","mentoria");
	})
	/*
	midiabuttons = document.getElementsByClassName("midia-toggle");
	for (i = 0; i < midiabuttons.length; i++) {
		midiabuttons[i].addEventListener('click', () => {
			if(i = 0) {
				document.getElementById("news-iframe").src = "https://guiadoestudante.abril.com.br/estudo/5-conselhos-para-quem-esta-no-primeiro-ano-de-cursinho/";
			} else {
				document.getElementById("news-iframe").src = "https://guiadoestudante.abril.com.br/estudo/5-conselhos-para-quem-esta-no-primeiro-ano-de-cursinho/";
			}
			
			for (j = 0; j < midiabuttons.length; j++) {
				midiabuttons[j].className = "midia-toggle";
			}
			
			midiabuttons[i].className = "midia-toggle selected";
		})
	}*/

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
	
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
})

function showQuemSouEu() {
	document.getElementById("quem-sou-eu-more").className = "show";
    document.getElementById("quem-sou-eu-more").style.display = "flow-root";
    document.getElementById("show-quem-sou-eu-more").style.display = "none";
}

function showMeuMetodo() {
	document.getElementById("metodo-more").className = "show";
    document.getElementById("metodo-more").style.display = "block";
    document.getElementById("show-metodo-more").style.display = "none";
}

function toggleProduto(selector, container, mobiletag, othermobiletag) {
	tabcontent = document.getElementsByClassName("product-container");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	tabselectors = document.getElementsByClassName("product-title");
	for (i = 0; i < tabselectors.length; i++) {
		tabselectors[i].className = tabselectors[i].className.replace("selected", "");
	}
	
	document.getElementById(container).style.display = "block";
	document.getElementById(container).className = "product-container show";
	document.getElementById(selector).className = "product-title selected";
}