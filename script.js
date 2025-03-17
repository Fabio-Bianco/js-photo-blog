const summerPhoto = [
  {
    id: 1,
    title: "Skate Park",
    date: "01-07-2024",
    url: "https://marcolanci.it/boolean/assets/pictures/1.png",
  },
  {
    id: 2,
    title: "Passeggiata",
    date: "16-07-2024",
    url: "https://marcolanci.it/boolean/assets/pictures/2.png",
  },
  {
    id: 3,
    title: "Alpi",
    date: "01-07-2024",
    url: "https://marcolanci.it/boolean/assets/pictures/3.png",
  },
  {
    id: 4,
    title: "Sagra",
    date: "21-08-2024",
    url: "https://marcolanci.it/boolean/assets/pictures/4.png",
  },
  {
    id: 5,
    title: "Watergun",
    date: "23-08-2024",
    url: "https://marcolanci.it/boolean/assets/pictures/5.png",
  },
  {
    id: 6,
    title: "Riviera",
    date: "30-08-2024",
    url: "https://marcolanci.it/boolean/assets/pictures/6.png",
  },
];

const photoContainer = document.getElementById("photo-container");

axios
  .get("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => {
    response.data.slice(0, 5).forEach((obj) => {
      const card = document.createElement("div");
      card.classList.add("photo-card");

      card.innerHTML = `
        <img src="img/pin.svg" class="pin" alt="Pin">
        <div class="photo">
          <img class="img-in" src="${obj.url}" alt="${obj.url}">
        </div>
        <p class="caption">${obj.date}</p>
        <p class="title">${obj.title}</p>
        
      `;
      photoContainer.appendChild(card);
    });
  })
  .catch((error) =>
    console.error("Errore nel caricamento delle immagini:", error)
  );
