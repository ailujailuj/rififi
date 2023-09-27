const loginBtn = document.getElementById("login-btn");
const loginEmailInput = document.getElementById("login-email");
const loginSenhaInput = document.getElementById("login-senha");
const loginInputs = document.querySelectorAll('[data-tipo="login-input"]');
const loginForm = document.getElementById("login-form");
const erroUserSenhaIncorreto = document.createElement("div");


loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    loginBtn.classList.add("carregando");
    setTimeout(loginAdmin(e.target), 2000);
})



for (input of loginInputs) {
    input.addEventListener("click", function () {
        erroUserSenhaIncorreto.remove();
    })
}

for (input of loginInputs) {
    input.addEventListener("invalid", (e) => {
        e.preventDefault();
        valida(e.target)
    })
    input.addEventListener("blur", (e) => {
        valida(e.target)
    })
}

const loginAdmin = (campos) => {
    const admin = "user@teste.com.br";
    const senha = "222";

    if (loginEmailInput.value === admin && loginSenhaInput.value === senha) {
        document.location.assign("menu_adm.html");
    } else if (loginEmailInput.value === "" || loginSenhaInput.value === "") {
        loginBtn.classList.remove("carregando");
        for (input of loginInputs) {
            valida(campos)
        }
    } else {
        loginBtn.classList.remove("carregando");
        loginEmailInput.value = "";
        loginSenhaInput.value = "";
        geraErroUserSenhaIncorreto();
    }
}


function geraErroUserSenhaIncorreto() {
    erroUserSenhaIncorreto.innerHTML = `<p>O email do usuário ou a senha está incorreta. Tente novamente.</p>`;
    loginForm.appendChild(erroUserSenhaIncorreto);
    erroUserSenhaIncorreto.classList.add("erro-login");
}


