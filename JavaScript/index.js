////////////////// Obtenez le modal d'inscription ///////////////////////

function login (event){ // Fonction pour regarder si le username & password entré dans le input et celui dans le local storage sont les même
  event.preventDefault();
  const uname = document.getElementById("unameLogin").value;
  const pwsd = document.getElementById("pswdLogin").value;

  const unameLogin = localStorage.getItem("uname");
  const pwsdLogin = localStorage.getItem("pswd");

  if(uname === unameLogin && pwsd === pwsdLogin){
      window.location.replace("../accueil.html")
  }
  else{
    alert("Nom ou mot de passe invalide.");
  }
}
  
function register(){ // Sert à s'inscrire et entré les données dans le local storage
  const uname = document.getElementById("uname").value;
  const pwsd = document.getElementById("pswd").value;
  const repeatPSWD = document.getElementById("repeatPSWD").value;

  if(pwsd === repeatPSWD){
    localStorage.setItem("uname", uname)
    localStorage.setItem("pswd", pwsd)
  }
  }
// ////////////////// Obtenez le modal d'inscription ///////////////////////
var modal = document.getElementById('id01');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
   }
}


// ///////////////// Obtenez le modal de connexion //////////////////////////
 var modal2 = document.getElementById('id02');

  //Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
window.onclick = function(event) {
     if (event.target == modal2) {
         modal.style.display = "none";
     }
 }