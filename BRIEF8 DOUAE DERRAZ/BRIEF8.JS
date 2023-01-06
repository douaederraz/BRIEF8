// var tablejs = [];

// if ( localStorage.obj != null ) {
//   tablejs = JSON.parse(localStorage.obj);
// }
class Article {
  
  constructor(m_nom,m_marque,m_prix,m_date,m_type){
    this.Nom = m_nom;
    this.marque=m_marque;
    this.Prix=m_prix;
    this.Type=m_type;
    this.Date=m_date;
    this.Promotion=this.checkedpromotion();
 
  }
  // afficger les details
  
  Details(){
    let texte=document.getElementById('class');
   texte.innerHTML='<br>'+ 'Nom:'+ this.Nom +'' +"<br>"+"<br>"+'Marque:'+''+this.marque+"<br>" +"<br>"+'Prix:'+''+ this.Prix+''+ 'DH'+"<br>"+"<br>"+'Date de production:'+''+ this.Type +"<br>"+"<br>"+'Type:'+''+this.Date +"<br>" +"<br>"+'Promotion:'+ '' +this.Promotion +"<br>";

let details=document.createElement("button");
texte.appendChild(details);

details.innerHTML="x";
details.setAttribute("class","details");
texte.style.display="block"; 
details.onclick=supdetails;

function supdetails(){

texte.style.display="none"; 
}
  }
 
// fonction de detail promotion
 checkedpromotion(){
    if (document.getElementById("OUI").checked) 
       return "Oui";
        else 
       return "Non"; 
   }
  }

// FORMULAIRE VIDE

