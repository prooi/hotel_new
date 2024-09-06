const text = document.querySelector(".text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "BIENVENUE!";
    }, 0);
    setTimeout(() => {
        text.textContent = "ADANSE!";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Ney waoongo!";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Welcome!";
    }, 12000);
};

textLoad();
setInterval(textLoad, 16000);
