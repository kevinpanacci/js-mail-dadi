var databaseEmail = ['pincopallino@gmail.com', 'carlorossi@gmail.com', 'emailcorretta@gmail.com', 'mariorossi@gmail.com', 'lucarossi@gmail.com'];
var correctEmail = prompt('Inserisci la tua email');

for (var i = 0; i < databaseEmail.length; i++) {
    if (databaseEmail[i] == correctEmail) {
        console.log('Accesso consentito');
    } else {
        console.log('Accesso non consentito');
    }
}
