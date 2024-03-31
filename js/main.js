

const btnGroup = document.querySelector(".btn-group-vertical")
const btnMenu = document.querySelectorAll(".btnMenu")

if(btnGroup) {
  btnGroup.style.flexDirection = "row"
  btnGroup.style.gap = "1rem"
}

if(btnMenu) {
  btnMenu.forEach((element) => {
    element.style.borderRadius = "8px"
    element.style.display = "block"
    element.style.width = "max-content"
  })
}

const header = document.querySelector(".jumbotron")
const buttonHeader = document.querySelector(".jumbotron a")
if(header) {
  header.style.background = "#6B757E"
  header.style.color = "#FFFFFF"
  header.style.textAlign = "right"
}
if(buttonHeader) {
  buttonHeader.style.background = "#27A844"
  buttonHeader.style.borderColor = "#27A844"
}




const cardsNodeList = document.querySelectorAll('.card-container');
const cards = document.querySelector('.cards');
const animaisCard = document.querySelector('.animais .btn');

const cardsArray = Array.from(cardsNodeList);

cardsArray.forEach(card => card.remove());

const orderedCards = [
  cardsArray.find(card => card.classList.contains('natureza')),
  cardsArray.find(card => card.classList.contains('animais')),
  cardsArray.find(card => card.classList.contains('pessoas')),
  cardsArray.find(card => card.classList.contains('tecnologia')),
];

orderedCards.forEach(card => cards.appendChild(card));

animaisCard.style.backgroundColor = 'green';
animaisCard.style.color = 'white';




const listGroups = document.querySelector(".list-group")
const listGroupsAll = document.querySelectorAll(".list-group")
const activeListItem = document.querySelector(".list-group-item.active");

activeListItem.classList.remove("active");

const fourthItem = document.createElement("li");
fourthItem.className = "list-group-item active";
fourthItem.textContent = "Quarto item";

const fifthItem = document.createElement("li");
fifthItem.className = "list-group-item";
fifthItem.textContent = "Quinto item";

listGroups.appendChild(fourthItem);
listGroups.appendChild(fifthItem);
