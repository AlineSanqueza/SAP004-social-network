import { authEmailAndPassword } from "./data.js";
import { signIn } from "./data.js";

export const login = () => {
  const container = document.createElement("div");
  container.classList.add("div-container");

  container.innerHTML = `
<div class="img-login class="login">
  <img src="imagens/logo.jpg" alt="Img Logo" width=100% height=110%>
</div>
<form class="form login">
  <p class="logo text-p">Nome do app</p> 
  <input type="email" id="email" class="login-email input-login" placeholder="E-mail" required>
  <input type="password" id="pwd" class="login-pwd input-login" placeholder="Password" required>
  <br>
  <button id="login" class="button-login">Log in</button>
  <p class="other text-p">Ou entre com...</p>
  <input type="image" id="btn-google" class="btn-google" src="google.png">
  <p class="register text-p">Não tem uma conta? <a href="/#record">Cadastre-se</a></p>
</form>
`;
  const botaoLogin = container.querySelector("#login");
  const inputEmail = container.querySelector("#email");
  const inputSenha = container.querySelector("#pwd");

  botaoLogin.addEventListener("click", (event) => {
    event.preventDefault();
    authEmailAndPassword(inputEmail, inputSenha);
  });

  const inputGoogle = container.querySelector("#btn-google");

  inputGoogle.addEventListener("click", function (event) {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
  });
  return container;
};

