var databaseEmail = ['pincopallino@gmail.com', 'carlorossi@gmail.com', 'random@gmail.com', 'mariorossi@gmail.com', 'lucarossi@gmail.com'];
var correctEmail = prompt('Inserisci la tua email');
var x = 'Accesso non consentito'

for (var i = 0; i < databaseEmail.length; i++) {
    if (databaseEmail[i] == correctEmail) {
        var x = 'Accesso consentito'
    }
}

console.log(x);
