const IMAGE_URL = "https://placehold.co/200";

const CARD_CONTAINER = document.getElementById("container");

//* Función crea un elemento con contenido de texto.

const createElementWithText = (tag, text) => {
    const element = document.createElement(tag);

    element.textContent = text;

    return element; 

};

//* Función ccrea una tarjeta para un usuario

const createCard = (user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const image = document.createElement("img");
    image.src = IMAGE_URL;
    image.alt = 'Placeholder user photo';
    imgContainer.appendChild(image);

    const userName = createElementWithText("h3", user.user_name);
    const description = createElementWithText("p", user.description);
    const age = createElementWithText("p", `Age: ${user.age}`);
    const bands = document.createElement("ul");

    user.fav_music.bands.forEach((band) => {
        const bandItem = createElementWithText("li", band);
        bands.appendChild(bandItem);
    });

    //* Elementos al card

    card.append(imgContainer, userName, description, age, bands);
    
    return card;
};

//* Renderizar todas las tarjetas
const renderCards = (users) => {
    CARD_CONTAINER.innerHTML = "";     
    
    //&Limpiar contenido previo

    users.forEach((user) => {
        const userCard = createCard(user);

        CARD_CONTAINER.appendChild(userCard);
    });
};

// *Datos de usuarios

const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: ['Band 1', 'Band 2', 'Band 3', 'Band 4']
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: ['Band 1', 'Band 2', 'Band 3', 'Band 4']
        }
    }
];


renderCards(users);