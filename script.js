function showCard(cardNumber) {
    const card = document.getElementById('card' + cardNumber);

    // Disabilita lo scroll della pagina
    document.body.style.overflow = 'hidden';

    // Mostra la card con animazione
    setTimeout(() => {
        card.classList.remove('hide');
        card.classList.add('show');
        card.style.display = 'flex'; // Cambia il display per rendere la card visibile
    }, 50); // Ritardo per assicurare il corretto timing dell'animazione

    // Resetta lo scroll della card
    card.scrollTop = 0;

}

function hideCard(cardNumber) {
    const card = document.getElementById('card' + cardNumber);
  
    // Nasconde la card con animazione
    card.classList.remove('show');
    card.classList.add('hide');

    // Riabilita lo scroll della pagina
    document.body.style.overflow = 'auto';

    // Nasconde la card completamente dopo l'animazione
    setTimeout(() => {
        card.style.display = 'none';
    }, 500); // Durata della transizione (0.5s)

}

function handleAnswer(answer) {
    // Ridurre l'opacità della sezione della domanda per un'animazione di scomparsa
    const questionSection = document.getElementById('questionSection');
    questionSection.style.opacity = '0';

    // Aspetta che l'animazione finisca prima di nascondere la sezione
    setTimeout(() => {
        questionSection.style.display = 'none';
        document.getElementById('page').style.display = 'flex';
        document.getElementById('page').style.opacity = 1;
    }, 200); 
}