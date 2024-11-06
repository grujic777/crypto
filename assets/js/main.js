
window.onload = function() {   


  console.log("radi");





var brojac = 0;
var tajmer;

function odbrojavanje(){
  if(brojac<=6) {
    document.getElementById('valuta').innerHTML = ` ${brojac}  `;
  }
  if(brojac<=120) {
    document.getElementById('korisnici').innerHTML = ` ${brojac}  `;
  }
  if(brojac<=50) {
    document.getElementById('zarada').innerHTML = ` ${brojac}  `;
  }

  brojac = brojac + 1;
  tajmer = setTimeout(() => {
  odbrojavanje();
  
  }, 50);
}

odbrojavanje();

//dinamicki ispis navigacije

var meni = [
  {naziv : "About us",
  target : "#aboutUs"},
  {naziv : "Valutes",
  target : "#valuteLista"},
  {naziv : "Calculator",
  target : "#kalkulator"},
  {naziv : "News",
  target : "#news"},
  {naziv : "Contact",
  target : "#kontakt"},

]



var poljeNavigacije = document.querySelector("#navigacija")
var futerNavigacija = document.getElementById("footer-menu")

//funkcija za responsive navigaciju

var hamDugme = document.getElementById("hamburger");
var navCelo = document.getElementById("respNavigacija")
var minMeni = document.getElementById("miniMeni");

hamDugme.onclick = function(){

  navCelo.style.display = "block";
}

navCelo.onclick = function(){
  navCelo.style.display = "none";
}


meni.forEach(stavka => {
  // console.log(stavka.naziv);
  poljeNavigacije.innerHTML+=`<li> <a href="${stavka.target}"> ${stavka.naziv} </a> <li>`
  minMeni.innerHTML+=`<li> <a href="${stavka.target}"> ${stavka.naziv} </a> <li>`
  futerNavigacija.innerHTML+=`<li> <a href="${stavka.target}"> ${stavka.naziv} </a> <li>`
 });






// jQuery hack da se respponsive navigacija sama skloni pri smanjivanju prozora
$(window).on('resize', function(event){
  var windowWidth = $(window).width();
      if(windowWidth > 1000){
         $(navCelo).hide(500);
      }
 })


//dinamicki ispis option tagova u padajucoj listi 
  var ddlValute1 = document.getElementById("clcValute");

  var listaValuta1 = [
    { id: 1,
      ime : "Bitcoin",
      prodajnaVrednost: 15990.13,
      kupovnaVrednost : 15990.23,
      boja : "#f59b00",
      procenti: "65",
      slika : "assets/img/bitcoin.png",
      podaci: "Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for the work done to verify transactions and can be purchased on several exchanges."

    },
    { id:2,
      ime : "Ethereum",
      prodajnaVrednost: 1.170,
      kupovnaVrednost : 1.175,
      boja : "#1345da",
      procenti: "45",
      slika : "assets/img/ethereum.png",
      podaci: "Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world – all you need is the internet."
    },
    { id:3,
      ime : "Solana",
      prodajnaVrednost: 13.65,
      kupovnaVrednost : 13.88,
      boja : "#850b5e",
      procenti: "33",
      slika : "assets/img/solana.png",
      podaci: "The Solana community is a globally distributed home to developers, token holders, validators, and members supporting the protocol."
    },
    { id:4,
      ime : "BNB",
      prodajnaVrednost: 269.51,
      kupovnaVrednost : 269.87,
      boja : "#ffd428",
      procenti: "21",
      slika : "assets/img/bnb.png",
      podaci: "BNB uses an Auto-Burn system to reduce its total supply to 100,000,000 BNB. The BNB Auto-Burn mechanism adjusts the amount of BNB to be burned based on BNB’s price and the number of blocks generated on BNB Smart Chain (BSC) during the quarter. This offers greater transparency and predictability to the BNB community"
    },
    { id:5,
      ime : "Litecoin",
      prodajnaVrednost: 73.09,
      kupovnaVrednost : 73.11,
      boja : "#219c80",
      procenti: "11",
      slika : "assets/img/litecoin.png",
      podaci: "Litecoin (LTC) is decentralised money, free from censorship and open to all. Send low cost private, secure, borderless payments to anyone, anytime, anywhere."
    },
    {  id:6,
      ime : "Polkadot",
      prodajnaVrednost: 5.30,
      kupovnaVrednost : 5.80,
      boja : "#f129a6",
      procenti: "5",
      slika : "assets/img/polkadot.png",
      podaci: "Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can securely communicate across chains, forming the basis for a truly interoperable decentralized web."
    }
  
  ]

//ispis dinamickog sadrzaja na potrebnim mestima
ispisDinamickogSadrzaja();

function ispisDinamickogSadrzaja(){
  var poljeZaIspis = document.getElementById("val1");
  var poljeDetalji = document.getElementById("cartPodaci");
  
  for (pod of listaValuta1){ 
   
     poljeZaIspis.innerHTML+=` <div class="col-lg-4 valuta">
                                   <div class="container valStyle" >
                                      <h3> ${pod.ime} </h3> 
                            <img src="${pod.slika}" style="filter: drop-shadow(0 0 0.55rem ${pod.boja});"/>
                            <button data-sadrzaj="${pod.podaci}" class="btn modalDugme"> Learn more </button>
                                         </div>
                                          </div>`
  
  
     poljeDetalji.innerHTML +=`<p style="color:${pod.boja};  text-shadow: 0 0 2px ${pod.boja}, 0 0 5px ${pod.boja} "> ${pod.ime} ${pod.procenti}% </p>`;

  
  }


  var modOkidac = document.getElementsByClassName("modalDugme");


//funckija za modal koriscenjem jQverija

$(document).ready(function(){
  var modalPolje = document.getElementById("modalPodataka");
  var modalIspis = document.getElementById("contentModala");
  
  $(modOkidac).click(function() {
    var sadrzajModala = this.dataset.sadrzaj;
    $(modalPolje).toggle(500);

    modalIspis.innerHTML=`<p> ${sadrzajModala} <p>`;
  }); 

  $('#escape').click(function(){
    $(modalPolje).toggle(500);
  });
  
});
}



//dinamicko kreiranje padajuce liste sa valutama
  ddlValute1.innerHTML= '<option> Chose </option>'
  for(let val of listaValuta1) {
     ddlValute1.innerHTML+= `<option  > ${val.ime}  </option>`
} 

var kupiDugme = document.getElementById("kupi"); 


ddlValute1.onchange = function(){
  var kupovnaVr = document.getElementById("kupovna");
  var prodajaVr = document.getElementById("prodajna");
  var valuta = ddlValute1.value;
for (let vv of listaValuta1){
    switch(valuta) {
      case `${vv.ime}`:
        kupovnaVr.value= `${vv.kupovnaVrednost}`;
        prodajaVr.value = `${vv.prodajnaVrednost}`;
        break;
      default:
    }
}
};


  //funkcija za racun na kalkulatoru
  kupiDugme.onclick = function(){

    //obrada forme na kalkulatoru

  var vrednostBroj = document.getElementById("coinVrednost").value;
   var novaKupovna = document.getElementById("kupovna").value;
   var novaProdajna = document.getElementById("prodajna").value;

   if(vrednostBroj==0){
 
    investGreska.innerHTML="Can not invest with 0 &euro;!"
   }
   else{
    investGreska.innerHTML=""
   }

   if(ddlValute1.value=="Chose"){
    praznaLista.innerHTML="Please chose valute"
   }
   else{
    praznaLista.innerHTML=""
   }

   var izlaz1 = document.getElementById("finalniIzlazKupovine"); 
   var izlaz2 = document.getElementById("finalniIzlazProdaje"); 
   izlaz1.innerHTML = vrednostBroj * novaKupovna ; 
   izlaz2.innerHTML = vrednostBroj * novaProdajna;
  
  }


 
  //grafikon  - dinamički ispis valuta u grafikon preko chart funkcije 
  var listaValuta = [];  // kako mi je u ovoj funckiji izvlacilo samo objekte, resio sam to uvodjenjem novih nizova i pojedinacnim dodavanjem zeljenih podataka
  var listaBoja = [];
  var listaProcenata = [];
 for (list of listaValuta1){

  listaValuta.push(`${list.ime}`) ; 
  listaBoja.push(`${list.boja}`);
  listaProcenata.push(`${list.procenti}`);

 }

 //console.log(listaValuta);
 //console.log(listaBoja);

new Chart("grafikon", {
  type: "pie",
   data: {
    labels: listaValuta,
    datasets: [{
      backgroundColor: listaBoja,
      data: listaProcenata
    }]
  },
  options: {
    title: {
      display: true,
      text: "Current popularity in percentage"
    }
  }
});



// regularni izrazi za kontakt formu
var ime = document.getElementById("name");
var surname = document.getElementById("surname");
var email = document.getElementById("email");

var dugmeProvera = document.getElementById("subm");

reIme = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{1,18}$/;
reMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


//funkcija sa parametrima za proveru regularnih izraza za ime, prezime, i email

function proveraGresaka(ulaz,polje,izraz){
if(ulaz.value==""){
    polje.innerHTML= "Please don't leave empty field";
    ulaz.classList.add("badForm");
    return 0;
  }
  else if (!izraz.test(ulaz.value)){
    polje.innerHTML= "Please insert value like example";
    ulaz.classList.add("badForm");
    return 0;
  }
  else {
    polje.innerHTML= "&check; ";
    ulaz.classList.add("goodForm");
    return 1;
  }
 
}

//funkcija za proveru karaktera u tekstualnom polju

var porukaBoks = document.getElementById("poruka");

porukaGreska.innerHTML="Write your impresion here with more than 30 characters and less than 150"

porukaBoks.onkeyup = function(){

  var porukaVrednost = porukaBoks.value;
  var start = porukaVrednost.length-27; //iz nekog razloga inicijalna vrednost textarea polja je bila 27 pa sam morao to ovako da resim
 
 if(start <= 30){
   porukaGreska.innerHTML="Please write more than 30 characters";
   poruka.classList.add("badForm");
   
 }
 else if(start >= 150){
   porukaGreska.innerHTML="You break the limit!";
   poruka.classList.add("badForm");
 }
 else {
   porukaGreska.innerHTML="Thank you for your impresion";
   poruka.classList.add("goodForm");
 }
 
 car.innerHTML = start;

 
}


//primena funkcije sa parametrima na konkretnom polju forme

ime.onblur = function(){
  proveraGresaka(ime,nameGreska, reIme)

}
surname.onblur = function(){
  proveraGresaka(surname,surnameGreska, reIme)
}

email.onblur = function(){
  proveraGresaka(email,emailGreska,reMail)
}

var lista = document.getElementById("ddlPol");
function proveraPola(){
  if(lista.value=="Chose gender") {
    polGreska.classList.add("badForm")
    return 0;
  }
  else {
    polGreska.classList.add("goodForm")
    return 1;
  }
}


 function robotProvera(){

  var rob = document.getElementById("robot")
 

 if(rob.checked==true){
  
  robotGreska.innerHTML="&check;";
  robotGreska.classList.add("goodForm");
  return 1;
 }
 else {
  robotGreska.innerHTML="Robot detected";
  robotGreska.classList.add("badForm");
  return 0;
 
 }

}

function txtProvera(){
  if(poruka.value>=0){
    poruka.classList.add("badForm");
    return 0;
  }
  else{
    poruka.classList.add("badForm");
  }
}


var dugmeProvera = document.getElementById("subm");
dugmeProvera.onclick = function(){
  event.preventDefault();

  txtProvera();

  proveraGresaka(ime,nameGreska, reIme)
  proveraGresaka(surname,surnameGreska, reIme)
  proveraGresaka(email,emailGreska,reMail)
  proveraPola()
  robotProvera()

  


  if(proveraGresaka(ime,nameGreska, reIme)&&proveraGresaka(surname,surnameGreska, reIme)&& proveraGresaka(email,emailGreska,reMail)&&proveraPola()&&robotProvera()&&txtProvera){
    console.log("uspesna forma")
    alert(`Thank you for your rewiew`)
    formaKontakt.reset();
    $("#formaKontakt").toggle(2000);
    lastChanse.innerHTML="Your rewiew has been confirmed, you can add another one next time when you visit our site"
  }
  else {
    console.log("neuspesna forma")
  }
  
}



var ocene = document.getElementById("vol");

ocene.onchange= function(){
  ocena.innerHTML = `${this.value}`;
  if(this.value<5){
    feedback.innerHTML="We re sorry , we will be better";
   
  }
  else {
    feedback.innerHTML="Thank you!";
  }
}

}


