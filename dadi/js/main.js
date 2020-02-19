
var lancioPrimoUtente = Math.floor(Math.random() * 6) + 1;
var  lancioSecondoUtente = Math.floor(Math.random() * 6) + 1;

console.log('Il primo utente ha lanciato: ' + lancioPrimoUtente);
console.log('Il primo utente ha lanciato: ' + lancioSecondoUtente);

if (lancioPrimoUtente >= lancioSecondoUtente) {
    console.log('Il primo utente ha vinto');
} else {
    console.log('Il secondo utente ha vinto');
}
