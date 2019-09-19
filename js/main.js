// Données et variables
var client = {
	hicham : 400,
	abdou : 200,
	youssef : 271,
	hamza : 2700,
	yazid : 650,
	yann : 400,
        mohamed : 2600,
	admin : 2500,
        mehdisk : 600, 
	ahmed : 350,
	znata : 100,
}, 
identi = {
	hicham : "h9595",
	abdou : "a777",
    youssef : "y590",
    hamza : "hamouza15",
    yazid : "eruno76",
    admin : "admin1",
    yann : "gigoto",
    mohamed : "mohamed5001",
    mehdisk : "mehdisk",
    ahmed : "ahmedsalem",
    znata : "znatamehdi",
},
prenom = {
	hicham : "Hicham",
	abdou : "Abdou",
	youssef : "Youssef",
	hamza : "Hamza",
	yazid : "Yazid",
	admin : "Admin",
	yann : "Yann",
        mohamed : "Mohamed",
        mehdisk : "Mehdi",
	znata : "Mehdi",
	ahmed : "Ahmed",
}


// Fonction pour se connecter
function getValue() {
     //Recupere l'identifiant
     var inputVal = document.getElementById('Identifiant').value;
 
     //Vérifie à qui il appartient
     if (inputVal == identi.hicham) {
     	document.getElementById('Balance').style.display = 'inline';
     	document.getElementById('Prenom').innerHTML = prenom.hicham;
     	document.getElementById('Argent').innerHTML = client.hicham;
     	document.getElementById('Identifiant').style.display = 'none';
     	document.getElementById('Connecter').style.display = 'none';
	document.getElementById('EventInfo').style.display = 'none';
     } else if (inputVal == identi.abdou) {
     	document.getElementById('Balance').style.display = 'inline';
     	document.getElementById('Prenom').innerHTML = prenom.abdou;
     	document.getElementById('Argent').innerHTML = client.abdou;
     	document.getElementById('Identifiant').style.display = 'none';
     	document.getElementById('Connecter').style.display = 'none';
	document.getElementById('EventInfo').style.display = 'none';    
     } else if (inputVal == identi.youssef) {
     	document.getElementById('Balance').style.display = 'inline';
     	document.getElementById('Prenom').innerHTML = prenom.youssef;
     	document.getElementById('Argent').innerHTML = client.youssef;
     	document.getElementById('Identifiant').style.display = 'none';
     	document.getElementById('Connecter').style.display = 'none';
	document.getElementById('EventInfo').style.display = 'none';
     } else if (inputVal == identi.hamza) {
     	document.getElementById('Balance').style.display = 'inline';
     	document.getElementById('Prenom').innerHTML = prenom.hamza;
     	document.getElementById('Argent').innerHTML = client.hamza;
     	document.getElementById('Identifiant').style.display = 'none';
     	document.getElementById('Connecter').style.display = 'none';
        document.getElementById('EventInfo').style.display = 'none';
     } else if (inputVal == identi.yazid) {
     	document.getElementById('Balance').style.display = 'inline';
     	document.getElementById('Prenom').innerHTML = prenom.yazid;
     	document.getElementById('Argent').innerHTML = client.yazid;
     	document.getElementById('Identifiant').style.display = 'none';
     	document.getElementById('Connecter').style.display = 'none';
	document.getElementById('EventInfo').style.display = 'none';
     } else if (inputVal == identi.admin) {
     	document.getElementById('Balance').style.display = 'inline';
     	document.getElementById('Prenom').innerHTML = prenom.admin;
     	document.getElementById('Argent').innerHTML = client.admin;
     	document.getElementById('Identifiant').style.display = 'none';
     	document.getElementById('Connecter').style.display = 'none';
	document.getElementById('EventInfo').style.display = 'none';
     } else if (inputVal == identi.yann) {
     	document.getElementById('Balance').style.display = 'inline';
     	document.getElementById('Prenom').innerHTML = prenom.yann;
     	document.getElementById('Argent').innerHTML = client.yann;
     	document.getElementById('Identifiant').style.display = 'none';
     	document.getElementById('Connecter').style.display = 'none';
	document.getElementById('EventInfo').style.display = 'none';
     } else if (inputVal == identi.mohamed) {
     	document.getElementById('Balance').style.display = 'inline';
     	document.getElementById('Prenom').innerHTML = prenom.mohamed;
     	document.getElementById('Argent').innerHTML = client.mohamed;
     	document.getElementById('Identifiant').style.display = 'none';
     	document.getElementById('Connecter').style.display = 'none';
	document.getElementById('EventInfo').style.display = 'none';
          } else if (inputVal == identi.mehdisk) {
     	document.getElementById('Balance').style.display = 'inline';
     	document.getElementById('Prenom').innerHTML = prenom.mehdisk;
     	document.getElementById('Argent').innerHTML = client.mehdisk;
     	document.getElementById('Identifiant').style.display = 'none';
     	document.getElementById('Connecter').style.display = 'none';
	document.getElementById('EventInfo').style.display = 'none';
} else if (inputVal == identi.ahmed) {
     	document.getElementById('Balance').style.display = 'inline';
     	document.getElementById('Prenom').innerHTML = prenom.ahmed;
     	document.getElementById('Argent').innerHTML = client.ahmed;
     	document.getElementById('Identifiant').style.display = 'none';
     	document.getElementById('Connecter').style.display = 'none';
	document.getElementById('EventInfo').style.display = 'none';
} else if (inputVal == identi.znata) {
     	document.getElementById('Balance').style.display = 'inline';
     	document.getElementById('Prenom').innerHTML = prenom.znata;
     	document.getElementById('Argent').innerHTML = client.znata;
     	document.getElementById('Identifiant').style.display = 'none';
     	document.getElementById('Connecter').style.display = 'none';
	document.getElementById('EventInfo').style.display = 'none';
} else {
       alert("Erreur! Ce compte n'existe pas. Veuillez vérifier à nouveau votre Identifiant.");
     }

}
// Animation du titre
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