var motajVesti = setInterval(ispisVesti, 7000);
var broj = 0;
var nizVesti = ["The sample size of crossovers of 10- and 100-day moving averages for ETH and BTC is small but worth watching. A positive crossover is often a bullish sign.",
 "In a bid to alleviate worries for retail investors, Patrick Hillman, chief strategy officer at Binance, discusses the crypto exchange’s proof-of-reserve system following the collapse of FTX." , 
 "Commodity Futures Trading Commission (CFTC) Chairman Rostin Behnam said that while new legislation allowing his agency greater spot market oversight over crypto should move." ,
  "Sam Bankman-Fried is a con man and fraudster of historic proportions. But you might not learn that from the New York Times, CoinDesk's Chief Insights Columnist David Z. Morris writes." , 
  "Bankman-Fried said during the interview he did not 'knowingly commingle' customer funds." , 
"Rostin Behnam, the agency's chairman, did say FTX executives met frequently with the regulator.", 
"Carpe Consensus” dives into crypto’s biggest story of the year, analyzing the latest developments and lessons learned from the collapse of Sam Bankman-Fried’s FTX exchange." , 
"BlockFi, a crypto lending company, was founded in October 2017 and filed for bankruptcy in November, 2022 in the wake of FTX's collapse." , 
,"Thats it for today"]

