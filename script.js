
const photoContainer = document.getElementById("photo-container");

axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then(response => {
    // Limitiamo a 5 nuove card (la prima è già presente)
    response.data.slice(0, 5).forEach((obj) => {
        const card = document.createElement("div");
        card.classList.add("photo-card");

            card.innerHTML = `
                <img src="img/pin.svg" class="pin" alt="Pin">
                <div class="photo">
                    <img src="${obj.image}" alt="">
                </div>
                <p class="caption">${obj.caption}</p>
            `;

            photoContainer.appendChild(card);
        });
    })
    .catch(error => console.error("Errore nel caricamento delle immagini:", error));
