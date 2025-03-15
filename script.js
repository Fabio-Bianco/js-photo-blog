
// script.js

const photoContainer = document.getElementById("photo-container");

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        response.data.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("photo-card");

            card.innerHTML = `
                <img src="img/pin.svg" class="pin" alt="Pin">
                <div class="photo">
                    <img src="${item.image}" alt="">
                </div>
                <p class="caption">${item.caption}</p>
            `;

            photoContainer.appendChild(card);
        });
    })
    .catch(error => console.error("Errore nel caricamento delle immagini:", error));
