// Aqui serão criados os eventos de Manipulação de DOM e templatesimport { newUser } from "./data.js";
import { newUser } from "./data.js";
export const record = () => {
    const container = document.createElement("div");
    container.classList.add("div-container-register");

    container.innerHTML = `
    <div class=btn-back>
      <a href="">
      <button id="btn-back" class="btn-back input-register">&#8672 Voltar</button>
      </a>
    </div>
    <form class="form-register">
      <p class="registro"><h2 class="registro-title">Cadastro</h2></p> 
      <input type="name" id="name" class="user-name input-register register-space" placeholder="Nome" required>
      <input type="surname" id="surname" class="surname input-register register-space" placeholder="Sobrenome" required><br>
      <input type="email" id="email" class="email input-register register-space" placeholder="Digite o email" required>
      <input type="password" id="password" class="password input-register register-space" placeholder= "Digite a senha" required>
      <input type="password" id="confirm-password" class="password input-register register-space" placeholder= "Confirme a senha" required>
      <button id="record" class="btn-record input-register">Criar conta</button>
    </form>`;

  const email = container.querySelector("#email");
  const password = container.querySelector("#password");
  const createUser = container.querySelector("#record");
  createUser.addEventListener("click", (event) => {
    event.preventDefault();
    newUser(email, password);
  });
  return container;
};
