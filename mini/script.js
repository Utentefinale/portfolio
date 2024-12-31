let lan = "EN";

document.addEventListener('DOMContentLoaded', () => {
    
    // TRANSLATIONS
    var userLanguage = navigator.language || navigator.userLanguage;

    if (userLanguage === 'it' || userLanguage === 'it-IT') {
        lan = "IT";
        console.log("Il dispositivo è in italiano.");
    }

    // WORDS START
    // Array di parole da visualizzare
    const words = ["DISCRIMINATIONS", "LGBTQ", "RELATIONSHIPS", "PARENTHOOD","PASSIONS","ADOPTIONS","MENTAL HEALTH","CAREERS","FRIENDSHIPS","FAMILY","IDENTITY","SEXUALITY","MINDFULNESS","WELLBEING"];
    const container = document.getElementById("words");
    function createWord(word) {
        const span = document.createElement("span");
        span.textContent = word;
        span.classList.add("word");
        // Posizionamento casuale
        span.style.left = Math.random() * 100 + "vw";
        span.style.top = Math.random() * 100 + "vh";
        // Durata e ritardo casuale per l'animazione
        const duration = Math.random() * 3 + 2; // Da 2 a 5 secondi
        const delay = Math.random() * 10;       // Da 0 a 5 secondi
        span.style.animationDuration = `${duration}s`;
        span.style.animationDelay = `${delay}s`;
        if(span.style.top.slice(0,-2) < 30 || span.style.top.slice(0,-2) > 50)
            container.appendChild(span);
        // Rimuovi l'elemento dopo l'animazione
        setTimeout(function() {
            try { container.removeChild(span) } catch (e) { }
        }, (duration + delay) * 1000);
    }
    function spawnWords() {
    words.forEach(word => createWord(word));
    }
    // Genera parole periodicamente
    setInterval(spawnWords, 2000);
    // WORDS END


    document.querySelector('.toggle-button').addEventListener('click', expand);
    document.querySelector('#description').addEventListener('click', expand);

    function expand(){
      const text = document.querySelector('#description');
      const button = document.querySelector('.toggle-button');
    
      if (text.classList.contains('expanded')) {
        text.classList.remove('expanded');
        button.innerHTML = 'READ MORE';
        //button.innerHTML = '<i class="fa fa-caret-down"></i>';
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Scorrimento fluido
        });
      } else {
        text.classList.add('expanded');
        button.innerHTML = 'READ LESS';
        //button.innerHTML = '<i class="fa fa-caret-up"></i>';
      }
    }

    // MATRIX EFFECT
    const canvas = document.getElementById('matrix');

    const ctx = canvas.getContext('2d');

    // Imposta le dimensioni del canvas

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

    // Caratteri usati nello stile Matrix

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    const fontSize = 16;

    const columns = canvas.width / fontSize;

    // Array che tiene traccia della posizione di ogni colonna

    const drops = Array(Math.floor(columns)).fill(1);

    // Funzione per disegnare l'effetto

    function draw() {

        // Sfuma lo sfondo per l'effetto scia

        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Imposta il colore e il font

        ctx.fillStyle = '#0F0'; // Verde Matrix

        ctx.font = `${fontSize}px monospace`;

        // Disegna i caratteri

        drops.forEach((y, index) => {

            const text = letters.charAt(Math.floor(Math.random() * letters.length));

            const x = index * fontSize;

            ctx.fillText(text, x, y * fontSize);

            // Resetta il drop se esce dallo schermo o casualmente

            if (y * fontSize > canvas.height || Math.random() > 0.975) {

                drops[index] = 0;

            }

            drops[index]++;

        });

    }

    // Anima l'effetto

    setInterval(draw, 50);

    // Aggiorna il canvas in caso di resize

    window.addEventListener('resize', () => {

        canvas.width = window.innerWidth;

        canvas.height = window.innerHeight;

    }); 

});

