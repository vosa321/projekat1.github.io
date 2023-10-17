// Promena stila elementa
var heading = document.querySelector('h1');
heading.style.color = 'red';

// Preuzimanje podataka iz forme
var registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;

  console.log('Podaci prijave:');
  console.log('Ime i prezime:', name);
  console.log('Godine:', age);
});

// Niz i petlja
var players = ['Marko', 'Milan', 'Jovan', 'Nikola'];
for (var i = 0; i < players.length; i++) {
  console.log('Igrač:', players[i]);
}

// Funkcije sa ulaznim parametrima i povratnim vrednostima
function calculateTotalScore(scores) {
  var total = 0;
  for (var i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total;
}

function displayPlayerScore(playerName, scores) {
  var totalScore = calculateTotalScore(scores);
  console.log('Igrač:', playerName);
  console.log('Ukupan broj bodova:', totalScore);
}

var player1Scores = [10, 15, 12];
displayPlayerScore('Marko', player1Scores);

// Dodavanje događaja na link "Početna"
var homeLink = document.querySelector('nav ul li:first-child a');
homeLink.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Kliknuto je na link "Početna".');
});

// Dodavanje događaja na link "Kampovi"
var campsLink = document.querySelector('nav ul li:nth-child(2) a');
campsLink.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Kliknuto je na link "Kampovi".');
});

// Kontrolna struktura
var day = 'Ponedeljak';
switch (day) {
  case 'Ponedeljak':
    console.log('Danas je ponedeljak.');
    break;
  case 'Utorak':
    console.log('Danas je utorak.');
    break;
  default:
    console.log('Danas je neki drugi dan.');
    break;
}

// Kod za sekciju prijava
var registrationSection = document.getElementById('prijava');
registrationSection.addEventListener('mouseover', function(event) {
  registrationSection.style.backgroundColor = 'lightgray';
});

registrationSection.addEventListener('mouseout', function(event) {
  registrationSection.style.backgroundColor = 'white';
});

// Dobijanje reference na formu
const form = document.getElementById("registrationForm");

// Definisanje funkcije koja će se izvršiti kada se forma podnese
function handleFormSubmit(event) {
  event.preventDefault(); // Preventiramo podnošenje forme i osvežavanje stranice

  // Dobijanje unetih vrednosti iz polja
  const name = form.elements.name.value;
  const age = form.elements.age.value;


  // Prikazivanje poruke o uspešnoj prijavi
  alert(`Hvala ${name}! Uspešno ste se prijavili na fudbalski kamp.`);

  // Resetovanje polja unosa nakon uspešne prijave
  form.reset();
}

// Dodavanje događaja "submit" na formu
form.addEventListener("submit", handleFormSubmit);


