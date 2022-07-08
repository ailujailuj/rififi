const abrirMenu = document.getElementById("menu-btn-abrir")
const fecharMenu = document.getElementById("menu-btn-fechar")
const navbar = document.getElementById("nav")
const main = document.querySelector("main")
const overlay = document.getElementById("overlay");
const body = document.querySelector("body");
const contatoInputs = document.querySelectorAll('[data-tipo="contato-input"]');
const contatoBtn = document.getElementById("contato-btn");
const contatoForm = document.getElementById("contato-form");
const footerContato = document.getElementById("footer-contato");

abrirMenu.addEventListener("click", abreMenu)
fecharMenu.addEventListener("click", fechaMenu)


window.addEventListener('resize', function (evento) {
    if (window.innerWidth >= 974) {
        overlay.style.display = "none";
        navbar.style.display = "flex";
    }
    else {
        navbar.style.display = "none";
    }

});

for (input of contatoInputs) {
    input.addEventListener("invalid", (e) => {
        e.preventDefault();
        valida(e.target)
    })
    input.addEventListener("blur", (e) => {
        valida(e.target)
    })
}

contatoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    for (input of contatoInputs) {
        valida(input)
    }
    gerarMensagemEnviada()
});




function abreMenu() {
    console.log("funcionou");
    overlay.style.display = "block";
    navbar.style.display = "flex";
    body.style.position = "fixed";
}

function fechaMenu() {
    console.log("fechandomenu");
    overlay.style.display = "none";
    navbar.style.display = "none";
    body.style.position = "static";
}

function valida(input) {
    const errorField = document.querySelector(`[data-tipo="${input.id}-error"]`);

    if (input.validity.valid) {
        input.classList.remove("input-invalido-error");
        errorField.innerHTML = "";
    } else if (input.validity.valueMissing) {
        input.classList.add("input-invalido-error");
        errorField.innerHTML = `O campo ${input.name} não pode estar vazio.`
    } else if (input.validity.typeMismatch) {
        input.classList.add("input-invalido-error")
        errorField.innerHTML = `Verifique o email digitado. Exemplo: email@exemplo.com`
    }
}

function gerarMensagemEnviada() {
    const mensagemEnviada = document.createElement("div");
    mensagemEnviada.innerHTML = `<h3 class="footer-msg-enviada">Sua mensagem foi enviada com sucesso</h3>`
    footerContato.insertBefore(mensagemEnviada, document.getElementById("footer-contato-redes"));
    for (input of contatoInputs) {
        input.value = "";
    }
}
