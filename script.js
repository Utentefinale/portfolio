count = 0;
let intervalId = setInterval(() => {
    slideMenu();
 }, 1000); 

 // Funzione per interrompere il timeout
function stopTimeout() {
    clearInterval(intervalId); // Cancella il timeout
    document.querySelector("#cards").removeEventListener('touchstart', stopTimeout); // Per dispositivi touch
    document.querySelector("#cards").removeEventListener('mousedown', stopTimeout);
    console.log('Timeout interrotto!');
    count = 13;
    setTimeout(() => {
        intervalId = setInterval(() => {
            slideMenu();
        }, 1000);
    }, 8000);
}


function slideMenu(){
    if(count == 0){
        document.querySelector("#cards").addEventListener('touchstart', stopTimeout); // Per dispositivi touch
        document.querySelector("#cards").addEventListener('mousedown', stopTimeout);  // Per mouse/desktop
    }
    if(count > 3 && count%3 == 0 && count < 13){
        const container = document.querySelector("#cards");
        const slide = document.querySelector(".carousel-card").offsetWidth+20;
        container.scrollBy({ top: slide, behavior: 'smooth' });
    }else if(count == 13){
        count = 0;
        const container = document.querySelector("#cards");
        container.scrollTo({ top: 0, behavior: 'smooth' });
    }
    count++;
}