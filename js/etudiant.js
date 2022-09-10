
//ouvrir la zone d enregistrement lorsqu on clique 

let nouveau = document.getElementById('recap');
nouveau.addEventListener(
    'click',function () {
        zone2.style.display ='block';
        
    }
);
//ceci permet de masquer ma zone d enregistremnt 
let enregistre = document.getElementById('enreg');
let zone2 = document.getElementById('zone');

enregistre.addEventListener(
    'click',function () {
       zone2 .style.display ='none';
        
    }
);


let affiche = document.getElementById('afficher');
let zones = document.getElementById('zone3');

affiche.addEventListener(
    'click',function () {
       zones.style.display ='none';
        
    }
);

//ajout des elements dans un tableau HTML

function addStudent() {
   
        var row = 1;
        let identifiant = document.getElementById("matricule").value;
        let nameStudent = document.getElementById("nom").value;
        let surnameStudent = document.getElementById("prenom").value;
        let dayBirthday = document.getElementById("dnaissance").value;
        let placeBorn = document.getElementById("lnaissance").value;
        let gender = document.getElementById("sexe").value;
        let course = document.getElementById("parcourss").value;
       /*if (!identifiant || !nameStudent || !surnameStudent || !dayBirthday || !placeBorn || !gender || !course) {
            alert ("svp remplissez tous les champs!!!");
            return;
        }*/
        let table = document.getElementById("tableau1");
        let  nouvelLigne = table.insertRow(row);

        let cellule1 =nouvelLigne.insertCell(0);
        let cellule2 =nouvelLigne.insertCell(1);
        let cellule3 =nouvelLigne.insertCell(2);
        let cellule4 =nouvelLigne.insertCell(3);
        let cellule5 =nouvelLigne.insertCell(4);
        let cellule6 =nouvelLigne.insertCell(5);
        let cellule7 =nouvelLigne.insertCell(6);
       

        cellule1.innerHTML = identifiant;
        cellule2.innerHTML = nameStudent +' '+ surnameStudent;
        cellule3.innerHTML = dayBirthday;
        cellule4.innerHTML = placeBorn;
        cellule5.innerHTML = gender;
        cellule6.innerHTML = course;
        cellule7.innerHTML ='<button onclick="">Add</button>  <button onclick="">Edit</button> <button onclick="">delete</button> <button onclick="">Update</button>'


       row ++;

    
}

//ajout de matiere
function addCourse(){
    let ligne = 1;
    let course = document.getElementById("matiere").value;
    let points = document.getElementById("notes").value;
    alert(course);
    if (!course || !points) {
        alert("remplissez tous les champs");
        return;
        
    }
    let table = document.getElementById("tableau2");
    let nouvelLigne = table.insertRow(ligne);

    let cellule1 = nouvelLigne.insertCell(0);
    let cellule2 = nouvelLigne.insertCell(1);

    cellule1.innerHTML = course;
    cellule2.innerHTML = points;

    ligne ++;

    
}

//fonction qui affiche le détails d' un étutiant 
function displayDetails(matricule ){
    
}
//

