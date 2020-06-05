export const newUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(function () {
      alert("Bem-vindo" + email.value);
    })
    .catch(function (error) {
      console.error(error.code);
      console.log(error.message);
      alert("Falha ao cadastrar, verifique o erro no console");
    });
};
