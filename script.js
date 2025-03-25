//  Selezione degli elementi principali della pagina
const overlay = document.getElementById("overlay");       // L'overlay che copre lo schermo quando un'immagine viene cliccata
const overlayImg = document.getElementById("overlay-img"); // L'elemento <img> dentro l'overlay, che mostrerà l'immagine ingrandita
const closeBtn = document.getElementById("close-btn");     // Il pulsante per chiudere l'overlay
const photoContainer = document.getElementById("photo-container"); // Il contenitore delle foto

//  Funzione per mostrare l'overlay con l'immagine selezionata
function showOverlay(imageUrl) {
    overlayImg.src = imageUrl;  // Imposta l'immagine nell'overlay con quella cliccata
    overlay.classList.add("show"); // Aggiunge la classe "show" per rendere visibile l'overlay
}

//  Chiudi l'overlay quando si clicca sul tasto chiudi
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
});

//  Chiudi l'overlay anche se l'utente clicca **fuori dall'immagine**
overlay.addEventListener("click", (event) => {
    if (event.target === overlay) { // Controlla se il click è avvenuto sull'overlay (non sull'immagine o sul bottone)
        overlay.classList.remove("show"); // Nasconde l'overlay rimuovendo la classe "show"
    }
});

//  Gestione del click su qualsiasi immagine (anche quelle caricate dinamicamente)
photoContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("img-in")) { // Controlla se l'elemento cliccato ha la classe "img-in"
        showOverlay(event.target.src); // Se sì, chiama la funzione per aprire l'overlay con l'immagine cliccata
    }
});

//  Chiamata AJAX per ottenere le immagini dinamicamente dall'API
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => { // Se la richiesta ha successo:
        photoncontainer.innerHTML = '';
        response.data.slice(0, 5).forEach(obj => { // Prende solo le prime 5 immagini
            photoContainer.innerHTML += ` 
                <div class="photo-card">
                    <img src="img/pin.svg" class="pin" alt="Pin">
                    <div class="photo">
                        <img class="img-in" src="${obj.url}" alt="Immagine">
                    </div>
                    <p class="caption">${obj.date}</p>
                    <p class="title">${obj.title}</p>
                </div>
            `;
        });
    })
    .catch(error => console.error("Errore nel caricamento delle immagini:", error)); // Se c'è un errore, lo stampa in console
