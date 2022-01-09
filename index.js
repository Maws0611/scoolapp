let api_url = "https://upiylnqipcajolgcjhxc.supabase.co/rest/v1/SchoolApp"
let api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDYwMTYxNiwiZXhwIjoxOTU2MTc3NjE2fQ.WZ1K2q4aFLDPqlxfBaAK3psK0F-LH3VtaqENAUFHIqM"
let listeApprenants = []
// Envoyer les données vers la base de données
function inserer(newObject) {
  fetch(api_url, {
    method: "POST",
    headers: {
      apikey: api_key,
      "Authorization": `Bearer ${api_key}`,
      Prefer: "return=representation",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newObject),
  })
}
// // Recupérer les données via l'API
// // fetch(api_url, {
// //   method: "GET",
// //   headers: {
// //     apikey: api_key,
// //   }
// // })
//   .then((response) => response.json())
//   .then((donnee) => {
//     for (let item in donnee) {
//       creationDeCarte(donnee[item])
//     }
//   })
// Creer Une Carte
function creationDeCarte(donnee) {
  let carte = document.getElementById('carteApprenant')
  carte.insertAdjacentHTML("afterbegin",
    `<div class="card card-idea m-2" style="width: 18rem">
    <div class="card-body flex-column d-flex justify-content-between">
      <div class="d-flex bd-highlight">
    <img src="img/posture.jpg" class="img-fluid rounded-circle" width="100" height="200" alt="...">
    <div class="p-2 bd-highlight"><h5> ${donnee.prenom} ${donnee.nom}</h5><br>
    <h6> ${donnee.niveau}</h6></div>
      </div>
    <p class="card-text">
        ${donnee.biographie}
    </p>
  </div>
 
</div>
`)
  let BoutonSauvegarder = document.getElementById(btnsauvegarder)
  BoutonSauvegarder.addEventListener('click', () => {
    listeApprenants.forEach(apprenant => {
      inserer(apprenant)

    });
  })
}


{/* <div class="d-flex justify-content-end">
<button type="submit" class="btn btn-success" id="${donnee.btnsauvegarder}">Sauvegarder</button>
</div> */}
// Recupérer les éléments de la formulaire
// if (nomApprenant == "" || prenomApprenant == "" || biographieApprenant == "" || niveauApprenant == "" ) {
//   return alert("Veuillez remplir tous les champs !")
// }
let btnEnvoyer = document.getElementById('btnEnvoyer')
btnEnvoyer.addEventListener("click", (event) => {

  let nomApprenant = document.getElementById('Nom').value
  let prenomApprenant = document.getElementById('Prenom').value
  let niveau = document.getElementById('option')
  let niveauApprenant = niveau.options[niveau.selectedIndex].value;
  let biographieApprenant = document.getElementById('Biographie').value


  event.preventDefault()
  // element saisi par l'utilisateur
  let NouveauApprenant = {
    'prenom': prenomApprenant,
    'nom': nomApprenant,
    'niveau': niveauApprenant,
    'biographie': biographieApprenant,
  }
  listeApprenants.push(NouveauApprenant)

  creationDeCarte(NouveauApprenant)

})


// /*---------------------------------------------page 2-------------------------------------------------------------*/
// // let api_url = "https://upiylnqipcajolgcjhxc.supabase.co/rest/v1/SchoolApp"
// // let api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDYwMTYxNiwiZXhwIjoxOTU2MTc3NjE2fQ.WZ1K2q4aFLDPqlxfBaAK3psK0F-LH3VtaqENAUFHIqM"
// // let listeApprenants = []
// // Recupérer les données via l'API
// // fetch(api_url, {
// //   method: "GET",
// //   headers: {
// //     apikey: api_key,
// //   }
// // })
// //   .then((response) => response.json())
// //   .then((apprenant) => {

// //     for (let item in apprenant) {
// //       AjouterUneCarte(apprenant[item])
// //     }
// //   })
// // Creer Une Carte
// function AjouterUneCarte(ObjetApprenant) {
//     let Listecarte = document.getElementById('ConteneurCartes')
//   Listecarte.insertAdjacentHTML("afterbegin",
//     `<div class="col">
//     <div class="card card-idea m-2">
//     <div class="card-body flex-column d-flex justify-content-between">
//       <div class="d-flex bd-highlight">
//     <img src="img/posture.jpg" class="img-fluid rounded-circle" width="100" height="200" alt="...">
//     <div class="p-2 bd-highlight"><h5> ${ObjetApprenant.prenom} ${ObjetApprenant.nom}</h5><br>
//     <h6> ${ObjetApprenant.niveau}</h6></div>
//       </div>
//     <p class="card-text">
//         ${ObjetApprenant.biographie}
//     </p>
//     <div class="d-flex justify-content-end ">
//           <button type="button" class="btn-sm btn btn-primary" data-bs-toggle="modal" data-bs-target="#details" id="${ObjetApprenant.id}">Détails</button>
//       </div>
//   </div>

// </div>
// </div`)
// const BoutonDetail = document.getElementById(ObjetApprenant.id)
// BoutonDetail.addEventListener('click', ()=>{
// let NomComplet = document.getElementById('nomComplet')
// NomComplet.textContent = ObjetApprenant.prenom +" " + ObjetApprenant.nom
// let niveau = document.getElementById('niveau')
// niveau.textContent = ObjetApprenant.niveau
// let biographie = document.getElementById('biographie')
// biographie.textContent = ObjetApprenant.biographie
// })
// }