function ispisVesti(){
const poljeVesti = document.getElementById("vestiBoks");
 const pojedinacnoPolje= document.createElement("div");
 pojedinacnoPolje.setAttribute("class" , "zasebnaVest")
 const vestX = document.createElement("p");
 const vestY = document.createTextNode(nizVesti[broj]);
 vestX.appendChild(vestY);
 pojedinacnoPolje.appendChild(vestY);
  poljeVesti.insertBefore(pojedinacnoPolje , poljeVesti.firstChild); 
  broj+=1;

  if(broj == nizVesti.length - 2){
    const vestZ = document.createTextNode("Thats it for today")
    pojedinacnoPolje.appendChild(vestZ);
    nizVesti[broj]=

   clearInterval(motajVesti); 

  }

}




//autor
var dugmeAutor = document.getElementById("viseOautoru");
var boksAutorMain = document.getElementById("infoAutor");
var dodatak = document.getElementById("autorDodatak");
dugmeAutor.onclick = function(){
  boksAutorMain.classList.remove("col-lg-12");
  boksAutorMain.classList.add("col-lg-8");
  dodatak.style.display="block";
  dodatak.classList.add("col-lg-4");
  console.log(dugmeAutor.textContent);
  if (dugmeAutor.textContent=="More about author"){
    dugmeAutor.textContent=="Less";
  }
}


//plugin 
$(function() {
  
  var slideCount =  $(".slider ul li").length;
  var slideWidth =  $(".slider ul li").width();
  var slideHeight =  $(".slider ul li").height();
  var slideUlWidth =  slideCount * slideWidth;
  
  $(".slider").css({"max-width":slideWidth, "height": slideHeight});
  $(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
  $(".slider ul li:last-child").prependTo($(".slider ul"));
  
  function moveLeft() {
    $(".slider ul").stop().animate({
      left: + slideWidth
    },700, function() {
      $(".slider ul li:last-child").prependTo($(".slider ul"));
      $(".slider ul").css("left","");
    });
  }
  
  function moveRight() {
    $(".slider ul").stop().animate({
      left: - slideWidth
    },700, function() {
      $(".slider ul li:first-child").appendTo($(".slider ul"));
      $(".slider ul").css("left","");
    });
  }
  
  
  $(".next").on("click",function(){
    moveRight();
  });
  
  $(".prev").on("click",function(){
    moveLeft();
  });
  
  
});