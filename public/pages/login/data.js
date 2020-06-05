export const authEmailAndPassword = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};
export function signIn(provider) {
	firebase.auth()
		.signInWithPopup(provider)
		.then(function (result){
			console.log(result);
			const token = result.credential.accessToken;
		}).catch(function(error){
			console.log(error);
			alert("Falha");
		});
}
		
