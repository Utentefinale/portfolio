function showCard(cardNumber) {
    const card = document.getElementById('card' + cardNumber);
    const overlay = document.getElementById('overlay');

    // Disabilita lo scroll della pagina
    document.body.style.overflow = 'hidden';

    // Mostra l'overlay con animazione
    overlay.classList.add('show');

    // Mostra la card con animazione
    setTimeout(() => {
        card.classList.remove('hide');
        card.classList.add('show');
        card.style.display = 'flex'; // Cambia il display per rendere la card visibile
    }, 50); // Ritardo per assicurare il corretto timing dell'animazione

    // Resetta lo scroll della card
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

    // Nasconde la card con animazione
    card.classList.remove('show');
    card.classList.add('hide');

    // Riabilita lo scroll della pagina
    document.body.style.overflow = 'auto';

    // Nasconde la card completamente dopo l'animazione
    setTimeout(() => {
        card.style.display = 'none';
    }, 500); // Durata della transizione (0.5s)

    // Nasconde l'overlay dopo la chiusura della card
    overlay.classList.remove('show');
}

function handleAnswer(answer) {
    // Nascondere la sezione della domanda
    document.getElementById('questionSection').style.display = 'none';
    
    // Mostrare la sezione del profilo
    document.getElementById('page').style.display = 'flex'; // Assicurati che sia visibile come flex per centrare gli elementi

    // Puoi anche fare qualcosa con la risposta, ad esempio loggarla
    console.log("Risposta dell'utente:", answer);
}