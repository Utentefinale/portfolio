function showCard(cardNumber) {
    const card = document.getElementById('card' + cardNumber);
    const overlay = document.getElementById('overlay');

    // Disabilita lo scroll della pagina
    document.body.style.overflow = 'hidden';

    // Mostra l'overlay
    overlay.classList.add('show');

    // Mostra la card
    card.classList.remove('hide');
    card.classList.add('show');
    card.style.display = 'flex'; // Imposta il display su flex per rendere la card visibile

    // Resetta lo scroll della card in alto
    card.scrollTop = 0;

    // Aggiunge il listener per chiudere la card cliccando sull'overlay
    overlay.addEventListener('click', function outsideClickListener() {
        hideCard(cardNumber);
        overlay.classList.remove('show');
        overlay.removeEventListener('click', outsideClickListener);
    });
}

function hideCard(cardNumber) {
    const card = document.getElementById('card' + cardNumber);
    const overlay = document.getElementById('overlay');

    // Riabilita lo scroll della pagina
    document.body.style.overflow = 'auto';

    // Nasconde la card con animazione
    card.classList.remove('show');
    card.classList.add('hide');
    
    // Attendi la fine dell'animazione prima di nascondere completamente la card
    setTimeout(() => {
        card.style.display = 'none';
    }, 300); // Durata della transizione in ms

    // Nasconde l'overlay
    overlay.classList.remove('show');
}