let api_url = "https://upiylnqipcajolgcjhxc.supabase.co/rest/v1/SchoolApp"
let api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDYwMTYxNiwiZXhwIjoxOTU2MTc3NjE2fQ.WZ1K2q4aFLDPqlxfBaAK3psK0F-LH3VtaqENAUFHIqM"
let listeApprenants = []
// Recupérer les données via l'API
fetch(api_url, {
    method: "GET",
    headers: {
        apikey: api_key,
    }
})
    .then((response) => response.json())
    .then((donnee) => {
        for (let item in donnee) {
            CreerUneCarte(donnee[item])
        }
    })
// Creer Une Carte
function CreerUneCarte(donnee) {
    let Listecarte = document.getElementById('ConteneurCartes')
    Listecarte.insertAdjacentHTML("afterbegin",
        `<div class="col">
        <div class="card card-idea m-2">
            <div class="card-body flex-column d-flex justify-content-between">
                <div class="d-flex bd-highlight">
                    <img src="img/posture.jpg" class="img-fluid rounded-circle" width="100" height="200" alt="...">
                    <div class ="p-2 bd-highlight">
                    <h5> ${donnee.prenom} ${donnee.nom} </h5><br>
                    <h6> ${donnee.niveau}</h6>
                    </div>
                </div>
                <p class="card-text">
                    ${donnee.biographie}
                </p>
                <div class="d-flex justify-content-end ">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#details"
                        id="Détails">Détails</button>
                </div>
            </div>
        </div>
        <!--Modal -->
        <div class="modal fade" id="details">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <h5 class="modal-title text-center" id="nomComplet">${donnee.prenom} ${donnee.nom}</h5>
              <h6 class="modal-title text-center" id="niveau">${donnee.niveau}</h6>
              <img src="img/posture.jpg" class="img-fluid " width="100" height="200" alt="...">
              <p id="biographie">${donnee.biographie}</p>
              <div class="competences">
                <h1 class="competences">Compétences</h1>
                <div class="progress">
                  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="100" aria-valuemin="0"
                    aria-valuemax="100" id=${donnee.front}></div>
                </div><br>
                  <div class="progress">
                    <div class="progress-bar bg-dark" role="progressbar" style="width: 90%" aria-valuenow="100"
                      aria-valuemin="0" aria-valuemax="100" id=${donnee.maquette}></div>
                  </div><br>
                  <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 70%" aria-valuenow="100" aria-valuemin="0"
                      aria-valuemax="100" id=${donnee.back}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`)

      var radios = document.getElementsByName('radio1');
      var valeur;
      for(var i = 0; i < boutons.length; i++){
       if(boutons[i].checked){
       valeur = boutons[i].value;
       }
      }
      let competence1 = document.getElementsByName('radio1');
      let valeur1;
      for(let i = 0; i <boutons.length; i++){
        if(boutons[i].checked){
          valeur1 = boutons[i].value;
        }
      }

      let competence2 = document.getElementsByName(competence2)
      let competence3 = document.getElementsByName(competence3)
      let competence4 = document.getElementsByName(competence4)
      let competence5 = document.getElementsByName(competence5)
      let competence6 = document.getElementsByName(competence6)
      let competence7 = document.getElementsByName(competence7)
      let competence8 = document.getElementsByName(competence8)

}