/*

Promena stila elementa:
javascript
Copy code
var heading = document.querySelector('h1');
heading.style.color = 'red';
Ova linija koda dobija referencu na prvi <h1> element na stranici 
koristeći document.querySelector('h1'). Zatim se menja stil tog elementa
tako da mu se boja teksta postavi na crvenu.


Preuzimanje podataka iz forme:
javascript
Copy code
var registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;

  console.log('Podaci prijave:');
  console.log('Ime i prezime:', name);
  console.log('Godine:', age);
});
Ove linije koda prvo dobijaju referencu na formu sa ID-om "registrationForm" 
koristeći document.getElementById('registrationForm'). Zatim se dodaje događaj 
"submit" na formu. Kada korisnik podnese formu, funkcija se izvršava. U ovoj funkciji, 
event.preventDefault() sprečava podnošenje forme i osvežavanje stranice. Zatim se dobijaju 
vrednosti unetih podataka iz polja "name" i "age", i prikazuju se u konzoli.


Niz i petlja:
javascript
Copy code
var players = ['Marko', 'Milan', 'Jovan', 'Nikola'];
for (var i = 0; i < players.length; i++) {
  console.log('Igrač:', players[i]);
}
Ovi delovi koda definišu niz players sa imenima igrača. Zatim se koristi petlja for kako bi se 
iteriralo kroz elemente niza i prikazalo ime svakog igrača u konzoli.


Funkcije sa ulaznim parametrima i povratnim vrednostima:
javascript
Copy code
function calculateTotalScore(scores) {
  var total = 0;
  for (var i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total;
}

function displayPlayerScore(playerName, scores) {
  var totalScore = calculateTotalScore(scores);
  console.log('Igrač:', playerName);
  console.log('Ukupan broj bodova:', totalScore);
}

var player1Scores = [10, 15, 12];
displayPlayerScore('Marko', player1Scores);
Ovi delovi koda definišu dve funkcije. Prva funkcija calculateTotalScore prima niz bodova i ž
izračunava ukupan broj bodova sabiranjem svih elemenata niza. Druga funkcija displayPlayerScore 
prikazuje ime igrača i ukupan broj bodova pozivajući prethodno definisanu funkciju calculateTotalScore. 
Na kraju se poziva displayPlayerScore sa određenim imenom igrača i nizom bodova.


Dodavanje događaja na link "Početna":
javascript
Copy code
var homeLink = document.querySelector('nav ul li:first-child a');
homeLink.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Kliknuto je na link "Početna".');
});
Ove linije koda dobijaju referencu na prvi link u navigaciji koristeći document.querySelector
('nav ul li:first-child a'). Zatim se dodaje događaj "click" na taj link. Kada se klikne na link, 
funkcija se izvršava. U ovoj funkciji, event.preventDefault() sprečava podrazumevano ponašanje linka 
(prelazak na drugu stranicu). Takođe, prikazuje se poruka u konzoli.


Dodavanje događaja na link "Kampovi":
javascript
Copy code
var campsLink = document.querySelector('nav ul li:nth-child(2) a');
campsLink.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Kliknuto je na link "Kampovi".');
});
Ove linije koda dobijaju referencu na drugi link u navigaciji koristeći document.querySelector
('nav ul li:nth-child(2) a'). Zatim se dodaje događaj "click" na taj link. Kada se klikne na link, 
funkcija se izvršava. U ovoj funkciji, event.preventDefault() sprečava podrazumevano ponašanje linka 
(prelazak na drugu stranicu). Takođe, prikazuje se poruka u konzoli.


Kontrolna struktura:
javascript
Copy code
var day = 'Ponedeljak';
switch (day) {
  case 'Ponedeljak':
    console.log('Danas je ponedeljak.');
    break;
  case 'Utorak':
    console.log('Danas je utorak.');
    break;
  default:
    console.log('Danas je neki drugi dan.');
    break;
}
Ovi delovi koda demonstriraju kontrolnu strukturu switch. Promenljiva day je postavljena na vrednost 
"Ponedeljak". Zatim se koristi switch da se proveri vrednost day. Ako je vrednost "Ponedeljak", prikazuje 
se odgovarajuća poruka. Ako je vrednost "Utorak", prikazuje se druga poruka. Ako nijedan od slučajeva nije 
zadovoljen, prikazuje se poruka "Danas je neki drugi dan.".


Kod za sekciju prijava:
javascript
Copy code
var registrationSection = document.getElementById('registrationSection');
registrationSection.addEventListener('mouseover', function(event) {
  registrationSection.style.backgroundColor = 'lightgray';
});

registrationSection.addEventListener('mouseout', function(event) {
  registrationSection.style.backgroundColor = 'white';
});
Ovi delovi koda dobijaju referencu na sekciju prijave sa ID-om "registrationSection" 
koristeći document.getElementById('registrationSection'). Zatim se dodaju događaji "mouseover" 
i "mouseout" na tu sekciju. Kada korisnik pređe mišem preko sekcije, funkcija mouseover se izvršava 
i postavlja se boja pozadine na svetlo sivu. Kada korisnik ukloni miš s sekcije, funkcija mouseout se 
izvršava i postavlja se boja pozadine na belu.


Nadam se da vam ovo detaljno objašnjenje pomaže da razumete svaki korak u JavaScript kodu. Ako imate 
bilo kakva dodatna pitanja, slobodno pitajte!


OVO SE ODNOSI NA DEO KAD U ALERT PROZORU SE KAŽE HVALA NA PRIJAVI....
const form = document.getElementById("registrationForm");
Ova linija dobija referencu na formu sa ID-om "registrationForm" koristeći getElementById. Referenca se čuva u promenljivoj form koja će nam omogućiti dalji pristup elementima forme.

function handleFormSubmit(event) { ... }
Ova funkcija definiše postupak koji se izvršava kada se forma podnese. Ona prima event objekat kao parametar, koji predstavlja događaj podnošenja forme.

event.preventDefault();
Ova linija sprečava podnošenje forme i osvežavanje stranice.
 To se postiže pozivom preventDefault() metode nad event objektom. 
 Na taj način se sprečava podrazumevano ponašanje obrasca.

const name = form.elements.name.value;
Ova linija dobija vrednost unetu u polje sa imenom "name" u formi. 
Pristup vrednostima polja vrši se preko elements objekta forme, a 
vrednost se čita iz value atributa.

const age = form.elements.age.value;
Ova linija dobija vrednost unetu u polje sa imenom "age" u formi, 
na sličan način kao i prethodna linija.

alert(Hvala ${name}! Uspešno ste se prijavili na fudbalski kamp.);
Ova linija prikazuje poruku o uspešnoj prijavi korisnika na fudbalski kamp. 
Koristi se alert funkcija koja prikazuje dijalog sa porukom. U poruci se koristi 
interpolacija stringova (${name}) za ubacivanje vrednosti imena koje je korisnik uneo u formi.

form.reset();
Ova linija resetuje polja forme na njihove početne vrednosti, čime se čisti forma nakon uspešne prijave.

form.addEventListener("submit", handleFormSubmit);
Ova linija dodaje događaj "submit" na formu, koji se aktivira kada se forma podnese. 
Kao funkcija za obradu tog događaja koristi se handleFormSubmit funkcija koju smo definisali ranije. 
Tako se postiže da kada korisnik pritisne dugme za podnošenje forme, izvrši se funkcija handleFormSubmit 
koja prethodno definiše sve korake koje smo opisali.

Nadam se da vam ovo detaljno objašnjenje pomaže da razumete svaki korak u ovom delu JavaScript koda. 
Ako imate bilo kakva dodatna pitanja, slobodno pitajte!
*/