function vide(){
  //input
  document.getElementById('nom').value="";
  document.getElementById('Marque').value="";
  document.getElementById('Prix').value="";
  document.getElementById('date').value="";
  document.getElementById('type').value=document.getElementById('type').options[0].value; 
   document.getElementById('OUI').checked=false;
  document.getElementById('NON').checked=false;
  // span
  document.getElementById('Nom').innerText="";
  document.getElementById('mrq').innerHTML="";
  document.getElementById('prx').innerHTML="";
  document.getElementById('dat').innerHTML="";
  document.getElementById('promo').innerHTML="";
  document.getElementById('typ').innerHTML="";
}
// FUNCTION DE LA VALIDATION
function Suivant(){

   //nom//
   let spn= document.getElementById('Nom');
    let nom = document.getElementById('nom');

if(nom.value.match(/[0-9]/g)){
    spn.innerHTML="les chiffres sont interdits"
    spn.style.color="red";
    spn.style.fontSize="20px";
}
  else if(nom.value.length>30 || nom.value.length<3 ){
 spn.innerHTML="Error"
 spn.style.color="red";
 spn.style.fontSize="20px";


    }
    else  {
        spn.innerHTML="Valider"
        spn.style.color="green";
     spn.style.fontSize="20px";
   
    }

    //marque//

    let text= document.getElementById('mrq');
    let Marque= document.getElementById('Marque');

if(Marque.value.match(/[0-9]/g)){
    text.innerHTML="les chiffres sont interdits"
    text.style.color="red";
    text.style.fontSize="20px";
    
}
  else if(Marque.value.length>30 || Marque.value.length<3){
 text.innerHTML="Error"
 text.style.color="red";
 text.style.fontSize="20px";
    }
    else  {
        text.innerHTML="Valider"
        text.style.color="green";
        text.style.fontSize="20px";
    }

    //PRIX//
    
    let spa= document.getElementById('prx');
    let prix= document.getElementById('Prix');

  if(prix.value>1){
    spa.innerHTML="Valider"
    spa.style.color="green";
spa.style.fontSize="20px";
    }
    else{
        spa.innerHTML="Error";
        spa.style.color="red";
        spa.style.fontSize="20px";
    }

   //DATE//

   let message= document.getElementById('dat');
   let date = document.getElementById('date');

 if(date.value== ""){
message.innerHTML="Error"
message.style.color="red";
message.style.fontSize="20px";
   }

   else  {
     message.innerHTML="Valider"
     message.style.color="green";
     message.style.fontSize="20px";
  }

   //PROMOTIONS//

   let pan= document.getElementById('promo');
   let oui= document.getElementById('OUI').checked;
   let non = document.getElementById('NON').checked;

 if(oui==true || non==true){
pan.innerHTML="Valider"
pan.style.color="green";
pan.style.fontSize="20px";
   }

   else  {
      pan.innerHTML="Error"
      pan.style.color="red";
      pan.style.fontSize="20px";
   }

//TYPE//

       let Span= document.getElementById('typ');
       let type = document.getElementById('type');
   
  
       if (type.options[0].selected == true) {
       Span.innerHTML="Error";
       Span.style.color="red";
       Span.style.fontSize="20px";
   }
   
   else{
Span.style.fontSize="20px";
       Span.innerHTML="Valider";
       Span.style.color="green";
   }

   //VALIDATION//

   if( Span.innerHTML=="Valider" && pan.innerHTML=="Valider" &&  message.innerHTML=="Valider" &&  spa.innerHTML=="Valider" && text.innerHTML=="Valider" &&      spn.innerHTML=="Valider"){
// OBJECT
    let obj= new Article(nom.value,Marque.value,prix.value,date.value,type.value);
    // tablejs.push(obj);
    obj.Details();
    // localStorage.setItem("objet",JSON.stringify(tablejs));
    
    // function local(){
    //   let table=document.getElementById('table');
    // for(let i = 0 ; i < table.length ; i++){
    // //CREATE ELEMENT

let lignes=document.createElement("tr");
let colonne=document.createElement("td");
let colonne2=document.createElement("td");
let colonne3=document.createElement("td");
let colonne4=document.createElement("td");
let colonne5=document.createElement("td");
let colonne6=document.createElement("td");
let colonne7=document.createElement("td");
let button=document.createElement("button");
let btn=document.createElement("button");
let table=document.getElementById('table');

//appenchild
table.appendChild(lignes);
lignes.appendChild(colonne);
lignes.appendChild(colonne2);
lignes.appendChild(colonne3);
lignes.appendChild(colonne4);
lignes.appendChild(colonne5);
lignes.appendChild(colonne6);
lignes.appendChild(colonne7);
colonne7.appendChild(btn);
colonne7.appendChild(button);

//style button
btn.innerHTML="Modifier";
button.innerHTML="Supprimer";
btn.style.width="50%";
button.style.width="50%";

//declaration pour le style

btn.setAttribute("class","cancel")
button.setAttribute("class","supp")

//DECLARATION DES COLONNES 
// colonne.innerHTML=nom.value;
// colonne2.innerHTML=tablejs[i].marque;
// colonne3.innerHTML=tablejs[i].Prix;
// colonne4.innerHTML=tablejs[i].Date;
// colonne5.innerHTML=tablejs[i].Type;
// colonne6.innerHTML=tablejs[i].Promotion;



colonne.innerHTML=nom.value;
colonne2.innerHTML=Marque.value;
colonne3.innerHTML=prix.value;
colonne4.innerHTML=date.value;
colonne5.innerHTML=type.value;

//DECLARATION PROMOTION 

if(oui==true){
  colonne6.innerHTML=document.getElementById('OUI').value;
}
else {
  colonne6.innerHTML=document.getElementById('NON').value;
}

// BUTTON SUPPRIMER

button.onclick=supprimer;

 function supprimer(){

  //CONFERMATION

  let main=document.getElementById('main');
  let confermation=document.createElement("div");
  let paragraphe=document.createElement("p");
  let supp=document.createElement("button");
  let cancel=document.createElement("button")
  paragraphe.innerHTML="voulez-vous vraiment supprimer cette ligne!!";
  supp.innerHTML="Supprimer";
  cancel.innerHTML="cancel";
  main.appendChild(confermation);
  confermation.appendChild(paragraphe);
  confermation.appendChild(supp);
  confermation.appendChild(cancel);

  //FUNCTION SUPPR

  supp.onclick=suppr;
  function suppr(){
    table.removeChild(lignes);
    main.removeChild(confermation); 
  }

  //FUNCTION CANCEL
  
  cancel.onclick=Cancel;
  function Cancel(){
    main.removeChild(confermation); 
  }
  confermation.setAttribute("class","confermation")
  supp.setAttribute("class","supp")
  cancel.setAttribute("class","cancel")

 }

 //MODIFIER
            
 btn.onclick=editRow;
 //function editrow
 function editRow(){
  nom.value=table.rows[lignes.rowIndex].cells[0].innerHTML;
  Marque.value=table.rows[lignes.rowIndex].cells[1].innerHTML; 
  prix.value=table.rows[lignes.rowIndex].cells[2].innerHTML ;
  date.value=table.rows[lignes.rowIndex].cells[3].innerHTML ;
  type.value=table.rows[lignes.rowIndex].cells[4].innerHTML ;
  if(oui==true){
    document.getElementById('OUI').value= table.rows[lignes.rowIndex].cells[5].innerHTML ;
        }
        else {
           document.getElementById('NON').value=table.rows[lignes.rowIndex].cells[5].innerHTML ;
        }

        // l'affichage des données 

 let Modifier=document.getElementById('button');
 Modifier.innerHTML="Modifier";
 Modifier.onclick=modifier;

//  FUNCTION MODIFIER

 function modifier(){
                table.rows[lignes.rowIndex].cells[0].innerHTML =nom.value;
                table.rows[lignes.rowIndex].cells[1].innerHTML =Marque.value;
                table.rows[lignes.rowIndex].cells[2].innerHTML =prix.value;
                table.rows[lignes.rowIndex].cells[3].innerHTML  = date.value;
                table.rows[lignes.rowIndex].cells[4].innerHTML =type.value;

                if(document.getElementById('OUI').checked==true){
                  table.rows[lignes.rowIndex].cells[5].innerHTML =document.getElementById('OUI').value;
                }
                else if(document.getElementById('NON').checked==true){
                  table.rows[lignes.rowIndex].cells[5].innerHTML = document.getElementById('NON').value;
                }
             
                Modifier.innerHTML="Ajouter";
                Modifier.onclick=Suivant;
                  vide();

            }
           
 }

//FUNCTION VIDE
vide();


 }
             

  
}

 
// }
// }  
 


