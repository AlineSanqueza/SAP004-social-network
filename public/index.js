// Este é o ponto de entrada de sua aplicação
import { login } from './pages/login/main.js';
import { home } from './pages/home/main.js';
import { record } from './pages/register/main.js';

<<<<<<< HEAD
const main = document.querySelector("#root");
main.appendChild(login());

// document.querySelector('#root').appendChild(login());

const init = () => {
    window.addEventListener("hashchange",() => {
        main.innerHTML = "";
        switch(window.location.hash){
            case " ":
                main.appendChild(login());
            break;
            case "#register":
                main.appendChild(record());
            break;
            default:
                main.appendChild(login());
        }
    });
}

window.addEventListener("load",() =>{
    main.appendChild(record());
    init();
})
// document.querySelector('#root').appendChild(record());
=======
document.querySelector('#root').appendChild(login());

document.querySelector('#root').appendChild(record());
>>>>>>> 81f5d291d8777fec605308295c5fe291d576e9ba




